const express = require('express')
const ProductController = require('../controller/ProductController')
const DealController = require('../controller/DealController')
const router = express.Router()

router.post('/insertproduct',ProductController.insertproduct )
router.get('/getproducts',ProductController.getproducts)


router.post('/insertdeal',DealController.insertdeal )
router.get('/getdeals',DealController.getdeals)


router.get('/getproductdetails/:id',ProductController.getproductdetails)



module.exports = router 
