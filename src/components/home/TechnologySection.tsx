import React from "react";
import { Beaker, Shield, Droplets, Recycle } from "lucide-react";
import { motion } from "framer-motion";

const TechnologySection: React.FC = () => {
  const technologies = [
    {
      icon: <Beaker className="w-12 h-12 text-[#11B3BC]" />,
      title: "Advanced Ceramics",
      description:
        "Proprietary ceramic formulation ensuring superior durability and stain resistance.",
    },
    {
      icon: <Shield className="w-12 h-12 text-[#11B3BC]" />,
      title: "Antibacterial Coating",
      description:
        "Innovative surface treatment that actively inhibits bacterial growth for enhanced hygiene.",
    },
    {
      icon: <Droplets className="w-12 h-12 text-[#11B3BC]" />,
      title: "Water Efficiency",
      description:
        "Smart flush technology that reduces water consumption without compromising performance.",
    },
    {
      icon: <Recycle className="w-12 h-12 text-[#11B3BC]" />,
      title: "Sustainable Manufacturing",
      description:
        "Eco-friendly production processes with minimal environmental impact and waste reduction.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-20 bg-[#2E59A7]/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-4/3 rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6782584/pexels-photo-6782584.jpeg"
                alt="Advanced manufacturing technology"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#11B3BC] rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-2xl font-bold">ISO</div>
                <div className="text-sm">Certified</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#2E59A7] mb-6">
                Technology &
                <span className="block font-bold text-[#11B3BC]">
                  Craftsmanship
                </span>
              </h2>
              <p className="text-lg text-[#2E59A7]/80 leading-relaxed mb-8">
                Our commitment to innovation drives us to continuously push the
                boundaries of what's possible in sanitary ware design and
                manufacturing. Every product incorporates cutting-edge
                technology with time-honored craftsmanship techniques.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-16 h-16 bg-[#11B3BC]/10 rounded-xl flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2E59A7] mb-2">
                      {tech.title}
                    </h3>
                    <p className="text-[#2E59A7]/80 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-l-4 border-[#11B3BC] pl-6">
              <p className="text-[#2E59A7] italic">
                "Every Sifon product undergoes rigorous quality testing and
                precision engineering..."
              </p>
              <div className="mt-3">
                <span className="font-bold text-[#2E59A7]">
                  Quality Assurance Team
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TechnologySection;