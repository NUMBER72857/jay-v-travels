
import { Link } from 'react-router-dom';
import { 
  Plane, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  Award,
  Users,
  Youtube,
  Linkedin
} from 'lucide-react';
import path from 'path';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary-dark to-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8" />
              <div>
                <h3 className="text-xl font-bold">Jay V Travel's</h3>
                <p className="text-sm opacity-90">Educational Adventures</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Creating safe, educational, and memorable travel experiences for students 
              for over 1 years. Your trusted partner in school travel.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Destinations', path: '/destinations' },
                { name: 'Tour Packages', path: '/packages' },
                { name: 'How It Works', path: '/how-it-works' },
                { name: 'Testimonials', path: '/testimonials'},
                // { name: 'Safety Policies', path: '/safety' },
                // { name: 'FAQs', path: '/faqs' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Local Educational Trips</li>
              <li>• International School Tours</li>
              <li>• Summer Learning Camps</li>
              <li>• Adventure Programs</li>
              <li>• Cultural Exchange</li>
              <li>• Custom Group Travel</li>
            </ul>
            <div className="flex items-center space-x-2 pt-2">
              <Award className="h-5 w-5" />
              <span className="text-sm">Award-Winning Service</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Oilspring,Estate</p>
                  <p>Lugbe F.C.T Abuja</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">+234 (814) 281-4220</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">info@jayvtravel.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <h5 className="font-medium mb-3">Follow Us</h5>
              <div className="grid grid-cols-2 gap-2">
                <a 
                  href="https://facebook.com/jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
                <a 
                  href="https://instagram.com/jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://youtube.com/@jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                  <span>YouTube</span>
                </a>
                <a 
                  href="https://linkedin.com/company/jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://twitter.com/jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="https://tiktok.com/@jayvtravel" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
                  aria-label="TikTok"
                >
                  <div className="h-4 w-4 text-white font-bold text-xs flex items-center justify-center border border-current rounded">T</div>
                  <span>TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center space-x-8 text-sm opacity-90">
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>1+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Fully Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4" />
              <span>95% Customer Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-75">
            © 2024 Jay V Travel's. All rights reserved. | 
            <Link to="/privacy" className="hover:underline ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:underline ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
