import React from 'react';
import { Award, Globe, Users, Zap, Factory, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '25+', label: 'Years of Excellence' },
    { number: '50+', label: 'Countries Served' },
    { number: '10M+', label: 'Products Installed' },
    { number: '500+', label: 'Design Awards' }
  ];

  const values = [
    {
      icon: <Award className="w-8 h-8 text-[#11B3BC]" />,
      title: 'Excellence',
      description: 'Uncompromising quality in every product we create'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#11B3BC]" />,
      title: 'Innovation',
      description: 'Pioneering new technologies and design solutions'
    },
    {
      icon: <Shield className="w-8 h-8 text-[#11B3BC]" />,
      title: 'Reliability',
      description: 'Trusted performance that stands the test of time'
    },
    {
      icon: <Globe className="w-8 h-8 text-[#11B3BC]" />,
      title: 'Sustainability',
      description: 'Committed to environmental responsibility'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2E59A7]/5">
      <section className="relative py-20 bg-gradient-to-r from-[#2E59A7] to-[#11B3BC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            About Sifon
          </h1>
          <p className="text-xl lg:text-2xl font-bold max-w-3xl mx-auto">
            Leading the global sanitary ware industry with innovative design, 
            exceptional quality, and unwavering commitment to excellence
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#11B3BC] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#2E59A7]/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2E59A7] mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-[#2E59A7]/80 leading-relaxed">
                <p>
                  Founded in 1999, Sifon began as a vision to revolutionize the sanitary ware 
                  industry through innovative design and uncompromising quality. What started 
                  as a small manufacturing facility has grown into a global leader serving 
                  over 50 countries worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous innovation, from pioneering 
                  water-efficient technologies to developing advanced ceramic formulations 
                  that set industry standards. Today, Sifon products grace luxury hotels, 
                  prestigious developments, and discerning homes across the globe.
                </p>
                <p>
                  We believe that exceptional sanitary ware should seamlessly blend 
                  functionality with aesthetic beauty, creating spaces that inspire 
                  and endure. This philosophy drives every decision we make, from 
                  product development to customer service.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6782584/pexels-photo-6782584.jpeg"
                alt="Sifon manufacturing facility"
                className="w-full rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#2E59A7] mb-6">
              Our Values
            </h2>
            <p className="text-lg text-[#2E59A7]/80 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-[#11B3BC]/10 rounded-xl flex items-center justify-center mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#2E59A7]">{value.title}</h3>
                <p className="text-[#2E59A7]/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6782437/pexels-photo-6782437.jpeg"
                alt="Advanced manufacturing process"
                className="w-full rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#11B3BC] text-white p-6 rounded-xl">
                <Factory className="w-8 h-8 mb-2" />
                <div className="text-sm font-bold">ISO 9001</div>
                <div className="text-xs">Certified</div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2E59A7] mb-6">
                Advanced Manufacturing
              </h2>
              <div className="space-y-6 text-lg text-[#2E59A7]/80 leading-relaxed">
                <p>
                  Our state-of-the-art manufacturing facilities combine traditional 
                  craftsmanship with cutting-edge technology. Every product undergoes 
                  rigorous quality control processes to ensure it meets our exacting standards.
                </p>
                <p>
                  From precision molding and high-temperature firing to specialized 
                  glazing techniques, our production process is designed to create 
                  products that not only look beautiful but perform flawlessly for decades.
                </p>
                <p>
                  We invest continuously in research and development, exploring new 
                  materials, technologies, and manufacturing processes that push the 
                  boundaries of what's possible in sanitary ware design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2E59A7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Sifon Quality?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Discover how our premium sanitary ware can transform your next project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/shop"
              className="inline-flex items-center px-8 py-3 bg-[#11B3BC] text-white font-bold rounded-xl hover:bg-[#2E59A7] transition-colors duration-200"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#2E59A7] transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;