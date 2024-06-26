import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import { Link } from 'react-router-dom';

const pb = new PocketBase('https://pocketbase-railway-production-c34d.up.railway.app/');

const ProductList = ({ department }) => {
  const [resultData, setResultData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const authResult = await pb.admins.authWithPassword('testuser@gmail.com', 'vasmas2325');
      console.log('Authentication successful:', authResult);

      const resultList = await pb.collection(`${department}Collection`).getList(1, 50, {});
      console.log(resultList);
      setResultData(resultList.items);
    } catch (error) {
      console.error('Произошла ошибка:', error);
    }
  }

  return (
    <div className="product-list">
    <div className="cards-container">
      {resultData.map((item) => (
        <Link key={item.id} to={`/clothes/${department}/${item.id}`} className="product-card" style={{ textDecoration: 'none', color: 'black' }}>
          <img className='imageProductList' src={`https://pocketbase-railway-production-c34d.up.railway.app/api/files/${item.collectionId}/${item.id}/${item.image[0]}?token=`} alt={item.productName} />
          <h2 className='nameProductList'>{item.productName}</h2>
          <p className='sizesProductList'>Размеры: {item.sizes}</p>
          <p className='priceProductList'>Цена: ₴{item.price}</p>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default ProductList;
