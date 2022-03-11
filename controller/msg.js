const Msg=require('../model/msg');

exports.getMsg=async(req,res)=>{
    const msgs=await Msg.find({});
    res.status(200).json(msgs);
}

exports.postMsg=async(req,res)=>{
  const {msg}=req.body;
  const result=await Msg.create({msg});
  res.status(200).json(result);
}