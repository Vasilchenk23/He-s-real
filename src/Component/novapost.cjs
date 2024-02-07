const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, api-key'); 
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  next();
});


app.post('/getCities', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.novaposhta.ua/v2.0/json/Address/getCities',
      req.body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Api-Key': 'b3439cb932ceb95d04d8470ea45ae4c9',
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching cities:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
