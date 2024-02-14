import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PocketBase from 'pocketbase';
import axios from 'axios';
import '../../src/App.css';


const pb = new PocketBase('https://pocketbase-production-1de1.up.railway.app/');

const Order = () => {
  const { id: productId, price, productName, sizes, collectionId, image } = useParams();
  const [userName, setUserName] = useState('');
  const [userOrderProduct, setUserOrderProduct] = useState(productName || '');
  const [productSizes, setProductSizes] = useState(sizes || '');
  const [userTelephone, setUserTelephone] = useState('');
  const [cityInput, setCityInput] = useState('');
  const [departInput, setDepartInput] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const [orderComment, setOrderComment] = useState('');
  const [cities, setCities] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [cityNameInput, setCityNameInput] = useState(''); 

  const fetchCities = async () => {
    try {
      const response = await axios.post('https://api.novaposhta.ua/v2.0/json/Address/getCities', {
        apiKey: 'b3439cb932ceb95d04d8470ea45ae4c9',
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          FindByString: '',
        },
      });

      setCities(response.data.data);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const fetchWarehouses = async (cityRef) => {
    try {
      const response = await axios.post('https://api.novaposhta.ua/v2.0/json/Address/getWarehouses', {
        apiKey: 'b3439cb932ceb95d04d8470ea45ae4c9',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityRef: cityRef,
        },
      });

      setWarehouses(response.data.data);
    } catch (error) {
      console.error('Error fetching warehouses:', error);
    }
  };

  useEffect(() => {
    fetchCities();
  }, []);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleUserTelephoneChange = (e) => {
    setUserTelephone(e.target.value);
  };
  const handleUserOrderProductChange = (e) => {
    setUserOrderProduct(e.target.value);
  };
  const handleProductSizesChange = (e) => {
    setProductSizes(e.target.value);
  };

  const handleCityInputChange = (e) => {
    const selectedCityRef = e.target.value;
    const selectedCityName = e.target.options[e.target.selectedIndex].text; 
    setCityInput(selectedCityRef);
    setCityNameInput(selectedCityName); 
    fetchWarehouses(selectedCityRef);
  };

  const handleDepartInputChange = (e) => {
    setDepartInput(e.target.value);
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
        deliveryCityName: cityNameInput,
        deliveryDepart: departInput,
        userOrderProduct,
        productSizes,
        paymentOption,
        orderComment,
      };

      await fetch('https://successful-notebook-production.up.railway.app/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      console.log('Order submitted successfully');
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <>
      <div className="mainOrder">
        <h1 className='ordering'>ОФОРМЛЕНИЕ ЗАКАЗА</h1>
        <div className="order">
          <div className="userData">
            <h2>Данные покупателя</h2>
            <div className='nameUserBag'><input className='inputNameUserBag' type="text" placeholder='Имя' onChange={handleUserNameChange} /></div>
            <div className='telephoneUserBag'><input className='inputTelephoneUserBag' type="tel" placeholder='Введите номер телефона' onChange={handleUserTelephoneChange} /></div>
            <div className='nameUserOrderProduct'><input className='inputUserOrderProduct' type="text" onChange={handleUserOrderProductChange} />{productName}</div>
            <div className='telephoneProductSizes'><input className='inputProductSizes' type="text" onChange={handleProductSizesChange} />{sizes}</div>
          </div>
          <div className="delivery">
            <h2>Доставка</h2>
            <label htmlFor="deliveryCity">Город</label>
            <select
              id="deliveryCity"
              className="deliveryCity"
              onChange={handleCityInputChange}
              value={cityInput}
            >
              <option value="" disabled>Выберите город</option>
              {cities.map(city => (
                <option key={city.Ref} value={city.Ref}>{city.Description}</option>
              ))}
            </select>
            <label htmlFor="name">Отделение</label>
            <select
              className='deliveryLabel'
              id="deliveryDepart"
              onChange={handleDepartInputChange}
              value={departInput}
            >
              <option value="" disabled>Выберите отделение</option>
              {warehouses.map(warehouse => (
                <option key={warehouse.Ref} value={warehouse.Description}>{warehouse.Description}</option>
              ))}
            </select>

          </div>
          <div className="payment">
            <h2 className='h2Payment'>Оплата</h2>
            <div className="pay">
              <div className='inputPay'>
                <input
                  type="radio"
                  id="Оплата при получении"
                  className="paymentOption"
                  value="Оплата при получении"
                  checked={paymentOption === "Оплата при получении"}
                  onChange={handlePaymentOptionChange}
                />
                <label className='labelPay' htmlFor="Оплата при получении">
                  <p className='plabelPay'>Оплата при получении</p>
                </label>
              </div>
              <div className='inputPayNow'>
                <input
                  type="radio"
                  id="Оплата сейчас"
                  className="paymentOption"
                  value="Оплата сейчас"
                  checked={paymentOption === "Оплата сейчас"}
                  onChange={handlePaymentOptionChange}
                />
                <label className='labelPayNow' htmlFor="Оплата сейчас">
                  <p className='plabelPayNow'>Оплата сейчас</p>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='feedbackBagDiv'><input className='feedbackBag' type="text" placeholder='Комментарий к заказу' onChange={handleOrderCommentChange} /></div>
        <button className='orderButtonBag' onClick={handleOrderSubmit}>Заказать</button>
      </div>
    </>
  );
}

export default Order;
