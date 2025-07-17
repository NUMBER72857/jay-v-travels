import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Shield, Award } from 'lucide-react';
import heroImage from '@/assets/hero-students-bus.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-parallax relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Educational Adventures
              <span className="block text-secondary">That Inspire</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed">
              Create unforgettable learning experiences for your students with safe, 
              educational, and exciting travel programs designed by education experts.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <Link 
              to="/destinations"
              className="btn-hero group"
            >
              Explore Destinations
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* <Link 
              to="/quote"
              className="btn-outline bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary"
            >
              Get Custom Quote
            </Link> */}
            {/* <button className="flex items-center space-x-2 text-white hover:text-secondary transition-colors">
              <div className="p-3 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                <Play className="h-6 w-6" />
              </div>
              <span className="font-medium">Watch Our Story</span>
            </button> */}
          </div>

          {/* Trust Indicators */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
            <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Users className="h-8 w-8 text-secondary" />
              <div className="text-2xl font-bold">200+</div>
              <div className="text-sm opacity-90">Students Traveled</div>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Shield className="h-8 w-8 text-secondary" />
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-90">Safety Record</div>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Award className="h-8 w-8 text-secondary" />
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <div className="float">
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <div className="float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-secondary rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 opacity-10">
        <div className="float" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 bg-white rounded-full"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-12 bg-white animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;