
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Home, Zap, Users, Coins, BarChart3 } from 'lucide-react';

const Hero = () => {
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observers = moduleRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).classList.add('animate-fade-in');
              (entry.target as HTMLElement).style.animationDelay = `${index * 0.1}s`;
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });
    
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const modules = [
    {
      icon: <Home className="w-6 h-6 text-kibera-terracotta" />,
      title: 'Housing & Infrastructure',
      path: '/modules/housing'
    },
    {
      icon: <Zap className="w-6 h-6 text-kibera-solar" />,
      title: 'Energy & Utilities',
      path: '/modules/energy'
    },
    {
      icon: <Leaf className="w-6 h-6 text-kibera-green" />,
      title: 'Food & Ecology',
      path: '/modules/food'
    },
    {
      icon: <Users className="w-6 h-6 text-kibera-sky" />,
      title: 'Education & Empowerment',
      path: '/modules/education'
    },
    {
      icon: <Coins className="w-6 h-6 text-kibera-solar" />,
      title: 'Economy & Ownership',
      path: '/modules/economy'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-kibera-terracotta" />,
      title: 'Impact & SDG Alignment',
      path: '/modules/impact'
    },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-kibera-green-dark/70 via-kibera-green-dark/50 to-transparent">
        {/* We'll use a placeholder image for now */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1603126004292-f92d8bae2421')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-16 min-h-screen flex flex-col">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Kibera Utopia
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Transforming Kibera into a regenerative, community-led, climate-positive biovillage using technology and nature-based systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/about" className="eco-btn-primary">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/get-involved" className="eco-btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>
        
        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-auto">
          {modules.map((module, index) => (
            <div
              key={index}
              ref={(el) => (moduleRefs.current[index] = el)}
              className="bg-white/90 dark:bg-kibera-earth-dark/90 backdrop-blur-sm p-6 rounded-lg shadow-lg animated-card opacity-0"
            >
              <div className="h-12 w-12 rounded-full bg-white dark:bg-kibera-earth flex items-center justify-center mb-4">
                {module.icon}
              </div>
              <h3 className="text-xl font-bold text-kibera-earth-dark dark:text-white mb-2">
                {module.title}
              </h3>
              <Link 
                to={module.path}
                className="inline-flex items-center text-kibera-green hover:text-kibera-green-dark transition-colors font-medium"
              >
                Explore
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
