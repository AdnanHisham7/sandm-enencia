import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    brand: 'Enencia'
  });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '9b3d27e9-d24c-4292-a7a8-1d55ca30f518',
          ...formData
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you for your message! We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          subject: '',
          message: '',
          brand: 'Enencia'
        });
      } else {
        setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-[#11B3BC]" />,
      title: 'Visit Our Showroom',
      details: [
        '123 Industrial Avenue',
        'Manufacturing District',
        'City, State 12345'
      ]
    },
    {
      icon: <Phone className="w-6 h-6 text-[#11B3BC]" />,
      title: 'Call Us',
      details: [
        'Sales: +1 (555) 123-4567',
        'Support: +1 (555) 123-4568',
        'International: +1 (555) 123-4569'
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-[#11B3BC]" />,
      title: 'Email Us',
      details: [
        'sales@sifon.com',
        'support@sifon.com',
        'info@sifon.com'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#2E59A7]/5">
      <section className="py-20 bg-gradient-to-r from-[#2E59A7] to-[#11B3BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl font-bold max-w-3xl mx-auto">
            Let's discuss how Sifon can bring excellence to your next project
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2E59A7] mb-6">
              Send Us a Message
            </h2>
            
            {status && (
              <div className={`mb-4 p-4 rounded-xl ${
                status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="brand"
                value="Enencia"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#2E59A7] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#2E59A7] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-[#2E59A7] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#2E59A7] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-[#2E59A7] mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="quote-request">Quote Request</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#2E59A7] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#2E59A7]/20 rounded-xl focus:ring-2 focus:ring-[#11B3BC] focus:border-transparent resize-none"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#11B3BC] text-white px-6 py-3 rounded-xl hover:bg-[#2E59A7] transition-colors duration-200 font-bold flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#2E59A7] mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-[#2E59A7]/80 mb-8">
                We're here to help with your sanitary ware needs. Whether you're an architect 
                planning a luxury development or a homeowner looking for premium solutions, 
                our team is ready to assist you.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#11B3BC]/10 rounded-xl flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#2E59A7] mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-[#2E59A7]/80 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;