import React, { useRef, useEffect, useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, FileText, Scale, Users, CheckCircle, Star, Award, BookOpen, Gavel } from 'lucide-react';
import { WhatsappLogo } from 'phosphor-react';

function App() {
  const whatsappNumber = "918299785599";
  const whatsappMessage = "Hi Pallavi, I found your website and would like to discuss my legal matter.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const WhatsAppButton = ({ variant = 'primary', size = 'default', className = '', style = {} }: { 
    variant?: 'primary' | 'secondary' | 'floating', 
    size?: 'default' | 'large',
    className?: string,
    style?: React.CSSProperties
  }) => (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2 font-medium transition-all duration-200
        ${size === 'large' ? 'px-6 py-3 text-base' : 'px-4 py-2 text-sm'}
        bg-white border border-green-500 text-green-700 hover:bg-green-50 hover:shadow-md hover:border-green-600
        rounded-lg
        focus:outline-none focus:ring-2 focus:ring-green-200
        ${className}
      `}
      style={style}
    >
      <WhatsappLogo size={size === 'large' ? 22 : 18} weight="fill" className="text-green-500" />
      <span>Chat on WhatsApp</span>
    </a>
  );

  const heroRef = useRef<HTMLDivElement>(null);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setShowStickyCTA(rect.bottom <= 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Enhanced Hero Section with Side Layout */}
      <section ref={heroRef} className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Professional Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 border border-green-200">
                <Scale className="text-green-600" size={24} />
                <span className="text-lg font-semibold text-green-800">Professional Legal Services</span>
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Pallavi Singh
                </h1>
                <div className="space-y-2">
                  <p className="text-2xl md:text-3xl font-medium text-gray-700">
                    Advocate & Legal Consultant
                  </p>
                  <p className="text-xl md:text-2xl text-gray-600 font-light">
                    Consumer & Civil Litigation | Drafting & Legal Advisory
                  </p>
                </div>
              </div>
              
              {/* Location & Availability */}
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="font-medium text-gray-800">New Delhi & NCR</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="text-green-600" size={20} />
                  <span className="font-medium text-gray-800">Available Online Nationwide</span>
                </div>
              </div>
              
              {/* Main CTA */}
              <div className="space-y-6">
                <WhatsAppButton variant="primary" size="large" className="shadow-2xl" />
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-start gap-8 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="font-medium">Free Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="font-medium">Quick Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="font-medium">Affordable Rates</span>
                  </div>
                </div>
              </div>
              
              {/* Education Highlight */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">Law Graduate</p>
                    <p className="text-blue-700 font-semibold">Faculty of Law, BHU</p>
                    <p className="text-sm text-gray-600 mt-1">Specialized in Consumer Protection & Civil Litigation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                  alt="Professional legal consultation - Pallavi Singh, Advocate"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">100+</div>
                    <div className="text-sm font-medium text-gray-700">Happy Clients</div>
                  </div>
                </div>
                
                {/* Floating Experience Card */}
                <div className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Gavel className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">Court Experience</div>
                      <div className="text-sm text-gray-600">Consumer Forums & High Court</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-green-200 to-emerald-300 rounded-full opacity-60 -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-40 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky WhatsApp CTA */}
      {showStickyCTA && (
        <div
          className="fixed z-50 w-full flex justify-center md:justify-end pointer-events-none"
          style={{ bottom: 20, left: 0, right: 0 }}
        >
          <div className="pointer-events-auto w-full flex justify-center md:justify-end px-2 md:px-8">
            <WhatsAppButton
              variant="primary"
              size="large"
              className="shadow-lg"
              style={{ minWidth: 0, maxWidth: 320 }}
            />
          </div>
        </div>
      )}

      {/* About Section with Image */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Legal consultation"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="text-yellow-500" size={32} />
                    <div>
                      <p className="font-bold text-gray-900">BHU Graduate</p>
                      <p className="text-sm text-gray-600">Faculty of Law</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-green-600 mb-8"></div>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I'm a law graduate from <strong className="text-gray-900">Faculty of Law, BHU</strong>, currently practicing in New Delhi with hands-on experience in consumer disputes, civil matters, and client advisory.
                </p>
                <p>
                  I've independently drafted and filed petitions under the Consumer Protection Act, appeared before Consumer Forums and High Court, and assisted clients in resolving disputes through legal notices, settlements, and court appearances.
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl">
                  <p className="text-green-800 font-semibold text-xl flex items-center gap-3">
                    <Star className="text-green-600" size={24} />
                    My focus: Simple, reliable, and affordable legal solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Visual Cards */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Services I Offer</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal support tailored to your specific needs with personalized attention
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <FileText className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Drafting & Petitions</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Consumer complaints, civil petitions, quashing petitions, execution applications with expert legal research.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Mail className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Notices</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Professional notices for service deficiency, recovery of dues, property disputes, family law matters.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Users className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consultation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Explaining legal options in plain language, helping you decide the best course of action for your case.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Gavel className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Court Representation</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Appearances in Consumer Forum, District Courts, and High Court (Delhi) in selected matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section with Visual Elements */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Side */}
            <div>
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Why Work With Me?
                </h2>
                <div className="w-20 h-1 bg-green-600 mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Practical Courtroom Experience</h4>
                    <p className="text-gray-700">Hands-on experience in Consumer & Civil Litigation with proven track record</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Drafting Expertise</h4>
                    <p className="text-gray-700">Strong legal research background with attention to detail in documentation</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Personalized Client Support</h4>
                    <p className="text-gray-700">I explain the process clearly, not just the law - making legal matters understandable</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <MapPin className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Delhi NCR Based</h4>
                    <p className="text-gray-700">Local presence with online consultation available nationwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Side */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Legal consultation meeting"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <Award className="text-yellow-500" size={28} />
                    <div>
                      <p className="font-bold text-gray-900 text-sm">Trusted by</p>
                      <p className="text-lg font-bold text-green-600">100+ Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Section with Visual Background */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-800 bg-opacity-90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <MessageCircle className="text-green-300" size={24} />
              <span className="text-lg font-medium">Ready to Help</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Help With a Legal Issue?
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-green-100 max-w-3xl mx-auto leading-relaxed">
              Whether it's a consumer complaint, legal notice, or court representation – let's discuss your case today and find the best solution together.
            </p>
          </div>
          
          <WhatsAppButton variant="floating" size="large" className="mb-8" />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="text-green-300 mx-auto mb-3" size={32} />
              <p className="font-semibold">Instant Response</p>
              <p className="text-sm text-green-200">Usually within 30 minutes</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <Scale className="text-green-300 mx-auto mb-3" size={32} />
              <p className="font-semibold">Expert Guidance</p>
              <p className="text-sm text-green-200">Clear legal advice</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
              <CheckCircle className="text-green-300 mx-auto mb-3" size={32} />
              <p className="font-semibold">Proven Results</p>
              <p className="text-sm text-green-200">Successful case outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Credentials</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-700 font-medium">Law Graduate</p>
              <p className="text-blue-600 font-semibold">Faculty of Law, BHU</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gavel className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Court Experience</h3>
              <p className="text-gray-700 font-medium">Consumer Forums</p>
              <p className="text-green-600 font-semibold">& High Court Appearances</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Specialization</h3>
              <p className="text-gray-700 font-medium">Consumer Protection</p>
              <p className="text-purple-600 font-semibold">& Civil Litigation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Information */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Mail className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:pallavibhuofficial@gmail.com" className="text-white font-medium hover:text-green-400 transition-colors">
                      pallavibhuofficial@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <Phone className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+918299785599" className="text-white font-medium hover:text-green-400 transition-colors">
                      +91 8299785599
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gray-800 p-3 rounded-lg">
                    <MapPin className="text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white font-medium">New Delhi & NCR</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Side */}
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4">Ready to Discuss Your Case?</h4>
              <p className="text-gray-300 mb-8 text-lg">
                Start with a free consultation on WhatsApp
              </p>
              <WhatsAppButton variant="floating" size="large" className="mb-6" />
              <p className="text-sm text-gray-400">
                Available for online consultation nationwide
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Pallavi Singh, Advocate. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;