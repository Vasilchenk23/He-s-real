import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ShoppingBag from './ShoppingBag';
import Footer from './Footer'

const pb = new PocketBase('http://127.0.0.1:8090');

const MainDisplayClothesKids = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [cartCounter, setCartCounter] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [shoppingBagItems, setShoppingBagItems] = useState([]);
  const [isBuyButtonClicked, setIsBuyButtonClicked] = useState(false);

  const addToShoppingBag = () => {
    if (productDetails && !isBuyButtonClicked) {
      setShoppingBagItems([...shoppingBagItems, productDetails]);
      setCartCounter(cartCounter + 1);
      setIsBuyButtonClicked(true);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  async function fetchProductDetails() {
    try {
      const productDetailsResponse = await pb.collection('kidsCollection').getOne(productId);
      console.log('Product Details:', productDetailsResponse);
      setProductDetails(productDetailsResponse);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  if (!productDetails) {
    return <div>Loading Kids</div>;
  }

  return (
    <>
      <Header />
      <div className="clothes-details">
        <img src={`http://127.0.0.1:8090/api/files/${productDetails.collectionId}/${productDetails.id}/${productDetails.image[0]}?token=`} alt={productDetails.productName} />
        <div className="details">
          <h2>{productDetails.productName}</h2>
          <p>Цена: ₴{productDetails.price}</p>
          <p>Размеры: {productDetails.sizes}</p>
        </div>
      </div>
      <div className="buttons">
        <button className="green-button" onClick={addToShoppingBag}>Додати в кошик</button>
        <button className="gray-button" >Купити та додати в кошик</button>
      </div>
      {isBuyButtonClicked && <ShoppingBag department={'kids'} productDetails={productDetails} setQuantity={setQuantity} />}
      <div>
        {cartCounter > 0 && (
          <div className="cartss">
            {cartCounter}
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};

export default MainDisplayClothesKids;
