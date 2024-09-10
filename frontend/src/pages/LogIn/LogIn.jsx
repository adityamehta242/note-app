import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import PasswordInput from "../../components/Input/PasswordInput";
import validateEmail from "../../utils/emailValidator";

const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [ error , setError ] = useState(null);

    const handleLogin = async (e)=>{ 
        e.preventDefault();
        if(!validateEmail(email)){
            setError("Enter valid email address.")
            return;
        }

        if(!password)
        {
            setError("invalid password")
            return;
        }

        setError("");
        
        //api call
    }



  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-48">
        <div className="w-96 border rounded px-10 py-10 bg-white">
          <form onSubmit={ handleLogin }>
            <h4 className="text-2xl mb-7 text-black ">Login</h4>
            <input type="text" placeholder="email" className="input-box "
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            />
            <PasswordInput value={password}
            onChange={(e)=> setPassword(e.target.value) }
            />

            {error  && <p className="text-red-600 text-xs pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="text-sm text-center mt-4">
              {" "}
              Not registered yet?{" "}
              <Link
                to={"/signup"}
                className="font-medium text-primary underline"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
