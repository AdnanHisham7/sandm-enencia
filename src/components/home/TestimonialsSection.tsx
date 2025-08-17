import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Principal Architect",
      company: "Mitchell & Associates",
      content:
        "Sifon products consistently exceed our expectations. The quality and design innovation make them our go-to choice for luxury residential projects.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
    {
      name: "David Chen",
      role: "Interior Designer",
      company: "Chen Design Studio",
      content:
        "The attention to detail and craftsmanship in every Sifon piece is remarkable. They understand what contemporary design demands.",
      rating: 5,
      image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      company: "Premium Developments",
      content:
        "Reliable delivery, consistent quality, and exceptional customer service. Sifon has been our trusted partner for over 8 years.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
  ];

  const clientLogos = [
    "Marriott International",
    "Hilton Worldwide",
    "Four Seasons",
    "Ritz-Carlton",
    "Hyatt Hotels",
    "Sheraton",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
            Trusted by
            <span className="block font-normal text-blue-600">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Architects, designers, and builders worldwide choose Sifon for
            projects that demand excellence and reliability
          </p>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-blue-600">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 pt-16"
        >
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Trusted by Premium Hotel Chains Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-medium text-sm">
                    {logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
