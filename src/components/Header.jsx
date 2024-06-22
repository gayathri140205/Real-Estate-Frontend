/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Assuming FaSearch is imported correctly

export default function Header() {
  const { currentUser } = useSelector((state) => state.user); // Example usage of useSelector
  const [searchTerm, setSearchTerm] = useState('');
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Test</span>
            <span className='text-slate-700'>Real Estate</span>
          </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/profile'>
      
            {currentUser ? (
                 <li className='hidden sm:inline text-slate-700 hover:underline'>Create List</li>
            ) : (
              <li className='text-slate-700 hover:underline'>Signin</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
