const newrelic = require('newrelic')
const express = require('express');
const seq = require('../db/index.js');
const ProductApi = require('../db/ProductApi.js');


const app = express();
app.use(express.json());
const PORT = 3100;

app.get('/', function (req, res) {
  res.send('Hello World')
});

// get all products info
app.get('/products', function (req, res) {
  let page = parseInt(req.query.page) || 1;
  let count = parseInt(req.query.count) || 5;

  ProductApi.getProducts(page, count)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.sendStatus(500)
  })
})

//get a product info
app.get('/products/:product_id', function (req, res) {
  let productId = parseInt(req.params.product_id)

  ProductApi.getProductInfo(productId)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.sendStatus(500)
  })
})


//get related product id
app.get('/products/:product_id/related', function (req, res) {
  let productId = parseInt(req.params.product_id)

  ProductApi.getRelatedId(productId)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.sendStatus(500)
  })
})

//get Product Styles
app.get(`/products/:product_id/styles`, function (req, res) {
  let productId = parseInt(req.params.product_id)

  ProductApi.getProductStyles(productId)
  .then(results => {
    res.status(200).json(results)
  })
  .catch(err => {
    res.sendStatus(500)
  })
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
});
