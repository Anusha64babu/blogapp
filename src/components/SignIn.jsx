import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate= useNavigate()
    const[input,setInput] =new useState(
        {
            "Email":"",
            "Password":""

        }
    )
    const inputHandler =(event)=> {
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues =() => {
        console.log(input)
        axios.post("http://localhost:3001/api/blog/signin",input).then(
            (response) => {
                console.log(response.data)
                if(response.data.status == "success")
                 {
                    navigate("/add")
                    setInput(
                        {
                            "Email":"",
                            "Password":""
                
                        }
                    )
                 }
                else
                    {
                        alert("error")
                    }
            }
        )
    }
            
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">emailid</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">password</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">login</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">
                           <Link to="/" >new user sign in</Link>
    
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default SignIn