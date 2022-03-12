const express=require('express');
const route=express.Router();
const {getMsg,postMsg,updateMsg}=require('../controller/msg');

route.get('/',getMsg);
route.post('/',postMsg);
route.put('/',updateMsg)

module.exports=route;