import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{minHeight: '70svh'}}>
          <div className="flex items-center flex-col text-center">
            <FaExclamationTriangle className="text-gold mb-4" style={{fontSize: '6rem'}}/>
            <h3 className="mb-4 text-5xl font-bold">404!</h3>
            <p className="mb-8 text-xl text-gray-600">Oops! Page not found</p>
            <Link to="/">
            <button className="btn-gold text-gold-foreground text-[1rem] p-3">
              Return to Home
            </button>
            </Link>
          </div>
        </div>
  );
};

export default NotFound;
