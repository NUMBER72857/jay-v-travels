import { Link } from 'react-router-dom';
import { Calendar, MapPin, BookOpen, Users } from 'lucide-react';

const packages = [
  {
    title: 'European Capitals Tour',
    description: 'Visit London, Paris, and Rome with expert guides and immersive educational activities.',
    duration: '10 days',
    price: '$2,499',
    icon: <MapPin className="h-8 w-8 text-primary" />,
  },
  {
    title: 'Science & Nature Adventure',
    description: 'Explore national parks, museums, and science centers for hands-on learning.',
    duration: '7 days',
    price: '$1,299',
    icon: <BookOpen className="h-8 w-8 text-secondary" />,
  },
  {
    title: 'Cultural Exchange Program',
    description: 'Experience local cultures and make lifelong friends through exchange activities.',
    duration: '7 days',
    price: '$1,899',
    icon: <Users className="h-8 w-8 text-accent" />,
  },
];

const PackagesTours = () => (
  <div className="min-h-screen py-20 bg-background">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Packages & Tours</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Choose from our expertly crafted educational travel packages, designed for students, schools, and families.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {packages.map((pkg, idx) => (
          <div key={idx} className="card-travel p-8 text-center">
            <div className="mb-4 flex justify-center">{pkg.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{pkg.title}</h2>
            <p className="text-muted-foreground mb-4">{pkg.description}</p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground mb-4">
              <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" />{pkg.duration}</span>
              <span className="font-semibold text-primary">{pkg.price}</span>
            </div>
            <Link to="/quote" className="btn-secondary">Request a Quote</Link>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/contact" className="btn-outline">Contact Us for Custom Tours</Link>
      </div>
    </div>
  </div>
);

export default PackagesTours;
