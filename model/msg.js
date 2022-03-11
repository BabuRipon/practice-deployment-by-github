const mongoose=require('mongoose');
const schema=mongoose.Schema;

const msg=new schema({
    msg:String,
},{timestamps:true});

module.exports=mongoose.model('msg',msg);