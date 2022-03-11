const express=require('express');
const route=express.Router();
const {getMsg,postMsg}=require('../controller/msg');

route.get('/',getMsg);
route.post('/',postMsg);

module.exports=route;