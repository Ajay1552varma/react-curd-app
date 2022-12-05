import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
function Update() {
    const handleUpdate=(e)=>{
        e.preventDefault();
      axios.put(`https://637f81ba5b1cc8d6f9478dda.mockapi.io/Curd-app/${id}`,{
        name:name,
        email:email,
      }).then(()=>{
         navigate("/read")
      })
    }
    const navigate=useNavigate();
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[])
  return (
    <div className='m-5'>
       <div className='d-flex justify-content-between'>
  <h2>Create</h2>
  <Link to="/read">
  <button className='btn btn-primary'>Show data</button>
  </Link>
  </div>
  <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

  </div>
  <br/>
 
  <button onClick={handleUpdate} type="submit" className="btn btn-primary mx-2">Update</button>
<Link to="/read">
<button className='btn btn-secondary mx-2'>Back</button>
</Link>
</form>
    </div>
  )
}

export default Update