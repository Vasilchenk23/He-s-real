import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import '../../src/App.css';




const pb = new PocketBase('http://127.0.0.1:8090');


const ReviewModal = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [userName, setUserName] = useState('');
  const [userFeedback, setUserFeedback] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleOrderSubmit = async () => {
    try {
      const orderData = {
        userName,
        userFeedback,
        selectedImage,
      };

      await pb.collection('Feedback').create(orderData);

      console.log('Feedback submitted successfully');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    } finally {
      onClose(); 
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
          placeholder='Введите ваше имя'
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          className='inputTelRevieModalContent'
          type="tel"
          name=""
          id=""
          placeholder='Введите текст отзыва'
          onChange={(e) => setUserFeedback(e.target.value)}
        />
        <p className='pRevieModalContent'>
          Нужен менеджеру для связи с вами. Он не будет доступен для других пользователей!
        </p>
        <div className="downloadImageBlock">
          <label htmlFor="imageInput">
            <div className="downloadImageBlock">
            <img src="/cloud-upload.svg" alt="" />
            <div className='downloadImage'>ЗАГРУЗИТЬ ИЗОБРАЖЕНИЕ</div>
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

export default ReviewModal