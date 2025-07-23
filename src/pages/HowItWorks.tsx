import { useState, useEffect } from 'react';
import { MessageCircle, MapPin, Calendar, Plane } from 'lucide-react';

const steps = [
  { step: '01', title: 'Inquiry', desc: 'Tell us about your group, dates, and interests', icon: MessageCircle },
  { step: '02', title: 'Planning', desc: 'We create a custom itinerary tailored to your needs', icon: MapPin },
  { step: '03', title: 'Booking', desc: 'Secure your trip with flexible payment options', icon: Calendar },
  { step: '04', title: 'Travel', desc: 'Enjoy your safe, educational, and memorable adventure', icon: Plane },
];

const HowItWorks = () => (
  <div className="min-h-screen py-20 bg-background">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">How It Works</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Our process is simple and transparent, guiding you from your first inquiry to your return home.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, idx) => (
          <div key={idx} className="text-center">
            <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              {item.step}
            </div>
            <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">
              <item.icon className="h-6 w-6 mr-2" />{item.title}
            </h3>
            <p className="text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HowItWorks;
