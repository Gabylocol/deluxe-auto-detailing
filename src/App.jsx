import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Car, Home, Shield, Clock, Award, Phone, Mail, MapPin, Instagram, Menu, X } from 'lucide-react';

const DeluxeAutoDetailing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Detallado Express",
      description: "Limpieza esencial, nos enfocamos en las áreas que más lo necesitan para que tu coche luzca presentable por fuera.",
      price: "Desde $25",
      features: ["Lavado completo de la carrocería", "Limpieza detallada de rines", "Limpieza de neumáticos", "30-45 minutos"]
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Premium Refresh",
      description: "Mantenemos el brillo exterior y añadimos la higiene básica necesaria en la cabina.",
      price: "Desde $50",
      features: ["Todo lo del servicio básico", "Aspirado completo del interior", "Limpieza de asientos", "Limpieza de alfombras y maletero", "2-3 horas"],
      featured: true
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Detallado Máster",
      description: "El servicio más completo, no solo limpiamos, sino que también acondicionamos y protegemos el interior para un acabado como nuevo.",
      price: "Desde $100",
      features: ["Todo lo del servicio intermedio", "Limpieza a fondo de todos los plásticos internos", "Salpicadero, puertas y consola", "Aplicación de silicona para nutrir y proteger", "4-6 horas"]
    }
  ];

  const benefits = [
    {
      icon: <Home className="w-10 h-10" />,
      title: "Servicio a Domicilio",
      description: "Vamos donde estés en Cuba. Tu comodidad es nuestra prioridad."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Calidad Garantizada",
      description: "Productos premium y técnicas profesionales para resultados excepcionales."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Puntualidad",
      description: "Respetamos tu tiempo. Servicio eficiente sin comprometer la calidad."
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold tracking-wider">DELUXE AUTO DETAILING</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="hover:text-cyan-400 transition-colors duration-300">Servicios</a>
              <a 
                href="https://www.instagram.com/autodetailing.cuba"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Nosotros
              </a>
              <a 
                href="https://wa.me/5352374005?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Contacto
              </a>
              <motion.a
                href="https://wa.me/5352374005?text=Hola,%20me%20interesa%20agendar%20una%20cita%20para%20detallado%20de%20auto"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-semibold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
              >
                Agendar Cita
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-4"
            >
              <a href="#servicios" className="block hover:text-cyan-400 transition-colors">Servicios</a>
              <a 
                href="https://www.instagram.com/autodetailing.cuba"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyan-400 transition-colors"
              >
                Nosotros
              </a>
              <a 
                href="https://wa.me/5352374005?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyan-400 transition-colors"
              >
                Contacto
              </a>
              <a 
                href="https://wa.me/5352374005?text=Hola,%20me%20interesa%20agendar%20una%20cita%20para%20detallado%20de%20auto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-6 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full font-semibold text-center block"
              >
                Agendar Cita
              </a>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              La <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Perfección</span> en cada Detalle
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              en la puerta de tu hogar
            </motion.p>
            <motion.div
              className="text-base sm:text-lg text-slate-400 mb-8 max-w-3xl mx-auto space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-cyan-300 font-semibold">
                Nos complace anunciar la apertura de nuestro nuevo servicio de detallado de automóviles a domicilio en Cuba.
              </p>
              <p>
                En Deluxe Auto Detailing nos dedicamos a ofrecer un servicio profesional y personalizado, asegurando que su vehículo reciba el cuidado y la atención que merece, sin necesidad de salir de su hogar.
              </p>
              <p className="text-slate-300">
                Le invitamos a contactarnos para conocer más sobre nuestras ofertas y experimentar la comodidad de tener un servicio de detallado de alta calidad a su disposición.
              </p>
            </motion.div>
            <motion.a
              href="https://wa.me/5352374005?text=Hola,%20me%20interesa%20agendar%20una%20cita%20para%20detallado%20de%20auto"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-lg font-bold shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all duration-300 overflow-hidden group mt-4"
            >
              <span className="relative z-10">Reserva tu Cita Ahora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4">
              Nuestros <span className="text-cyan-400">Servicios</span>
            </h2>
            <p className="text-slate-400 text-lg">Elige el plan perfecto para tu vehículo</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                  service.featured 
                    ? 'bg-gradient-to-br from-slate-900 to-cyan-950/50 border-2 border-cyan-500/50 shadow-xl shadow-cyan-500/20' 
                    : 'bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 right-8 px-4 py-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full text-xs font-bold">
                    MÁS POPULAR
                  </div>
                )}
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2 tracking-wide">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.description}</p>
                <p className="text-3xl font-bold text-cyan-400 mb-6">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-slate-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={`https://wa.me/5352374005?text=Hola,%20me%20interesa%20el%20servicio%20${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center ${
                    service.featured
                      ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50'
                      : 'bg-slate-800 hover:bg-slate-700'
                  }`}
                >
                  Seleccionar
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide mb-4">
              ¿Por qué <span className="text-cyan-400">Elegirnos?</span>
            </h2>
            <p className="text-slate-400 text-lg">Excelencia en cada aspecto del servicio</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                className="text-center p-8 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-full mb-6">
                  <div className="text-cyan-400">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-wide">{benefit.title}</h3>
                <p className="text-slate-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-cyan-400" />
                <span className="text-lg font-bold tracking-wider">DELUXE AUTO DETAILING</span>
              </div>
              <p className="text-slate-400 text-sm">
                Servicio profesional y personalizado de detallado a domicilio. Su vehículo merece el mejor cuidado sin salir de casa.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 tracking-wide">Contacto</h4>
              <div className="space-y-3 text-slate-400 text-sm">
                <a 
                  href="https://wa.me/5352374005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+53 5237-4005</span>
                </a>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>info@deluxeauto.cu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>La Habana, Cuba</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 tracking-wide">Síguenos</h4>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="https://www.instagram.com/autodetailing.cuba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 rounded-full hover:bg-cyan-500/20 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-cyan-400" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>&copy; 2026 Deluxe Auto Detailing. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DeluxeAutoDetailing;
