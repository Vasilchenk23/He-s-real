import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PocketBase from 'pocketbase';
import Header from './Header';
import Footer from './Footer';
import '../../src/App.css';


const pb = new PocketBase('https://pocketbase-production-1de1.up.railway.app/');

const MainClothes = () => {
  const { department, productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  
  async function fetchProductDetails() {
    try {
      const productDetailsResponse = await pb.collection(`${department}Collection`).getOne(productId);
      console.log('Product Details:', productDetailsResponse);
      setProductDetails(productDetailsResponse);
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);


  if (!productDetails) {
    return <div>Loading</div>;
  }

  return (
    <>
      <Header />
      <div className="clothes-details">
        <img className='imageMainClothes' src={`https://pocketbase-production-1de1.up.railway.app/api/files/${productDetails.collectionId}/${productDetails.id}/${productDetails.image[0]}?token=`} alt={productDetails.productName} />
        <div className="details">
          <h2 className='nameProductDetails'>{productDetails.productName}</h2>
          <p className='priceProductDetails'>Цена: ₴{productDetails.price}</p>
          <p className='sizesProductDetails'>Размеры: {productDetails.sizes}</p>
        </div>
      </div>
      <div className="button">
        <Link
        to={`/cart/${productDetails.price}/${productDetails.productName}/${productDetails.sizes}/${productDetails.collectionId}/${productDetails.id}/${productDetails.image[0]}`}
        className='black-button'>
        Купить и добавить в корзину
        </Link>
      </div>
      <div className="box"></div>
      <Footer/>
    </>
  );
};

export default MainClothes;
