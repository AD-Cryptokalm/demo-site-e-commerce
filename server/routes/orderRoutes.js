const router = require("express").Router()
const orderController = require('../controllers/orderController')

router.post('/', orderController.createOrder)
router.get('/:id', orderController.getOneOrder)



module.exports = router