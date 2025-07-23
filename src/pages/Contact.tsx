import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    subject: '',
    message: '',
    groupSize: '',
    travelDates: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        subject: '',
        message: '',
        groupSize: '',
        travelDates: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 (814) 281-4220", "Mon-Fri 8AM-6PM EST"],
      action: "tel:+2348142814220"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@jayvtravel.com",],
      action: "mailto:info@jayvtravel.com"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["19 Oil,Spring,Estate", "Lugbe, F.C.T Abuja"],
      action: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8AM - 6PM", "Saturday: 10AM - 4PM"],
      action: null
    }
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to plan your next educational adventure? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-travel p-6 text-center group hover:scale-105 transition-transform duration-300">
                <info.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                <div className="space-y-1 text-muted-foreground">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm">
                      {info.action && idx === 0 ? (
                        <a 
                          href={info.action}
                          className="hover:text-primary transition-colors"
                        >
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a personalized response.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(555) 123-4567"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium mb-2">
                      School/Organization
                    </label>
                    <Input
                      id="school"
                      name="school"
                      type="text"
                      value={formData.school}
                      onChange={handleInputChange}
                      placeholder="School or organization name"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="groupSize" className="block text-sm font-medium mb-2">
                      Group Size
                    </label>
                    <select
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleInputChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background"
                    >
                      <option value="">Select group size</option>
                      <option value="1-15">1-15 students</option>
                      <option value="16-30">16-30 students</option>
                      <option value="31-45">31-45 students</option>
                      <option value="46+">46+ students</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="travelDates" className="block text-sm font-medium mb-2">
                      Preferred Travel Dates
                    </label>
                    <Input
                      id="travelDates"
                      name="travelDates"
                      type="text"
                      value={formData.travelDates}
                      onChange={handleInputChange}
                      placeholder="e.g., Spring 2024"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm ring-offset-background"
                  >
                    <option value="">Select a subject</option>
                    <option value="quote">Request a Quote</option>
                    <option value="information">General Information</option>
                    <option value="custom">Custom Trip Planning</option>
                    <option value="safety">Safety Questions</option>
                    <option value="existing">Existing Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your travel needs, destinations of interest, educational goals, or any specific questions you have..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Visit Our Office</h3>
                <div className="bg-muted rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Interactive Map</p>
                    <p className="text-sm">19 Oil,Spring,Estate</p>
                    <p className="text-sm">Lugbe, F.C.T Abuja</p>
                  </div>
                </div>
              </div>

              <div className="card-travel p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance? We're here to help!
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+2348142814220"
                    className="btn-secondary w-full justify-center"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Us Now
                  </a>
                  <a 
                    href="https://wa.me/+2348142814220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center bg-green-500 border-green-500 text-white hover:bg-green-600"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="card-travel p-6">
                <h3 className="text-xl font-semibold mb-4">Emergency Contact</h3>
                <p className="text-muted-foreground mb-2">
                  24/7 emergency support during trips:
                </p>
                <p className="font-semibold text-lg">+2348142814220-HELP</p>
                <p className="text-sm text-muted-foreground">
                  (Available only during active travel periods)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Check out our comprehensive FAQ section.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/faqs">
              View All FAQs
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;