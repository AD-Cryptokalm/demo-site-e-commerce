const router = require("express").Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.createOrder)



module.exports = router