"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  Code,
  Smartphone,
  FileText,
  CheckCircle,
  Star,
  Mail,
  Phone,
  Upload,
} from "lucide-react";
import { useForm } from "react-hook-form";

export default function HomePage() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormSubmitted(true);
        reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Project Development",
      items: [
        "Mini + Major Projects",
        "B.Tech, BCA, MCA, M.Tech, Diploma",
        "Full Stack / AI / ML / Web / Mobile Apps",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Web & App Development",
      items: [
        "E-commerce platforms",
        "Android / iOS style apps",
        "Portfolio websites",
        "Business platforms",
      ],
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Add-on Services",
      items: [
        "PPT & Reports",
        "Research Papers",
        "Demo Videos",
        "Deployment & Explanation Videos",
      ],
    },
  ];

  const pricing = [
    { name: "Project Report (12-25 pages)", price: "₹599" },
    { name: "Project Report (30-40+ pages)", price: "₹999" },
    { name: "PPT Default", price: "₹299" },
    { name: "PPT Custom", price: "₹499" },
    { name: "Conference Paper", price: "₹999 - ₹1,499" },
    { name: "Journal Paper", price: "₹1,999" },
    { name: "Demo Video", price: "₹199" },
    { name: "Explanation Document", price: "₹199" },
    { name: "Live Explanation", price: "₹299" },
    { name: "Deployment", price: "₹999 - ₹1,999" },
  ];

  const portfolio = [
    {
      name: "Calm Douhua",
      url: "https://calm-douhua-280173.netlify.app",
      description: "Modern web application",
    },
    {
      name: "GenAI-T",
      url: "https://genai-t.netlify.app",
      description: "AI-powered platform",
    },
  ];

  const testimonials = [
    {
      text: "Got my project in 3 days with full support!",
      author: "B.Tech Student",
    },
    {
      text: "Best place for original and affordable projects.",
      author: "MCA Student",
    },
    { text: "Deployment support was excellent.", author: "M.Tech Student" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-inter overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 flex items-center justify-center relative">
              {/* Unique X Logo */}
              <div className="relative w-8 h-8">
                {/* Main X structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Top-left to bottom-right diagonal */}
                  <div className="absolute w-10 h-1 bg-gradient-to-r from-white via-gray-300 to-white transform rotate-45 rounded-full shadow-lg"></div>
                  {/* Top-right to bottom-left diagonal */}
                  <div className="absolute w-10 h-1 bg-gradient-to-r from-white via-gray-300 to-white transform -rotate-45 rounded-full shadow-lg"></div>
                  {/* Center diamond accent */}
                  <div className="absolute w-2 h-2 bg-white transform rotate-45 shadow-xl"></div>
                  {/* Corner dots */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-white rounded-full opacity-80"></div>
                </div>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight">ATTLASX</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm">
            <a
              href="#services"
              className="hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="hover:text-gray-300 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
        <motion.div
          style={{ opacity, scale }}
          className="text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto flex items-center justify-center mb-8 relative">
              {/* Large Hero X Logo */}
              <div className="relative w-24 h-24">
                {/* Outer glow ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-full blur-xl"></div>
                {/* Main X structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Primary diagonal bars */}
                  <div className="absolute w-28 h-2 bg-gradient-to-r from-white via-gray-200 to-white transform rotate-45 rounded-full shadow-2xl"></div>
                  <div className="absolute w-28 h-2 bg-gradient-to-r from-white via-gray-200 to-white transform -rotate-45 rounded-full shadow-2xl"></div>
                  {/* Secondary thinner bars for depth */}
                  <div className="absolute w-24 h-1 bg-gradient-to-r from-white/80 via-white/60 to-white/80 transform rotate-45 rounded-full"></div>
                  <div className="absolute w-24 h-1 bg-gradient-to-r from-white/80 via-white/60 to-white/80 transform -rotate-45 rounded-full"></div>
                  {/* Center diamond */}
                  <div className="absolute w-4 h-4 bg-gradient-to-br from-white to-gray-300 transform rotate-45 shadow-2xl rounded-sm"></div>
                  {/* Corner accent dots */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-lg"></div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-br from-white to-gray-400 rounded-full shadow-lg"></div>
                  {/* Inner accent lines */}
                  <div className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform rotate-45"></div>
                  <div className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            ATTLASX
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-400 mb-4"
          >
            Project Development & Tech Solutions
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Real-time academic & professional projects with deployment
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Get Your Project <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 border border-white/20"
            >
              Contact Developer
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-white/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Building Excellence,
              <br />
              One Project at a Time
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              We build real-time projects for students and professionals with
              high quality, originality, and on-time delivery. We provide
              complete development, documentation, and deployment support.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Trusted by students across India",
                "Fast delivery & real-time support",
                "100% documentation as per college format",
                "Affordable pricing",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
                  <span className="text-lg text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-white mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-32 px-6 bg-gradient-to-b from-white/5 to-black"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-xl mb-16"
          >
            Projects range from{" "}
            <span className="text-white font-bold">₹1,999 – ₹4,999</span> based
            on complexity
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricing.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-300">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-white">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
          >
            Our Work
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, i) => (
              <motion.a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all group"
              >
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-6 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white/50 group-hover:text-white/80 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                  View Project <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: (portfolio.length + i) * 0.2,
                  duration: 0.6,
                }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 border-dashed"
              >
                <div className="aspect-video bg-gradient-to-br from-white/5 to-transparent rounded-2xl mb-6 flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Coming Soon</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-600">
                  Future Project
                </h3>
                <p className="text-gray-600">More amazing work on the way</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-tight"
          >
            What Students Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>
                <p className="text-lg mb-6 text-gray-300">
                  "{testimonial.text}"
                </p>
                <p className="text-sm text-gray-500">— {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-xl mb-16"
          >
            Ready to start your project? Contact us today
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.a
              href="tel:+918495071582"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Phone</p>
                <p className="text-xl font-semibold">+91 84950 71582</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:at.techsolutions31@gmail.com"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all flex items-center gap-4 group"
            >
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email</p>
                <p className="text-lg font-semibold break-all">
                  at.techsolutions31@gmail.com
                </p>
              </div>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
              <h3 className="text-2xl font-bold mb-4">
                Submit Your Project Request
              </h3>
              <p className="text-gray-400 mb-8">
                Fill out our detailed form to get started with your project.
                We'll review your requirements and get back to you within 24
                hours.
              </p>
              <a
                href="https://forms.gle/zAUuwE9rJX7B7Nb57"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-200 transition-all hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Fill Project Form
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-gray-500">
              Or contact us directly via phone or email above for immediate
              assistance
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 relative">
            {/* Footer X Logo */}
            <div className="relative w-12 h-12">
              {/* Main X structure */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Primary diagonal bars */}
                <div className="absolute w-14 h-1.5 bg-gradient-to-r from-white via-gray-300 to-white transform rotate-45 rounded-full shadow-lg"></div>
                <div className="absolute w-14 h-1.5 bg-gradient-to-r from-white via-gray-300 to-white transform -rotate-45 rounded-full shadow-lg"></div>
                {/* Center diamond */}
                <div className="absolute w-3 h-3 bg-gradient-to-br from-white to-gray-400 transform rotate-45 shadow-xl rounded-sm"></div>
                {/* Corner dots */}
                <div className="absolute -top-1.5 -left-1.5 w-2 h-2 bg-white rounded-full opacity-90 shadow-md"></div>
                <div className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-white rounded-full opacity-90 shadow-md"></div>
                <div className="absolute -bottom-1.5 -left-1.5 w-2 h-2 bg-white rounded-full opacity-90 shadow-md"></div>
                <div className="absolute -bottom-1.5 -right-1.5 w-2 h-2 bg-white rounded-full opacity-90 shadow-md"></div>
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-2">ATTLASX</h3>
          <p className="text-gray-500 mb-6">
            © 2025 – Project Development & Tech Solutions
          </p>
          <p className="text-gray-600 text-sm">
            Quality • Originality • On-Time Delivery
          </p>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
