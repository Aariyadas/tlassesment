import React from 'react'
import { useState } from "react";
import axios from "axios"
import toast from "react-hot-toast";
import Jumbotron from "../../components/cards/Jumbotron";
    
 import {useAuth}   from "../../components/context/auth"
 import { useNavigate } from "react-router-dom";

function Register() {
   
      // state
      const [name, setName] = useState("Liya");
      const [email, setEmail] = useState("liya11@gmail.com");
      const [password, setPassword] = useState("liya12");

      const [auth, setAuth] = useAuth();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        try{
          const { data } =await axios.post('http://localhost:5000/api/register',{
            name,
            email,
            password,
          });
          if(data?.error) {
            toast.error(data.error)

          }else {
            setAuth({ ...auth, token: data.token, user: data.user });
            toast.success("Registerd sucessfully")
            console.log(data)
            navigate("/login");
          }
          console.log(data.error)
          console.log(name,email,password)
        } catch (err){
          console.log(err)
        }

      }
     
  return (
    
   
      
        <div>
       <Jumbotron title="Register" />
          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="form-control mb-4 p-2"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoFocus
                  />
    
                  <input
                    type="email"
                    className="form-control mb-4 p-2"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
    
                  <input
                    type="password"
                    className="form-control mb-4 p-2"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
    
                  <button className="btn btn-primary" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
    

export default Register