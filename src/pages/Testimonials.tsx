import { Star } from 'lucide-react';
import DanielImg from '../assets/Daniel.jpg';

const testimonials = [
    {
        name: 'Number Daniel',
        role: 'High School Principal',
        content: "Jay V Travel's made our European trip seamless. The students had an incredible educational experience, and we felt completely safe throughout.",
        rating: 5,
        school: 'Lincoln High School',
        image: DanielImg,
    },
    {
        name: 'Michael Chen',
        role: 'Student',
        content: "The best trip ever! I learned so much about history and made friends from different schools. Can't wait for the next adventure!",
        rating: 5,
        school: 'Roosevelt Academy',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Parent',
        content: "As a parent, I was initially worried, but Jay V's safety measures and communication gave me complete peace of mind. My daughter had the time of her life!",
        rating: 5,
        school: 'Parent of Madison High Student',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
];

const Testimonials = () => (
  <div className="min-h-screen py-20 bg-background">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">Testimonials</h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Hear from the schools, students, and parents who trust us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="card-travel p-8 text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-secondary fill-current" />
              ))}
            </div>
            <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
            <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-primary">{testimonial.role}</p>
            <p className="text-sm text-muted-foreground">{testimonial.school}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Testimonials;
