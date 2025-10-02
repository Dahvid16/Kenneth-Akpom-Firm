import React, { useEffect } from 'react'
import { FaClock, FaRegClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const ComingSoon = () => {
    const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{minHeight: '70svh'}}>
      <div className="flex items-center flex-col text-center">
        <FaRegClock className="mb-4 text-gold" style={{fontSize: '5.5rem'}}/>
        <h3 className="mb-4 text-4xl font-bold">Coming Soon</h3>
        <p className="mb-8 text-xl text-gray-600">This page is under construction</p>
        <Link to="/">
        <button className="btn-gold text-gold-foreground text-[1rem] p-3">
          Return to Home
        </button>
        </Link>
      </div>
    </div>
  );
}

export default ComingSoon