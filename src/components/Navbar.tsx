
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Users, Map, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
    { label: 'Community', path: '/community', icon: <Users className="w-4 h-4" /> },
    { label: 'Interactive Map', path: '/map', icon: <Map className="w-4 h-4" /> }
  ];

  const moduleDropdown = [
    { label: 'Housing & Infrastructure', path: '/modules/housing' },
    { label: 'Energy & Utilities', path: '/modules/energy' },
    { label: 'Food & Ecology', path: '/modules/food' },
    { label: 'Education & Empowerment', path: '/modules/education' },
    { label: 'Economy & Ownership', path: '/modules/economy' },
    { label: 'Impact & SDG Alignment', path: '/modules/impact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 dark:bg-kibera-earth-dark/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-kibera-green to-kibera-solar flex items-center justify-center">
            <span className="font-display text-white text-xl font-bold">KU</span>
          </div>
          <span className={cn(
            "font-display text-xl font-bold",
            scrolled ? 'text-kibera-earth-dark dark:text-white' : 'text-white'
          )}>
            Kibera Utopia
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "flex items-center gap-1 font-medium hover:text-kibera-green transition-colors",
                scrolled ? 'text-kibera-earth-dark dark:text-white' : 'text-white'
              )}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          
          {/* Modules Dropdown */}
          <div className="relative group">
            <button 
              className={cn(
                "flex items-center gap-1 font-medium hover:text-kibera-green transition-colors",
                scrolled ? 'text-kibera-earth-dark dark:text-white' : 'text-white'
              )}
            >
              Modules
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full -left-4 mt-1 w-60 bg-white dark:bg-kibera-earth-dark rounded-md shadow-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2">
                {moduleDropdown.map((item) => (
                  <Link 
                    key={item.path} 
                    to={item.path}
                    className="block px-4 py-2 text-kibera-earth-dark dark:text-white hover:bg-kibera-green/10 hover:text-kibera-green transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link 
            to="/get-involved" 
            className="eco-btn-primary"
          >
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={cn(
            "md:hidden",
            scrolled ? 'text-kibera-earth-dark dark:text-white' : 'text-white'
          )} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-white dark:bg-kibera-earth-dark z-40 transition-transform duration-300 md:hidden pt-20",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container-custom flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className="flex items-center gap-2 p-3 text-kibera-earth-dark dark:text-white text-lg font-medium hover:bg-kibera-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
            <h3 className="text-kibera-earth-dark dark:text-white font-medium mb-2">Modules</h3>
            {moduleDropdown.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="block pl-3 py-2 text-kibera-earth-dark dark:text-white hover:text-kibera-green"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          <Link 
            to="/get-involved" 
            className="eco-btn-primary mt-4 justify-center"
            onClick={() => setIsOpen(false)}
          >
            Get Involved
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
