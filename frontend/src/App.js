import React, { useState,useEffect } from 'react';
import axios from 'axios';

const customStyle={
  width:'80%',
  margin:'20px auto',
  textAlign:'center',
  padding:'10px 20px',
}

const App =()=>{
  const [msg,setMsg]=useState('');
  const [msgs,setMsgs]=useState([]);
  const [dataPosted,setDataPosted]=useState(true);

  useEffect(()=>{
      axios.get('/api/')
      .then(res=>{
        // console.log(res);
        setMsgs(res.data);
      })
      .catch(err=>{
        console.log(err);
      })
  },[dataPosted])

  const onClickHandler=async(e)=>{
   e.preventDefault();
   setMsg('');
   const res=await axios.post('/api/',{msg});

   if(res.status===200){
     setDataPosted(prestate=>!prestate);
   }else{
     console.log('opps sorry! msg not saved on DB.');
   }
   
  }

  return(
    <>
      <div style={customStyle}>
        <input 
        name="msg"
        value={msg}
        onChange={(e)=>setMsg(e.target.value)}
        />
        <span>&nbsp;</span>
        <button onClick={onClickHandler}>click</button>
      </div>
      <div style={customStyle}>
          {
            msgs.map((el)=>{
              return (<p key={el._id}>
                {el.msg}
              </p>)
            })
          }
      </div>
    </>
  )
}

export default App;
