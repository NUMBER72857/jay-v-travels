import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Calendar, 
  Shield, 
  Star,
  ArrowRight,
  Plane,
  Camera,
  BookOpen,
  Trophy,
  MessageCircle
} from 'lucide-react';
import Hero from '@/components/Hero';
import SocialMediaSection from '@/components/SocialMediaSection';
import destinationsImage from '@/assets/destinations-collage.jpg';
import planningImage from '@/assets/planning-consultation.jpg';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...prev, entry.target.id]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const featuredDestinations = [
    {
      title: "European Capitals",
      description: "Explore London, Paris, and Rome with guided educational tours",
      image: "🏛️",
      price: "From $2,499",
      duration: "1-3 years"
    },
    {
      title: "Science & Nature",
      description: "National parks, museums, and interactive science centers",
      image: "🔬",
      price: "From $1,299",
      duration: "1-4 years"
    },
    {
      title: "Cultural Exchange",
      description: "Experience local cultures through immersive programs",
      image: "🌍",
      price: "From $1,899",
      duration: "7 days"
    }
  ];

  const testimonials = [
    {
      name: "Number Daniel",
      role: "High School Principal",
      content: "Jay V Travel's made our European trip seamless. The students had an incredible educational experience, and we felt completely safe throughout.",
      rating: 5,
      school: "Lincoln High School",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Michael Albert",
      role: "Student",
      content: "The best trip ever! I learned so much about history and made friends from different schools. Can't wait for the next adventure!",
      rating: 5,
      school: "Roosevelt Academy",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Parent",
      content: "As a parent, I was initially worried, but Jay V's safety measures and communication gave me complete peace of mind. My daughter had the time of her life!",
      rating: 5,
      school: "Parent of Madison High Student",
      image: ""
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />

      {/* About Section */}
      <section 
        id="about-intro" 
        data-animate
        className={`py-20 bg-gradient-to-br from-muted/50 to-background transition-all duration-1000 ${
          visibleSections.includes('about-intro') ? 'fade-in visible' : 'fade-in'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Why Choose Jay V Travel's?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              For over 1 year, we've been creating transformative educational experiences 
              that inspire students, reassure parents, and exceed school expectations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-travel p-8 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Safety First</h3>
                <p className="text-muted-foreground">
                  Comprehensive safety protocols, 24/7 support, and fully licensed operations
                </p>
              </div>
              <div className="card-travel p-8 text-center">
                <BookOpen className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Educational Value</h3>
                <p className="text-muted-foreground">
                  Curriculum-aligned experiences that bring learning to life
                </p>
              </div>
              <div className="card-travel p-8 text-center">
                <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  95% customer satisfaction and countless student transformations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section 
        id="destinations" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes('destinations') ? 'slide-in-left visible' : 'slide-in-left'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Featured Destinations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From local educational excursions to international adventures, 
              discover destinations that inspire and educate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={destinationsImage}
                alt="Educational destinations around the world"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="space-y-8">
              {featuredDestinations.map((destination, index) => (
                <div key={index} className="card-destination p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{destination.image}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{destination.title}</h3>
                      <p className="text-muted-foreground mb-3">{destination.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {destination.duration}
                          </span>
                          <span className="font-semibold text-primary">{destination.price}</span>
                        </div>
                        <Link 
                          to="/destinations"
                          className="text-primary hover:text-primary-dark transition-colors font-medium"
                        >
                          Learn More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/destinations" className="btn-hero">
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section 
        id="how-it-works" 
        data-animate
        className={`py-20 bg-gradient-to-br from-primary/5 to-secondary/5 transition-all duration-1000 ${
          visibleSections.includes('how-it-works') ? 'fade-in visible' : 'fade-in'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple, transparent process from initial inquiry to unforgettable adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry", desc: "Tell us about your group, dates, and interests", icon: MessageCircle },
              { step: "02", title: "Planning", desc: "We create a custom itinerary tailored to your needs", icon: MapPin },
              { step: "03", title: "Booking", desc: "Secure your trip with flexible payment options", icon: Calendar },
              { step: "04", title: "Travel", desc: "Enjoy your safe, educational, and memorable adventure", icon: Plane }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works" className="btn-outline">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section 
        id="testimonials" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes('testimonials') ? 'slide-in-right visible' : 'slide-in-right'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              What People Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Hear from the schools, students, and parents who trust us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-travel p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-secondary">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of students who have transformed their learning through travel. 
            Get your custom quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Get Your Free Quote
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
