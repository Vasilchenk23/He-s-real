import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useParams } from 'react-router-dom';


const pb = new PocketBase('http://127.0.0.1:8090');


const ReviewModal = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userTelephone, setUserTelephone] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        userName,
        userTelephone,
        selectedImage,
      };

      // Use PocketBase to add the order data to your "Feedback" collection
      await pb.collection('Feedback').create(orderData);

      // Additional handling, if needed
      console.log('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      onClose(); // Close the modal whether successful or not
    }
  };

  return (
    <div className="review-modal">
      <div className="review-modal-content">
        <h2 className='h2RevieModalContent'>ДОБАВИТЬ ОТЗЫВ</h2>
        <input
          className='inputTextRevieModalContent'
          type="text"
          name=""
          id=""
          placeholder='Введите текст отзыва'
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className='inputTelRevieModalContent'
          type="tel"
          name=""
          id=""
          placeholder='Номер телефона'
          onChange={(e) => setUserTelephone(e.target.value)}
        />
        <p className='pRevieModalContent'>
          Нужен менеджеру для связи с вами. Он не будет доступен для других пользователей!
        </p>
        <div className="downloadImageBlock">
          <label htmlFor="imageInput">
            <div className="downloadImageBlock">
            <img src="/cloud-upload.svg" alt="" />
            <div>ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ</div>
            </div>
          </label>
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none', width:'50px', height:'50px' }}
          />
        </div>
        {selectedImage && (
          <img
            className='selectedImage'
            src={URL.createObjectURL(selectedImage)}
            alt='Selected'
            style={{ width:'100px', height:'100px', margin:'0 auto -10px' }}
          />
        )}
        <div className="buttonsBag">
          <button className='buttonClose' onClick={onClose}>
            Отмена
          </button>
          <button className='buttonOpen' onClick={handleOrderSubmit}>Добавить</button>
        </div>
      </div>
    </div>
  );
};

const ShoppingBag = ({ productDetails, department }) => {
  const { productId } = useParams();
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productDetails.price);
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);

  // User input state variables
  const [userName, setUserName] = useState('');
  const [userTelephone, setUserTelephone] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');
  const [deliveryArea, setDeliveryArea] = useState('');
  const [deliveryCity, setDeliveryCity] = useState('');
  const [deliveryDepart, setDeliveryDepart] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [orderComment, setOrderComment] = useState('');

  const increaseQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      updateTotalPrice(newQuantity);
      return newQuantity;
    });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        updateTotalPrice(newQuantity);
        return newQuantity;
      });
    }
  };

  const updateTotalPrice = (newQuantity) => {
    setTotalPrice(newQuantity * productDetails.price);
  };
  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  const fetchProductDetails = async () => {
    try {
      const productDetailsResponse = await pb.collection(`${department}Collection`).getOne(productId);
      console.log('Product Details:', productDetailsResponse);
      setProducts([{ ...productDetailsResponse, quantity, totalPrice: quantity * productDetailsResponse.price }]);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };


  const deleteProduct = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
  };

  const openReviewModal = () => {
    setReviewModalOpen(true);
  };

  const closeReviewModal = () => {
    setReviewModalOpen(false);
  };

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserTelephoneChange = (e) => {
    setUserTelephone(e.target.value);
  };

  const handleDeliveryMethodChange = (e) => {
    setDeliveryMethod(e.target.value);
  };

  const handleDeliveryAreaChange = (e) => {
    setDeliveryArea(e.target.value);
  };

  const handleDeliveryCityChange = (e) => {
    setDeliveryCity(e.target.value);
  };

  const handleDeliveryDepartChange = (e) => {
    setDeliveryDepart(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleOrderCommentChange = (e) => {
    setOrderComment(e.target.value);
  };

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        userName,
        userTelephone,
        deliveryMethod,
        deliveryArea,
        deliveryCity,
        deliveryDepart,
        paymentOption,
        orderComment,
        selectedImage,
      };

      // Use PocketBase to add the order data to your collection
      await pb.collection('kidsReviews').create(orderData);

      // You may want to do additional handling here, such as showing a success message
      console.log('Order submitted successfully');
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };



  return (
    <>
      <h1 className='basketBag'>Корзина</h1>
      <p className='clearBasketBag'>Очистить корзину</p>
      {products.map(product => (
        <div key={product.id} className="blockBag">
          <img
            className='imageBasket'
            src={`http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.image[0]}?token=`}
            alt={product.productName}
          />
          <h2 className='productNameBg'>{product.productName}</h2>
          <div className="quantity">
            <div className="plus" onClick={increaseQuantity}>+</div>
            <div className="number">{quantity}</div>
            <div className="minus" onClick={decreaseQuantity}>-</div>
          </div>
          <div className="priceProduct">₴{totalPrice}</div>
          <div className="delete" onClick={() => deleteProduct(product.id)}>
            <img src="/trash.svg" alt="" />
          </div>
        </div>
      ))}
    <div className="mainOrder">
    <h1 className='ordering'>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
    <div className="order">
      <div className="userData">
        <h2>Данные покупателя</h2>
       <div className='nameUserBag'><input className='inputNameUserBag' type="text" placeholder='Имя'  onChange={handleUserNameChange}/></div> 
       <div className='telephoneUserBag'><input className='inputTelephoneUserBag' type="tel" placeholder='Введите номер телефона' onChange={handleUserTelephoneChange}/></div> 
      </div>
      <div className="delivery">
        <h2>Доставка</h2>
      <label htmlFor="deliveryMethod">Способ доставки</label>
        <select 
        className='deliveryLabel'
        id="deliveryMethod"
        name="deliveryMethod"
        onChange={handleDeliveryMethodChange}
        value={deliveryMethod}
        >
            <option value="Новая Почта">Новая Почта</option>
            <option value="Укр Почта">Укр Почта</option>
            <option value="Meest express">Meest express</option>
        </select>
      <label for="name">Область</label>
        <select 
        className='deliveryLabel'
        id="deliveryArea"
        name="deliveryArea"
        onChange={handleDeliveryAreaChange}
        value={deliveryArea}
        >
            <option value="Харьковская">Харьковская</option>
            <option value="Киевская">Киевская</option>
            <option value="Днепропетровская">Днепропетровская</option>
        </select>
      <label for="name">Город</label>
        <select 
        className='deliveryLabel'
        id="deliveryCity"
        name="deliveryCity"
        onChange={handleDeliveryCityChange}
        value={deliveryCity}
        >
            <option value="Харьков">Харьков</option>
            <option value="Киев">Киев</option>
            <option value="Днепр">Днепр</option>
        </select>
      <label for="name">Отделение</label>
        <select 
         className='deliveryLabel'
         id="deliveryDepart"
         name="deliveryDepart"
         onChange={handleDeliveryDepartChange}
         value={deliveryDepart}
        >
            <option value="144">144</option>
            <option value="35">35</option>
            <option value="278">278</option>
        </select>
      </div>
      <div className="payment">
      <h2>Оплата</h2>
      <div className="pay">
    <div className='inputPay'>
      <input
        type="radio"
        id="Оплата при получении"
        name="paymentOption"
        value="Оплата при получении"
        checked={paymentOption === "Оплата при получении"}
        onChange={handlePaymentOptionChange}
      />
      <label className='labelPay' htmlFor="Оплата при получении">Оплата при получении</label>
    </div>
    <div className='inputPayNow'>
      <input
        type="radio"
        id="Оплата сейчас"
        name="paymentOption"
        value="Оплата сейчас"
        checked={paymentOption === "Оплата сейчас"}
        onChange={handlePaymentOptionChange}
      />
      <label className='labelPayNow' htmlFor="Оплата сейчас">Оплата сейчас</label>
    </div>
  </div>
      </div>
    </div>
   <div className='feedbackBagDiv'><input className='feedbackBag' type="text" placeholder='Комментарий к заказу' onChange={handleOrderCommentChange} /></div>
    <button className='orderButtonBag' onClick={handleOrderSubmit}>Заказать</button>
    </div>
    <div className="reviewsDivBag">
        <button className="reviewsButtonBag" onClick={openReviewModal}>
          Добавить отзыв
        </button>
      </div>
      {isReviewModalOpen && <ReviewModal onClose={closeReviewModal} />}
    </>
  );
};

export default ShoppingBag;
