const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getCurrentUserAccountInfo} = require('../controllers/usercontroller')

const { verifyUserIsAuthorizedByToken } = require('../middleware/userAuthenticationMiddleWare')

router.post('/', registerUser)

router.post('/login', loginUser)

router.post('/me',verifyUserIsAuthorizedByToken, getCurrentUserAccountInfo)


module.exports = router