
import { useState } from "react";

const Quote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    groupType: "",
    groupSize: "",
    destination: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-20">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        {submitted ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6 text-primary">Thank You!</h1>
            <p className="text-lg text-muted-foreground mb-8">Your quote request has been received. We'll get back to you soon with a personalized offer.</p>
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-6 text-primary text-center">Request a Quote</h1>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="groupType"> Type</label>
                <select
                  id="groupType"
                  name="groupType"
                  value={form.groupType}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                >
                  <option value="">Select type</option>
                  <option value="School">School</option>
                  <option value="Family">Work</option>
                  <option value="Organization">Tourist</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="groupSize">Group Size</label>
                <input
                  type="number"
                  id="groupSize"
                  name="groupSize"
                  value={form.groupSize}
                  onChange={handleChange}
                  min="1"
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="destination">Destination</label>
                <select
                  id="destination"
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  required
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                >
                  <option value="">Select Destination</option>
                  <option value="canada">Canada</option>
                  <option value="uk">UK</option>
                  <option value="United states">US</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-left font-medium mb-1" htmlFor="message">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border rounded px-4 py-2 focus:outline-primary"
                  placeholder="Tell us more about your trip needs..."
                />
              </div>
              <button
                type="submit"
                className="btn-hero w-full text-lg px-8 py-3 mt-4"
              >
                Get My Quote
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
