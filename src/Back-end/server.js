

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/submitOrder', async (req, res) => {
  try {
    const orderData = req.body;
    const telegramBotToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    const message = `
      Новый заказ!
      Имя: ${orderData.userName}
      Телефон: ${orderData.userTelephone}
      Город: ${orderData.deliveryCityName}
      Отделение: ${orderData.deliveryDepart}
      Имя Товара ${orderData.userOrderProduct}
      Размеры ${orderData.productSizes}
      Оплата: ${orderData.paymentOption}
      Комментарий: ${orderData.orderComment}
    `;

    await axios.post(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
      chat_id: chatId,
      text: message,
    });

    res.status(200).send('Order submitted successfully');
  } catch (error) {
    console.error('Error submitting order:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});