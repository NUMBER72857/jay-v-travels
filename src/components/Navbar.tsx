import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages & Tours', path: '/packages' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
     
      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Plane className="h-8 w-8 text-primary" />
                <div>
                  <h1 className={`text-2xl font-bold transition-colors ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}>Jay V Travel's</h1>
                  <p className={`text-xs transition-colors ${
                    isScrolled ? 'text-muted-foreground' : 'text-white/80'
                  }`}>Educational Adventures</p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : isScrolled
                      ? 'text-foreground'
                      : 'text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="btn-hero text-sm px-6 py-2"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-background/95 backdrop-blur-md rounded-lg mx-4 mb-4 p-4 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-2 font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="btn-hero text-sm px-6 py-2 mt-4 inline-block"
                onClick={() => setIsOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;