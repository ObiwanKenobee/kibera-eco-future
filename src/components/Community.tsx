
import React, { useRef, useEffect } from 'react';
import { Users, Heart, Tree, LightbulbOff, HandHeart, LineChart } from 'lucide-react';

const Community = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            statsRefs.current.forEach((ref, index) => {
              if (ref) {
                setTimeout(() => {
                  ref.classList.add('animate-fade-in');
                }, index * 150);
              }
            });
          }, 300);
        }
      },
      { threshold: 0.1 }
    );
    
    sectionObserver.observe(sectionRef.current);
    
    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  const stats = [
    { 
      icon: <Users className="w-8 h-8 text-kibera-sky" />, 
      value: '250,000+', 
      label: 'Residents Impacted',
      color: 'bg-kibera-sky/10 border-kibera-sky/30' 
    },
    { 
      icon: <HandHeart className="w-8 h-8 text-kibera-terracotta" />, 
      value: '5,000+', 
      label: 'Local Jobs Created',
      color: 'bg-kibera-terracotta/10 border-kibera-terracotta/30' 
    },
    { 
      icon: <Heart className="w-8 h-8 text-kibera-green" />, 
      value: '35%', 
      label: 'Improved Health Outcomes',
      color: 'bg-kibera-green/10 border-kibera-green/30' 
    },
    { 
      icon: <Tree className="w-8 h-8 text-kibera-green" />, 
      value: '12,000+', 
      label: 'Trees & Plants Added',
      color: 'bg-kibera-green/10 border-kibera-green/30' 
    },
    { 
      icon: <LightbulbOff className="w-8 h-8 text-kibera-solar" />, 
      value: '70%', 
      label: 'Energy Self-Sufficiency',
      color: 'bg-kibera-solar/10 border-kibera-solar/30' 
    },
    { 
      icon: <LineChart className="w-8 h-8 text-kibera-sky" />, 
      value: '40%', 
      label: 'Increased Local Economy',
      color: 'bg-kibera-sky/10 border-kibera-sky/30' 
    },
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-b from-kibera-earth/5 to-kibera-earth/10 dark:from-kibera-earth dark:to-kibera-earth-dark"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Community-Led Impact</h2>
          <p className="text-lg">
            We believe in the power of community ownership. By putting residents at the center of 
            decision-making and implementation, we're creating sustainable change that lasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              ref={(el) => (statsRefs.current[index] = el)}
              className={`p-6 rounded-lg border ${stat.color} text-center opacity-0 animated-card`}
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <span className="block text-3xl font-bold mb-2">{stat.value}</span>
              <span className="text-gray-700 dark:text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-lg bg-white dark:bg-kibera-earth-dark shadow-lg max-w-3xl mx-auto">
          <blockquote className="text-lg italic mb-6">
            "The Kibera Utopia project isn't just changing our physical environment - it's changing how we see 
            ourselves and our future. We're not just surviving anymore, we're creating, innovating, and thriving."
          </blockquote>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-kibera-green mr-4"></div>
            <div>
              <p className="font-bold">Sarah Odhiambo</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Community Leader, Kibera</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
