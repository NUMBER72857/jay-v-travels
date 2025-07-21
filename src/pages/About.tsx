import { useState, useEffect } from 'react';
import { Shield, Users, Award, Heart, Target, Clock } from 'lucide-react';
import planningImage from '@/assets/planning-consultation.jpg';

const About = () => {
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

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description: "Every trip is planned with comprehensive safety protocols and 24/7 support to ensure peace of mind for students, parents, and educators."
    },
    {
      icon: Heart,
      title: "Educational Excellence",
      description: "We design experiences that align with curriculum standards while inspiring lifelong learning and cultural understanding."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Our trips foster teamwork, leadership, and lasting friendships among students from diverse backgrounds."
    },
    {
      icon: Target,
      title: "Custom Solutions",
      description: "Every group is unique. We tailor each itinerary to meet specific educational goals, budget requirements, and group dynamics."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Students Traveled" },
    { number: "15+", label: "Years Experience" },
    { number: "500+", label: "Schools Served" },
    { number: "99%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              About Jay V Travel's
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Transforming education through safe, meaningful, and memorable travel experiences 
              for over 1 year.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        id="mission" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes('mission') ? 'fade-in visible' : 'fade-in'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Jay V Travel's, we believe that travel is one of the most powerful forms of education. 
                Our mission is to create transformative experiences that broaden horizons, deepen understanding, 
                and inspire students to become global citizens.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2024, we've been dedicated to making educational travel accessible, safe, and 
                meaningful for schools across the country. Every journey we craft is designed to 
                complement classroom learning while creating memories that last a lifetime.
              </p>
            </div>
            <div>
              <img 
                src={planningImage}
                alt="Educational travel planning"
                className="rounded-2xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        id="values" 
        data-animate
        className={`py-20 bg-gradient-to-br from-muted/50 to-background transition-all duration-1000 ${
          visibleSections.includes('values') ? 'slide-in-left visible' : 'slide-in-left'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-travel p-8">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        id="stats" 
        data-animate
        className={`py-20 bg-gradient-to-r from-primary to-secondary text-white transition-all duration-1000 ${
          visibleSections.includes('stats') ? 'fade-in visible' : 'fade-in'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl opacity-95">
              Numbers that tell our story
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        id="team" 
        data-animate
        className={`py-20 transition-all duration-1000 ${
          visibleSections.includes('team') ? 'slide-in-right visible' : 'slide-in-right'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced educators and travel professionals dedicated to your success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-travel p-8 text-center">
              <div className="w-32 h-32 bg-primary rounded-full mx-auto mb-6 flex items-center justify-center text-6xl text-white font-bold">
                JV
              </div>
              <h3 className="text-2xl font-bold mb-2">Onianwa Jessica</h3>
              <p className="text-primary font-semibold mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                With over 1 year in educational travel and a background in education, 
                Jay founded Jay V Travel's with the vision of making transformative travel 
                experiences accessible to all students. His passion for education and travel 
                drives our commitment to excellence and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Certifications & Partnerships
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by industry leaders and educational organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card-travel p-6 text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Fully Licensed & Insured</h3>
              <p className="text-sm text-muted-foreground">Complete liability coverage and proper licensing</p>
            </div>
            <div className="card-travel p-6 text-center">
              <Award className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Industry Certified</h3>
              <p className="text-sm text-muted-foreground">Member of National Association of Travel Agencies</p>
            </div>
            <div className="card-travel p-6 text-center">
              <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance during all trips</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;