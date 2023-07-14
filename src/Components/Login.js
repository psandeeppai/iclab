import React,{useState} from "react";
import "./Login.css"

const Login = () =>{
    const[data,setData]=useState({email:"",password:""})
    const changeHandler=(e)=>{
        let name1=e.target.name;
        let val=e.target.value;
        setData({...data,[name1]:val})
    };
    const submitHandler=(e)=>
    {
        alert("You are logged in successfully🥱🥱🥱");
    };
    return(
        <>
        <div className="d-flex justify-content-center align-items-center mt-5 " id="b-im">
            <div className="p-5 rounded bg-white border border-3 border-warning">
            <form onSubmit={submitHandler}>
                <h2 className="text-center text-color-primary">Login</h2><br/>
            
            <div className="mb-3 justify-content-center">
                <label htmlFor="email">E-Mail :  </label>
                <input type="email" placeholder="Enter your email" className="form-control" name="E-Mail" onChange={changeHandler} ></input>
            </div>
            <div className="mb-3 justify-content-center">
                <label htmlFor="password">Password :  </label>
                <input type="password" placeholder="Enter your Password" className="form-control" name="Password" onChange={changeHandler} ></input>
            </div>
            <div className="mb-3 justify-content-center">
                <label htmlFor="name" placeholder="Enter your Name">Name:</label>
                <input type="name" placeholder="Enter your Name" className="form-control" name="Name" onChange={changeHandler} ></input>
            </div>
            <div className="mb-3">
                <input type="checkbox" className="custom-control custom-checkbox"></input>
                <label htmlFor="checkbox" className="custom-input-label ms-2">Remember Me</label> 
            </div>
            <div className="d-grid">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
            </form>
            </div>
        </div>
        </>
);
}
export default Login;
