import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginButton from './LoginButton';


const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fakeLogin(username, password); 

      if (response.success) {
        onLogin(response.user);
        navigate('/home');  
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
      console.error('Login error:', err);
    }
  };


  const fakeLogin = async (username, password) => {
    if (username === '1' && password === '1') {
      return { success: true, user: { id: 1, username: 'user' } };
    } else {
      return { success: false, message: 'Invalid credentials.' };
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img src="/images/tz-logo.png" alt="TeacherZone Logo" className="h-12" /> {/* Replace with your logo path */}
        </div>

        {/* Log In Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Log in
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Not a member yet?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <TextInput id="email" type="email" placeholder="demo@gmail.com" required />
          </div>
          <div className='pb-2'>
            <TextInput id="password" type="password" required />
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input id="remember" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-600">Remember me</label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</a>
            </div>
          </div>

          <Button type="submit" color="blue" className="px-6 py-3 w-full rounded-lg max-h-[52px] bg-[#4E65FF] items-center">
            Continue
          </Button>
        </form>

        {/* OR Separator */}
        <div className="relative flex py-5 items-center justify-center">
          <span className="flex-shrink mx-4 text-gray-400">or</span>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-2 w-full">
          <LoginButton imageSrc={'/images/google.png'} title={"Continue with Google"}/>
          <LoginButton imageSrc={'/images/facebook.png'} title={"Continue with Facebook"}/>
          <LoginButton imageSrc={'/images/apple.png'} title={"Continue with Apple"}/>
        </div>

        {/* Copyright Notice */}
        <p className="text-center text-gray-500 text-sm mt-8">
          Copyright © 2025 TeacherZone
        </p>
      </div>
    </div>
  );
};

export default LoginForm;