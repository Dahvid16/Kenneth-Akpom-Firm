import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../Assets/Images/KKA_Logo.png"
import { FaBars, FaTimes } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Articles', path: '/articles' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-card shadow-elegant sticky top-0 z-50 bodeer">
      <div className="container-custom">
        <div className="flex items-center justify-between hd-div">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <motion.div className="bg-primary/90 p-[0.2rem] rounded-lg"
              initial = {{opacity: 0, scale: 0.9}}
              animate = {{opacity: 1, scale: 1}}
              transition={{delay: 0.4, type: "spring", stiffness: 50}}
            >
              <img className="h-12 w-12 text-gold" src={Logo} />
            </motion.div>
            <motion.div className="flex flex-col leading-tight"
            initial= {{x: "-1000px"}}
            animate = {{x:1}}
            transition={{delay: 0, type: "spring", stiffness: 40}}
            >
              <span className="text-heading text-xl font-bold text-primary tracking-wide">
                Kenneth Akpom<div className='w-70 flex-nowrap text-xl tracking-widerr'> & Associates</div>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav className="hidden md:flex space-x-8 text-lg"
          initial= {{opacity: 0, scale: 0.9}}
          animate= {{opacity: 1, scale: 1}}
          transition={{delay: 0.4, type: "spring", stiffness: 50}}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          
          <motion.div
            className="md:hidden p-2 rounded-md text-primary hover:text-gold transition-colors cursor-pointer"
            initial = {{x: 1000, opacity: 0}}
            animate = {{x: 1, opacity: 1}}
            transition={{delay: 0.3, type: "spring", stiffness: 40}}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className=" h-6 w-6" />}
          </motion.div>
        </div>

        <AnimatePresence>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
          <motion.div className="md:hidden py-4 border-t border-border absolute bg-opacity-90 w-full left-0 h-svh bg-slate-700"
          variants={{
            exit : { opacity: 0, transition: {delay: 0}}
          }}
          initial = {{ opacity: 0}}
          animate = {{ opacity: 1}}
          exit= "exit"
          >
            <motion.nav className="flex flex-col bg-card absolute top-0 items-center space-y-2 w-full" style={{height: "27rem"}}
            initial = {{x: -1000, opacity: 0}}
            animate = {{x: 0, opacity: 1}}
            transition={{ delay: 0, duration: 0.5}}
            exit={{x: -1000, opacity: 0}}
            >
              {navItems.map((item) => (
                <Link
                key={item.name}
                to={item.path}
                className={`nav-link block py-4 text-lg ${isActive(item.path) ? 'nav-link-active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.nav>
            <div className="bg-white opacity-10 h-full w-full -z-10 absolute top-0"></div>
          </motion.div>
          </>
        )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;