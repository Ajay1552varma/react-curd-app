import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
const Create=()=> {

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("clicked");
        axios.post('https://637f81ba5b1cc8d6f9478dda.mockapi.io/Curd-app',{
            name:name,
            email:email,
        }).then(()=>{
          history("/read") 
        })
          // When we will click on submit it will 
        //navigate to read router 
    }
    const history=useNavigate();

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");

    
  return <div className='m-5'>
  <div className='d-flex justify-content-between'>
  <h2>Create</h2>
  <Link to="/read">
  <button className='btn btn-primary'>Show data</button>
  </Link>
  </div>
  <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input onChange={(e)=>setName(e.target.value)}  type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <br/>
 
  <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
}

export default Create