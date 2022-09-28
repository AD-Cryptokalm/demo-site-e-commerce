const router = require('express').Router();
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')
const auth = require('../middleware/authMiddleware')

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/:id', auth, userController.getOneUser)
router.put('/:id', auth, userController.modifyUser)

module.exports = router