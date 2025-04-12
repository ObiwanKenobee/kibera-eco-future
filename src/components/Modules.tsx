
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Zap, 
  Leaf, 
  Users, 
  Coins, 
  BarChart3,
  Building,
  Sprout,
  Recycle,
  CloudRain,
  SolarPanel,
  Battery,
  Wind,
  Gauge,
  Tree,
  Fish,
  Salad,
  Wheat,
  GraduationCap,
  Computer,
  Video,
  People,
  Wallet,
  CreditCard,
  Store,
  Tag,
  ChartBar,
  Database,
  ArrowRight
} from 'lucide-react';

const Modules = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const moduleRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            moduleRefs.current.forEach((ref, index) => {
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

  const modules = [
    {
      title: 'Housing & Infrastructure',
      path: '/modules/housing',
      mainIcon: <Home className="w-8 h-8" />,
      bgColor: 'bg-kibera-terracotta/10',
      borderColor: 'border-kibera-terracotta/30',
      iconColor: 'text-kibera-terracotta',
      features: [
        { text: 'Modular eco-homes', icon: <Building className="w-5 h-5" /> },
        { text: 'Rooftop gardens', icon: <Sprout className="w-5 h-5" /> },
        { text: 'Living walls with medicinal plants', icon: <Leaf className="w-5 h-5" /> },
        { text: 'Rainwater harvesting', icon: <CloudRain className="w-5 h-5" /> },
        { text: 'Compost toilets', icon: <Recycle className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Energy & Utilities',
      path: '/modules/energy',
      mainIcon: <Zap className="w-8 h-8" />,
      bgColor: 'bg-kibera-solar/10',
      borderColor: 'border-kibera-solar/30',
      iconColor: 'text-kibera-solar',
      features: [
        { text: 'Solar microgrid rooftops', icon: <SolarPanel className="w-5 h-5" /> },
        { text: 'Community battery bank', icon: <Battery className="w-5 h-5" /> },
        { text: 'Biogas digesters', icon: <Recycle className="w-5 h-5" /> },
        { text: 'Algae biofuel ponds', icon: <Wind className="w-5 h-5" /> },
        { text: 'IoT sensors for efficiency', icon: <Gauge className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Food & Ecology',
      path: '/modules/food',
      mainIcon: <Leaf className="w-8 h-8" />,
      bgColor: 'bg-kibera-green/10',
      borderColor: 'border-kibera-green/30',
      iconColor: 'text-kibera-green',
      features: [
        { text: 'Community aquaponics', icon: <Fish className="w-5 h-5" /> },
        { text: 'Rooftop farms', icon: <Salad className="w-5 h-5" /> },
        { text: 'Food forests', icon: <Tree className="w-5 h-5" /> },
        { text: 'Decentralized compost hubs', icon: <Recycle className="w-5 h-5" /> },
        { text: 'Bee & butterfly corridors', icon: <Wheat className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Education & Empowerment',
      path: '/modules/education',
      mainIcon: <Users className="w-8 h-8" />,
      bgColor: 'bg-kibera-sky/10',
      borderColor: 'border-kibera-sky/30',
      iconColor: 'text-kibera-sky',
      features: [
        { text: 'Bamboo-framed learning hubs', icon: <Building className="w-5 h-5" /> },
        { text: 'Youth coding & green trades', icon: <GraduationCap className="w-5 h-5" /> },
        { text: 'VR ecological learning', icon: <Computer className="w-5 h-5" /> },
        { text: 'Local artists & eco-murals', icon: <Video className="w-5 h-5" /> },
        { text: 'Community skill sharing', icon: <People className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Economy & Ownership',
      path: '/modules/economy',
      mainIcon: <Coins className="w-8 h-8" />,
      bgColor: 'bg-kibera-solar/10',
      borderColor: 'border-kibera-solar/30',
      iconColor: 'text-kibera-solar',
      features: [
        { text: 'Digital wallet integration', icon: <Wallet className="w-5 h-5" /> },
        { text: 'Circular local economy', icon: <Recycle className="w-5 h-5" /> },
        { text: 'DAO-style governance', icon: <People className="w-5 h-5" /> },
        { text: 'Marketplace for eco-crafts', icon: <Store className="w-5 h-5" /> },
        { text: 'Carbon offsets', icon: <Tag className="w-5 h-5" /> }
      ]
    },
    {
      title: 'Impact & SDG Alignment',
      path: '/modules/impact',
      mainIcon: <BarChart3 className="w-8 h-8" />,
      bgColor: 'bg-kibera-terracotta/10',
      borderColor: 'border-kibera-terracotta/30',
      iconColor: 'text-kibera-terracotta',
      features: [
        { text: 'SDG 1, 4, 6, 7, 8, 11, 12, 13, 15', icon: <Database className="w-5 h-5" /> },
        { text: 'CO2 saved metrics', icon: <ChartBar className="w-5 h-5" /> },
        { text: 'Water cleaned tracking', icon: <CloudRain className="w-5 h-5" /> },
        { text: 'Jobs created dashboard', icon: <Users className="w-5 h-5" /> },
        { text: 'Real-time data kiosks', icon: <Computer className="w-5 h-5" /> }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Modules of Transformation</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our integrated approach combines six key modules to create a holistic, 
            regenerative system for Kibera's transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              ref={(el) => (moduleRefs.current[index] = el)}
              className={`rounded-xl p-6 border opacity-0 ${module.bgColor} ${module.borderColor} animated-card`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${module.bgColor} mb-4 ${module.iconColor}`}>
                {module.mainIcon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{module.title}</h3>
              
              <ul className="space-y-3 mb-6">
                {module.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <span className={`mt-1 ${module.iconColor}`}>{feature.icon}</span>
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to={module.path}
                className={`inline-flex items-center font-medium ${module.iconColor} hover:underline`}
              >
                Learn more
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
