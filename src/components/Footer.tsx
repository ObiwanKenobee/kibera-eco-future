
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Twitter, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kibera-earth-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-kibera-green to-kibera-solar flex items-center justify-center">
                <span className="font-display text-white text-xl font-bold">KU</span>
              </div>
              <span className="font-display text-xl font-bold text-white">
                Kibera Utopia
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              Transforming Kibera into a regenerative, community-led, climate-positive biovillage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-kibera-green" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kibera-green" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kibera-green" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kibera-green" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-kibera-green" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Modules</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/modules/housing" className="text-gray-300 hover:text-kibera-green">Housing & Infrastructure</Link>
              </li>
              <li>
                <Link to="/modules/energy" className="text-gray-300 hover:text-kibera-green">Energy & Utilities</Link>
              </li>
              <li>
                <Link to="/modules/food" className="text-gray-300 hover:text-kibera-green">Food & Ecology</Link>
              </li>
              <li>
                <Link to="/modules/education" className="text-gray-300 hover:text-kibera-green">Education & Empowerment</Link>
              </li>
              <li>
                <Link to="/modules/economy" className="text-gray-300 hover:text-kibera-green">Economy & Ownership</Link>
              </li>
              <li>
                <Link to="/modules/impact" className="text-gray-300 hover:text-kibera-green">Impact & SDG Alignment</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-kibera-green">Volunteer</Link>
              </li>
              <li>
                <Link to="/partner" className="text-gray-300 hover:text-kibera-green">Partner</Link>
              </li>
              <li>
                <Link to="/invest" className="text-gray-300 hover:text-kibera-green">Invest</Link>
              </li>
              <li>
                <Link to="/share" className="text-gray-300 hover:text-kibera-green">Spread the Word</Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-kibera-green">Events</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kibera-green mt-1" />
                <span className="text-gray-300">
                  Kibera Community Center<br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kibera-green" />
                <a href="mailto:info@kiberautopia.org" className="text-gray-300 hover:text-kibera-green">
                  info@kiberautopia.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kibera-green" />
                <a href="tel:+254123456789" className="text-gray-300 hover:text-kibera-green">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-gray-400 text-center">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4">
            <p>© {currentYear} Kibera Utopia Project. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <Link to="/privacy-policy" className="hover:text-kibera-green">Privacy Policy</Link>
              <Link to="/terms-of-use" className="hover:text-kibera-green">Terms of Use</Link>
              <Link to="/sitemap" className="hover:text-kibera-green">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
