import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Star, Camera, Plane, ChevronRight } from 'lucide-react';

const Destinations = () => {
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  const categories = [
    { id: 'all', name: 'All Destinations' },
    { id: 'local', name: 'Local & Regional' },
    { id: 'national', name: 'National' },
    { id: 'international', name: 'International' },
    { id: 'educational', name: 'Educational Focus' },
    { id: 'adventure', name: 'Adventure' }
  ];

  const destinations = [
    {
      id: 1,
      title: "European Capitals Tour",
      category: 'international',
      location: "London, Paris, Rome",
      duration: "10 days",
      groupSize: "20-40 students",
      price: "From $2,499",
      rating: 4.9,
      image: "🏛️",
      description: "Explore the rich history and culture of Europe's most iconic cities with guided educational tours.",
      highlights: ["Tower of London", "Louvre Museum", "Colosseum", "Palace of Versailles"],
      subjects: ["History", "Art", "Culture", "Language"]
    },
    {
      id: 2,
      title: "Science & Nature Discovery",
      category: 'educational',
      location: "Yellowstone & Glacier National Parks",
      duration: "7 days",
      groupSize: "15-30 students",
      price: "From $1,599",
      rating: 4.8,
      image: "🔬",
      description: "Hands-on science learning in some of America's most spectacular natural laboratories.",
      highlights: ["Geothermal features", "Wildlife observation", "Geology fieldwork", "Conservation programs"],
      subjects: ["Biology", "Geology", "Environmental Science", "Geography"]
    },
    {
      id: 3,
      title: "Washington D.C. Government",
      category: 'national',
      location: "Washington D.C.",
      duration: "5 days",
      groupSize: "25-45 students",
      price: "From $1,199",
      rating: 4.7,
      image: "🏛️",
      description: "Experience American democracy in action with exclusive behind-the-scenes access.",
      highlights: ["Capitol Building tour", "Supreme Court", "Smithsonian museums", "Arlington Cemetery"],
      subjects: ["Civics", "History", "Political Science", "Social Studies"]
    },
    {
      id: 4,
      title: "Costa Rica Adventure",
      category: 'adventure',
      location: "Costa Rica",
      duration: "8 days",
      groupSize: "15-25 students",
      price: "From $2,199",
      rating: 4.9,
      image: "🌿",
      description: "Combine adventure with environmental education in one of the world's most biodiverse countries.",
      highlights: ["Rainforest canopy tours", "Marine biology", "Volcano exploration", "Wildlife sanctuaries"],
      subjects: ["Biology", "Environmental Science", "Spanish", "Geography"]
    },
    {
      id: 5,
      title: "New York City Experience",
      category: 'local',
      location: "New York City",
      duration: "4 days",
      groupSize: "20-40 students",
      price: "From $899",
      rating: 4.6,
      image: "🗽",
      description: "Explore the cultural melting pot of America with theater, museums, and iconic landmarks.",
      highlights: ["Broadway show", "Metropolitan Museum", "Statue of Liberty", "UN Headquarters"],
      subjects: ["Arts", "History", "Culture", "Theater"]
    },
    {
      id: 6,
      title: "Space & Technology",
      category: 'educational',
      location: "Kennedy Space Center, FL",
      duration: "5 days",
      groupSize: "20-35 students",
      price: "From $1,399",
      rating: 4.8,
      image: "🚀",
      description: "Inspire the next generation of scientists and engineers with hands-on space exploration.",
      highlights: ["NASA Kennedy Space Center", "Astronaut encounters", "Space simulations", "STEM workshops"],
      subjects: ["Physics", "Engineering", "Astronomy", "Mathematics"]
    }
  ];

  const filteredDestinations = selectedCategory === 'all' 
    ? destinations 
    : destinations.filter(dest => dest.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Destinations
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Discover amazing educational destinations that bring learning to life
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background sticky top-32 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section 
        id="destinations-grid" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes('destinations-grid') ? 'fade-in visible' : 'fade-in'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className={`card-destination group transition-all duration-500`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{destination.image}</div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-secondary fill-current" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>

                  {/* Title and Location */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {destination.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.location}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {destination.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                      {destination.highlights.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{destination.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{destination.duration}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{destination.groupSize}</span>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Subjects:</h4>
                    <div className="flex flex-wrap gap-1">
                      {destination.subjects.map((subject, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="font-bold text-primary text-lg">
                      {destination.price}
                    </div>
                    <Link 
                      to={`/destinations/${destination.id}`}
                      className="btn-hero text-sm px-4 py-2 group"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            We specialize in creating custom educational travel experiences. 
            Let us design the perfect trip for your group!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="btn-secondary bg-white text-primary hover:bg-gray-100">
              Request Custom Quote
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
              Speak with an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destinations;