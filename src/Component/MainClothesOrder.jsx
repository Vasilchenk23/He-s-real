import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewModal from './ReviewModal';
import Order from './Order';
import '../../src/App.css';


const MainClothesOrder = () => {
  const { id: productId, price, productName, sizes, collectionId, image } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
 
  const openReviewModal = () => {
    setIsReviewModalOpen(true);
  };
  
  const closeReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  
  const totalPrice = price * quantity;

  const addToCart = () => {
    const newProduct = {
      id: productId,
      productName,
      quantity,
      price,
      totalPrice,
    };
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  return (
    <>
      <h1 className='basketBag'>Корзина</h1>
      <p className='clearBasketBag'>Очистить корзину</p>
      <div className="blockBag">
        <img
          src={`https://pocketbase-production-1de1.up.railway.app/api/files/${collectionId}/${productId}/${image}?token=`}
          alt={productName}
          className='imageMainOrder'
          style={{ maxWidth: '20%', padding:'10px'}}
        />
        <h2 className='productNameBg'>{productName}</h2>
        <div className="quantity">
          <div className="plus" onClick={handleIncrement}>+</div>
          <div className="number">{quantity}</div>
          <div className="minus" onClick={handleDecrement}>-</div>
        </div>
        <div className="priceProduct">₴{totalPrice}</div>
        <div className='sizesProduct'>{sizes}</div>
      </div>
      <Order/>
      <div className="reviewsDivBag">
  <button className="reviewsButtonBag" onClick={openReviewModal}>
    Добавить отзыв
  </button>
</div>
{isReviewModalOpen && <ReviewModal onClose={closeReviewModal} />}
    </>
  );
};


export default MainClothesOrder;

