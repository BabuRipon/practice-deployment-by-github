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

exports.updateMsg=async(req,res)=>{
  const {msg,_id}=req.body;
  console.log(msg,_id);
  const updData=await Msg.findByIdAndUpdate({_id},{msg},{new:true})
  console.log(updData);
  res.send(updData);
}