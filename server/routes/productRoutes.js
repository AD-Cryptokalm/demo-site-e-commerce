const router = require("express").Router()
const productController = require('../controllers/productController')
const multer = require('../middleware/multerMiddleware')

router.get('/', productController.getAllProduct)
router.get('/:id', productController.getOneProduct)
router.post('/', multer, productController.createProduct)
router.delete('/:id', multer, productController.deleteProduct)


module.exports = router