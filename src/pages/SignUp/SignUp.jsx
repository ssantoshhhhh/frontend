import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { validateEmail } from '../../utils/helper';
import Passwordinput from '../../components/input/Passwordinput';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!name) {
      setError('Please Enter Your Name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid Email');
      return;
    }

    if (!password) {
      setError('Please Enter Your Password');
      return;
    }

    setError('');
    //Sign Up API Call
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center mt-28'>
        <div className='w-96 border rounded bg-white px-7 py-10'>
          <form onSubmit={handleSignUp}>
            <h4 className='text-2xl mb-7'>Sign-Up</h4>

            <input
              type='text'
              placeholder='Enter Your Name'
              className='input-box'
              value={name} // ✅ Fixed
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type='text'
              placeholder='Enter Your Email'
              className='input-box'
              value={email} // ✅ Fixed
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className='text-red-500 pb-1'>{error}</p>}

            <button type='submit' className='btn-primary'>
              Create Account
            </button>

            <p className='text-sm text-center mt-4'>
              Already Have an Account?{' '}
              <Link to='/login' className='font-medium text-primary underline'>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
