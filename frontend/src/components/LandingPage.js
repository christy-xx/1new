import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Leaf, 
  Truck, 
  Shield, 
  Users, 
  TrendingUp, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Quality Plants",
      description: "Verified, premium quality plants from trusted local nurseries across India"
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Doorstep Delivery",
      description: "Safe and fast delivery directly to your home with proper plant care packaging"
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Expert Guidance",
      description: "Comprehensive plant care guides and expert advice for successful gardening"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Community Support",
      description: "Join a thriving community of gardening enthusiasts and plant lovers"
    }
  ];

  const customerBenefits = [
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Premium Quality Plants",
      description: "Access to verified, high-quality plants from trusted local nurseries with quality guarantee"
    },
    {
      icon: <Shield className="h-12 w-12 text-green-600" />,
      title: "No Scams, Quality Guaranteed",
      description: "Complete transparency and quality assurance with our verification system"
    },
    {
      icon: <Star className="h-12 w-12 text-green-600" />,
      title: "Expert Care Guidance",
      description: "Comprehensive plant care instructions and ongoing support for gardening success"
    },
    {
      icon: <Truck className="h-12 w-12 text-green-600" />,
      title: "Convenient Delivery",
      description: "Safe doorstep delivery with proper packaging and plant care instructions"
    }
  ];

  const nurseryBenefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Expand Your Reach",
      description: "Connect with customers across India, not just your local area"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Digital Transformation",
      description: "Modern tools for inventory management, order tracking, and customer communication"
    },
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Marketing Support",
      description: "Get visibility through our platform with marketing support and promotional campaigns"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-600" />,
      title: "Steady Revenue",
      description: "Consistent income stream with our commission-based model and payment guarantees"
    }
  ];

  const stats = [
    { number: "₹14.96bn", label: "Total Market Size" },
    { number: "4.53%", label: "Annual Growth Rate" },
    { number: "95%", label: "Offline Market Share" },
    { number: "2.6%", label: "Online Penetration" }
  ];

  const faqs = [
    {
      question: "How does HariyaliWala ensure plant quality?",
      answer: "We work with verified local nurseries and have a strict quality assurance process. Each plant is inspected before dispatch and comes with a quality guarantee."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We're expanding across India, starting with metro cities. Check our website for current delivery areas and we're continuously adding new locations."
    },
    {
      question: "How can nurseries join the platform?",
      answer: "Nurseries can apply through our partner portal. We have a verification process to ensure quality standards and provide onboarding support."
    },
    {
      question: "What if my plants don't survive after delivery?",
      answer: "We offer plant care guidance and support. If issues arise due to quality problems, we have a replacement policy to ensure customer satisfaction."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-green-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-2xl font-bold text-green-800">HariyaliWala</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
              <a href="#for-customers" className="text-gray-700 hover:text-green-600 transition-colors">For Customers</a>
              <a href="#for-nurseries" className="text-gray-700 hover:text-green-600 transition-colors">For Nurseries</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
              >
                Get Started
              </motion.button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-green-100"
          >
            <div className="px-4 py-2 space-y-2">
              <a href="#features" className="block py-2 text-gray-700 hover:text-green-600">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-green-600">How It Works</a>
              <a href="#for-customers" className="block py-2 text-gray-700 hover:text-green-600">For Customers</a>
              <a href="#for-nurseries" className="block py-2 text-gray-700 hover:text-green-600">For Nurseries</a>
              <button className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 to-blue-900/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1577573524323-a0812cc37771?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxnYXJkZW4lMjBwbGFudHN8ZW58MHx8fGdyZWVufDE3NTE4MzI1MjB8MA&ixlib=rb-4.1.0&q=85')`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Making Gardening
              <span className="text-green-600 block">Accessible for Every Indian</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
            >
              India's premier digital gardening marketplace connecting plant enthusiasts with trusted local nurseries. Quality plants, expert guidance, doorstep delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
              >
                Start Gardening Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Join as Nursery Partner
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose HariyaliWala?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of gardening with our comprehensive platform designed for plant enthusiasts and nursery partners alike.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting your perfect plants is simple with our streamlined process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Browse & Select",
                description: "Explore our curated collection of plants from verified local nurseries",
                image: "https://images.unsplash.com/photo-1630141997874-b7c8fba6a7f0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxwbGFudCUyMGRlbGl2ZXJ5fGVufDB8fHxncmVlbnwxNzUxODMyNTQ2fDA&ixlib=rb-4.1.0&q=85"
              },
              {
                step: "02",
                title: "Expert Guidance",
                description: "Get personalized plant care advice and recommendations from our experts",
                image: "https://images.unsplash.com/photo-1651760548421-f9c28517a955?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxwbGFudCUyMGRlbGl2ZXJ5fGVufDB8fHxncmVlbnwxNzUxODMyNTQ2fDA&ixlib=rb-4.1.0&q=85"
              },
              {
                step: "03",
                title: "Safe Delivery",
                description: "Receive your plants safely packed with detailed care instructions",
                image: "https://images.unsplash.com/photo-1602665905016-208e4bb7e797?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjBnYXJkZW5pbmd8ZW58MHx8fGdyZWVufDE3NTE4MzI1Mjh8MA&ixlib=rb-4.1.0&q=85"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-8">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Benefits Section */}
      <section id="for-customers" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits for <span className="text-green-600">Plant Enthusiasts</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of gardeners choose HariyaliWala for their plant needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Start Your Garden Journey
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Nursery Benefits Section */}
      <section id="for-nurseries" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits for <span className="text-blue-600">Nursery Partners</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your nursery business with our digital platform and reach customers across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nurseryBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 text-lg">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg inline-flex items-center gap-2"
            >
              Become a Partner
              <ArrowRight className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from satisfied customers and successful nursery partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Plant Enthusiast",
                content: "HariyaliWala transformed my balcony into a green paradise. The plants arrived in perfect condition with detailed care instructions.",
                rating: 5
              },
              {
                name: "Raj Nursery",
                role: "Nursery Partner",
                content: "Our sales increased by 300% after joining HariyaliWala. The platform tools make managing orders so much easier.",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Beginner Gardener",
                content: "As a complete beginner, the expert guidance helped me successfully grow my first herb garden. Highly recommended!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about HariyaliWala
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-green-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-green-600" />
                  )}
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Green Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of plant enthusiasts and nursery partners who trust HariyaliWala
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Shop Plants Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Become a Partner
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Leaf className="h-8 w-8 text-green-500" />
                <span className="ml-2 text-2xl font-bold">HariyaliWala</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Making gardening accessible for every Indian by connecting plant enthusiasts with trusted local nurseries across the country.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">+91 1234567890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-gray-400">hello@hariyaliwala.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-green-500 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-green-500 transition-colors">How It Works</a></li>
                <li><a href="#for-customers" className="hover:text-green-500 transition-colors">For Customers</a></li>
                <li><a href="#for-nurseries" className="hover:text-green-500 transition-colors">For Nurseries</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-500 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Plant Care Guide</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-green-500 transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HariyaliWala. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;