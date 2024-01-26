import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PocketBase from 'pocketbase';

const AddProductForm = ({ department }) => {
  const pb = new PocketBase('http://127.0.0.1:8090');
  const [previewImage, setPreviewImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      productName: '',
      price: '',
      image: '',
      sizes: '',
      department: '',
    },
    validationSchema: Yup.object({
      productName: Yup.string().required('Обязательное поле'),
      price: Yup.number().required('Обязательное поле').min(0, 'Цена не может быть отрицательной'),
      image: Yup.mixed().required('Обязательное поле'),
      sizes: Yup.string().required('Обязательное поле'),
      department: Yup.string().required('Обязательное поле'),
    }),
    onSubmit: async (values) => {
      try {
        const authResult = await pb.admins.authWithPassword('testuser@gmail.com', 'vasmas2325');
        console.log('Authentication successful:', authResult);

        const response = await pb.collection(`${values.department}Collection`).create({
          productName: values.productName,
          price: values.price,
          image: values.image,
          sizes: values.sizes,
        });

        if (response.ok) {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const jsonData = await response.json();
            console.log(`Товар успешно добавлен в ${values.department} отдел:`, jsonData);
          } else {
            console.log(`Товар успешно добавлен в ${values.department} отдел.`);
          }
        }
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      formik.setFieldValue('image', file); 
      setPreviewImage(URL.createObjectURL(file));
    }
  };
  return (
    <form onSubmit={formik.handleSubmit} className="add-product-form-container">
      <label className="form-label"> 
        Имя товара:
        <input
          type="text"
          id="productName"
          className="productName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
        />
      </label>
      {formik.touched.productName && formik.errors.productName ? (
        <div className="error-message">{formik.errors.productName}</div>
      ) : null}

      <label className="form-label">
        Цена:
        <input
          type="number"
          id="price"
          className="price"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
      </label>
      {formik.touched.price && formik.errors.price ? (
        <div className="error-message">{formik.errors.price}</div>
      ) : null}

      <label className="form-label">
        Картинка:
        <input
          type="file"
          id="image"
          className="image"
          onChange={handleImageChange}
          onBlur={formik.handleBlur}
        />
          {previewImage && <img src={previewImage} alt="Preview" style={{ width: '250px', height: '250px' }} />}
      </label>
      {formik.touched.image && formik.errors.image ? (
        <div className="error-message">{formik.errors.image}</div>
      ) : null}

      <label className="form-label">
        Размеры:
        <input
          type="text"
          id="sizes"
          className="sizes"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sizes}
        />
      </label>
      {formik.touched.sizes && formik.errors.sizes ? (
        <div className="error-message">{formik.errors.sizes}</div>
      ) : null}
      <label className="form-label">
        Отдел:
        <input
          type="text"
          id="department"
          className="department"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.department}
        />
      </label>
      {formik.touched.sizes && formik.errors.sizes ? (
        <div className="error-message">{formik.errors.sizes}</div>
      ) : null}

      <button type="submit" className="submit-btn">Добавить товар</button>
    </form>
  );
};

export default AddProductForm;
