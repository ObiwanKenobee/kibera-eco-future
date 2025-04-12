
import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const Vision = () => {
  const visionRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observers = [visionRef, impactRef].map((ref) => {
      if (!ref.current) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref.current);
      return observer;
    });
    
    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const sdgs = [
    "No Poverty",
    "Quality Education",
    "Clean Water & Sanitation",
    "Affordable & Clean Energy",
    "Decent Work & Economic Growth",
    "Sustainable Cities & Communities",
    "Responsible Consumption",
    "Climate Action",
    "Life on Land"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-kibera-green/10 dark:from-kibera-earth-dark dark:to-kibera-earth">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={visionRef} className="opacity-0">
            <h2 className="section-title">Our Vision</h2>
            <p className="text-lg mb-6">
              We're transforming Kibera from an informal settlement into a regenerative, 
              community-led, climate-positive biovillage where technology and nature work together 
              to create a sustainable future.
            </p>
            <div className="bg-white dark:bg-kibera-earth p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-kibera-green">What Makes Kibera Utopia Special?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-kibera-green mt-1 flex-shrink-0" />
                  <span>Community-owned and led development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-kibera-green mt-1 flex-shrink-0" />
                  <span>Integration of indigenous knowledge with modern tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-kibera-green mt-1 flex-shrink-0" />
                  <span>Circular economy that creates local jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-kibera-green mt-1 flex-shrink-0" />
                  <span>Nature-based solutions for urban challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-kibera-green mt-1 flex-shrink-0" />
                  <span>Climate-positive infrastructure and systems</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div ref={impactRef} className="opacity-0">
            <h2 className="section-title">SDG Impact</h2>
            <p className="text-lg mb-6">
              Our approach aligns with multiple UN Sustainable Development Goals,
              creating measurable impact across environmental, social, and economic dimensions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sdgs.map((sdg, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-kibera-earth p-4 rounded-lg shadow text-center animated-card"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kibera-green to-kibera-solar flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-white">{index + 1}</span>
                  </div>
                  <p className="text-sm font-medium">{sdg}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-5 bg-kibera-green/10 rounded-lg border border-kibera-green/20">
              <h3 className="text-xl font-bold mb-3 text-kibera-green">Measuring Success</h3>
              <p>
                Our real-time data dashboards track key metrics including CO₂ captured, water cleaned,
                waste composted, energy generated, and community jobs created.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
