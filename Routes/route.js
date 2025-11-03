const express=require('express')
const router = new express.Router()
const usercontroller=require('../controller/controller')



router.post('/',usercontroller.userRegister)
router.post('/login',usercontroller.userLogin)

module.exports=router