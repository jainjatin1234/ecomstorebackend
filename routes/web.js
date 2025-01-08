const express = require('express')
const ProductController = require('../controller/ProductController')
const router = express.Router()

router.post('/insertproduct',ProductController.insertproduct )

router.get('/getproducts',ProductController.getproducts)


module.exports = router 
