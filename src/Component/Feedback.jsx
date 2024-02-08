import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import '../../src/App.css';


const pb = new PocketBase('http://0.0.0.0:8080');

const Feedback = () => {
    const [resultData, setResultData] = useState([]);


    useEffect(() => {
      fetchData();
    }, []);
  
    async function fetchData() {
      try {
        const authResult = await pb.admins.authWithPassword('testuser@gmail.com', 'vasmas2325');
        console.log('Authentication successful:', authResult);
  
        const resultList = await pb.collection('Feedback').getList(1, 50, {});
        console.log(resultList);
        setResultData(resultList.items);
      } catch (error) {
        console.error('Произошла ошибка:', error);
      }
    }
    return(
        <>
        <div className='feedbackBlock'>
        <h1 className='h1FeedbackBlock'>Отзывы клиентов интернет магазина VAR404</h1>
    {resultData.map((item) => (
  <div key={item.id} style={{ border: '1px solid #ddd', padding: '20px', margin: '20px 0px 0px 0px', display: 'flex', justifyContent:'space-between', alignItems:'center' }}>
    <h2>{item.userName}</h2>
    <p>{item.userFeedback}</p>
    {item.selectedImage.length > 0 ? (
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {item.selectedImage.map((imageName, index) => {
          const imageUrl = `http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${imageName}?token=`;
          console.log(`URL for ${item.userName}'s image ${index + 1}:`, imageUrl);
          return <img key={index} src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '150px', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />;
        })}
      </div>
    ) : (
      <p>нету картинки</p>
    )}
  </div>
))}
</div>
  </>
    );

    
}

export default Feedback;