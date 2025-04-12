import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Passwordinput from '../../components/input/Passwordinput';
import { validateEmail } from '../../utils/helper';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(null);

  const handleLogin=(e)=>{
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Invalid Email Detected - Kindly Enter a Valid Email");
      return;
    }

    if(!password){
      setError("Password is Required");
      return; 
    }
    setError("")


    //API Call for LOGIN

  };
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleLogin}>
            <h4 className='text-2xl mb-7'>Log In</h4> 

            <input type="text" placeholder='Enter Your Email' className='input-box' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}/>


            <Passwordinput value={password}
            onChange={(e)=>setPassword(e.target.value)}/>

              {error && <p className='text-red-500 pb-1' >{error}</p>}
    

            <button type='submit' className='btn-primary'>
              Login
            </button>
            <p className='text-sm text-center mt-4'>
              Not Registered Yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline"> 
                Create An Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
