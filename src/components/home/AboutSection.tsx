import React from "react";
import { Award, Globe, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-[#11B3BC]" />,
      title: "Global Recognition",
      description: "Trusted by architects and designers worldwide for over 25 years",
    },
    {
      icon: <Award className="w-8 h-8 text-[#11B3BC]" />,
      title: "Design Excellence",
      description: "Award-winning designs that blend aesthetics with functionality",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#11B3BC]" />,
      title: "Innovation",
      description: "Cutting-edge technology and sustainable manufacturing processes",
    },
    {
      icon: <Users className="w-8 h-8 text-[#11B3BC]" />,
      title: "Craftsmanship",
      description: "Skilled artisans dedicated to perfection in every detail",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-[#2E59A7]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2E59A7] mb-6">
                Redefining Luxury
                <span className="block font-bold text-[#11B3BC]">
                  Sanitary Ware
                </span>
              </h2>
              <p className="text-lg text-[#2E59A7]/80 leading-relaxed mb-6">
                For over two decades, Sifon has been at the forefront of sanitary ware innovation, creating products that seamlessly blend contemporary design with uncompromising quality.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 transition-transform duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#11B3BC]/10 rounded-xl flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2E59A7] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#2E59A7]/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6782437/pexels-photo-6782437.jpeg"
                alt="Premium bathroom interior"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#11B3BC] rounded-xl flex items-center justify-center">
              <span className="text-white text-sm font-bold text-center">25+<br />Years</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;