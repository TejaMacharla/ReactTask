import React,{useState} from 'react'
import {useHistory,Link} from 'react-router-dom'
function Login(){//here we are using hooks component
     const [email,setEmail]=useState()
     const [password,setPassword]=useState()
    const[message]=useState(sessionStorage.getItem('message'))
     const history = useHistory();
     
   async function login(){
        console.log(email,password)
        let item={email,password}
       let result= await fetch("http://localhost:9999/login",{//here we are assigning the api
           method: 'POST',
           headers:{
               "Content-Type": 'application/json',
               "Accept":"application/json"

           },
           body: JSON.stringify(item)
       })
       
       result=await result.json()
       sessionStorage.setItem('name',JSON.stringify(result.FirstName))//here we are storing the values
       sessionStorage.setItem('email',JSON.stringify(result.Email))
       sessionStorage.setItem('status',JSON.stringify(result.status))
       
       if(sessionStorage.getItem('email')!==null && result.status!==false){
        history.push('/profile')
    }
       
    }
   return(//here we are writing the html code and some bootstrap classes
   <div className="container">
       <div className="panel panel-success" style={{marginTop:"50px"}}>
           
           <div className="panel-heading">Login Page</div>
           <div style={{color:"red"}}>{message}</div>
           <div className="panel-body">
    <div className="form-group">
    <label>Email</label>
    <input name="email"  className="form-control" onChange={(e)=>setEmail(e.target.value)}
    
    />
</div>
<div className="form-group">
    <label>Password</label>
    <input name="password" type='password' className="form-control" onChange={(e)=>setPassword(e.target.value)}
    
    />
    </div>
    <button className="btn btn-success" onClick={login}>Login</button>
    <p>If you don't have an account please <Link className="btn btn-info" to ="/">Register</Link></p>
 </div>    
</div>
</div>
   ) 
  
   

}
export default Login;//here we export the file to routing file