import React, { useState ,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Read=()=> {

    const [data,setData]=useState([]);
    const [tabledark,setTableDark]=useState('')
     
    useEffect(()=>{
        getData();
    },[])

    function getData(){
        axios.get("https://637f81ba5b1cc8d6f9478dda.mockapi.io/Curd-app")
        .then((res)=>{
           console.log(res.data);
           setData(res.data);
        })
    }
    function handleDelete(id){
        axios.delete(`https://637f81ba5b1cc8d6f9478dda.mockapi.io/Curd-app/${id}`)
        .then(()=>{
            getData();
        })
    }

    const setToLocalStorage=(id,name,email)=>{
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }
   
  return (
   <div className="m-5">
    <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" 
  onClick={()=>{
if(tabledark==='table-dark'){
setTableDark(" ")
}
else{
  setTableDark("table-dark");
}
  }}
  />
</div>
<div className='d-flex justify-content-between'>
  <h2>Read</h2>
  <Link to="/">
  <button className='btn btn-secondary'>Create</button>
  </Link>
  </div>
   <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data.map((eachdata)=>{
     return(
        <>
        <tbody>
    <tr>
      <th scope="row">{eachdata.id}</th>
      <td>{eachdata.name}</td>
      <td>{eachdata.email}</td>
      <td>
      <Link to="/update">
      <button className='btn-success' onClick={()=>setToLocalStorage(
        eachdata.id,
        eachdata.name,
        eachdata.email,
        )}>Edit</button>
      </Link>
      </td>
      <td><button onClick={()=>handleDelete(eachdata.id)} className='btn-danger'>Delete</button></td>
    </tr>
  </tbody>
        </>
     )
    })
  
}
</table>
</div>
  )
}

export default Read