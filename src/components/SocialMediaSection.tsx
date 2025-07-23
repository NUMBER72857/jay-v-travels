
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Camera, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import igImg from '../assets/ig.jpg';
import fbImg from '../assets/fb.jpg';
import ytImg from '../assets/yt.jpg';
import { Link } from 'react-router-dom';  
import { url } from 'inspector';


const SocialMediaSection = () => {
  const socialPosts = [
    {
      platform: 'Instagram',
      icon: Instagram,
      image: igImg,
      url: 'https://instagram.com',
      content: 'Amazing day exploring the Smithsonian with Lincoln High! 📚✈️ #EducationalTravel #StudentLife',
      likes: 234,
      comments: 18
    },
    {
      platform: 'Facebook',
      icon: Facebook,
      url:'https://facebook.com',
      image: fbImg,
      content: 'Thank you to Jefferson Middle School for choosing us for their Washington DC trip! Safe travels! 🇺🇸',
      likes: 156,
      comments: 23
    },
    {
      platform: 'YouTube',
      icon: Youtube,
      image: ytImg,
      url:'https://youtube.com',
      content: 'New video: "5 Essential Tips for Student Travel Safety" - Watch now! 🎥',
      likes: 89,
      comments: 12
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com',
      followers: '12.5K',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      followers: '1.2K',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com',
      followers: '400',
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      followers: '90',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      followers: '1.2k',
      color: 'bg-sky-500 hover:bg-sky-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Follow Our Adventures
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay connected with Jay V Travel's and see the amazing journeys our students take around the world!
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} text-white px-6 py-3 rounded-full flex items-center space-x-3 transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <social.icon className="h-5 w-5" />
              <div className="text-left">
                <div className="font-semibold">{social.name}</div>
                <div className="text-xs opacity-90">{social.followers} followers</div>
              </div>
            </a>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Recent Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialPosts.map((post, index) => (
              <div key={index} className="card-travel overflow-hidden group hover:scale-105 transition-all duration-300">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={`${post.platform} post`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3 flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <post.icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{post.platform}</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {post.content}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Camera className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Share2 className="h-3 w-3 cursor-pointer hover:text-primary transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-primary">Join Our Community</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow us on social media for travel tips, destination highlights, student stories, and exclusive offers for your next educational adventure!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default" size="lg" asChild>
              <a href="https://instagram.com/jayvtravel" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Follow on Instagram
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://youtube.com/@jayvtravel" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" />
                Subscribe on YouTube
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
