
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-kibera-green-dark to-kibera-green text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Regenerative Revolution</h2>
            <p className="text-lg mb-8">
              Whether you're a resident, technologist, investor, or sustainability advocate, 
              there's a place for you in building Kibera's regenerative future.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/get-involved"
                className="px-6 py-3 bg-white text-kibera-green-dark font-medium rounded-full inline-flex items-center hover:bg-gray-100 transition-colors"
              >
                Get Involved
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/contact"
                className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Volunteer</h3>
              <p className="mb-4">Contribute your skills and time to building Kibera Utopia</p>
              <Link 
                to="/volunteer"
                className="text-white/90 hover:text-white inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Partner</h3>
              <p className="mb-4">Organizations and businesses can create meaningful partnerships</p>
              <Link 
                to="/partner"
                className="text-white/90 hover:text-white inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Invest</h3>
              <p className="mb-4">Support the financial sustainability of the Kibera Utopia project</p>
              <Link 
                to="/invest"
                className="text-white/90 hover:text-white inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
            
            <div className="rounded-lg bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-3">Spread the Word</h3>
              <p className="mb-4">Share our story and help amplify our impact around the world</p>
              <Link 
                to="/share"
                className="text-white/90 hover:text-white inline-flex items-center"
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
