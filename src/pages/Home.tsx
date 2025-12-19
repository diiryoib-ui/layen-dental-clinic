import React from 'react';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Clock, Phone, Heart, Activity, Smile, Sparkles, Gem, HeartPulse, Stethoscope } from 'lucide-react';

import { Link } from 'react-router-dom';

const Home = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-surface">

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-surface">
        {/* Animated Background Blobs - Toned Down */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob"></div>
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-primary/10 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-gray-600 text-sm font-medium tracking-wide uppercase">Nouvelle technologie 3D</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] tracking-tight">
                Révélez votre <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  plus beau sourire
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-lg leading-relaxed font-light">
                Une expérience dentaire réinventée : moderne, humaine et sans douleur.
                Profitez de soins d'excellence dans un cadre apaisant à Constantine.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 w-full sm:w-auto px-8 h-14 text-lg">
                    Prendre Rendez-vous
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto px-8 h-14 text-lg border-gray-200 hover:bg-gray-50 hover:text-gray-900">
                    Découvrir nos soins
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants} className="pt-10 border-t border-gray-200/60 max-w-md">
                <div className="flex items-center gap-8 opacity-80 grayscale transition-all hover:grayscale-0">
                  {/* Placeholder Icons for Trust */}
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-gray-400" size={20} />
                    <span className="text-sm font-semibold text-gray-500">Certifié</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="text-gray-400" size={20} />
                    <span className="text-sm font-semibold text-gray-500">4.9/5 Avis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="text-gray-400" size={20} />
                    <span className="text-sm font-semibold text-gray-500">Urgence 24h</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image (Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[3rem] transform rotate-3 scale-[1.02] opacity-10 blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2074&auto=format&fit=crop"
                  alt="Sourire éclatant et naturel"
                  className="relative w-full h-[650px] object-cover rounded-[2.5rem] shadow-2xl ring-1 ring-gray-100"
                />

                {/* Glassmorphism Badge */}
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-xl p-4 pr-8 rounded-full shadow-2xl border border-white/50 flex items-center gap-4 w-max">
                  <div className="bg-green-500 text-white p-3 rounded-full">
                    <Phone size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Une question ?</p>
                    <p className="text-xs text-gray-600 font-medium">05 53 50 24 25</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES (COLORFUL CARDS) ================= */}
      <section className="py-24 bg-surface-dark relative">
        {/* Curve Top */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(118%)] h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Nos Spécialités</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Expertise Complète</h2>
            <p className="text-gray-600 text-lg">
              De l'esthétique à la chirurgie, nous maîtrisons chaque aspect de votre santé bucco-dentaire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Esthétique", desc: "Facettes & Blanchiment", icon: Sparkles, color: "text-amber-500", bg: "bg-amber-50" },
              { title: "Implantologie", desc: "Remplacement durable", icon: Gem, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Orthodontie", desc: "Aligneurs invisibles", icon: Smile, color: "text-purple-600", bg: "bg-purple-50" },
              { title: "Parodontologie", desc: "Soins des gencives", icon: HeartPulse, color: "text-emerald-600", bg: "bg-emerald-50" },
              { title: "Chirurgie", desc: "Extractions & Greffes", icon: Stethoscope, color: "text-rose-600", bg: "bg-rose-50" },
              { title: "Urgence", desc: "Soulagement immédiat", icon: Clock, color: "text-cyan-600", bg: "bg-cyan-50" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${s.bg} rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500`}></div>

                <div className={`w-16 h-16 ${s.bg} ${s.color} rounded-2xl flex items-center justify-center mb-6 relative z-10 text-3xl`}>
                  <s.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-gray-500 mb-6 relative z-10">{s.desc}</p>

                <Link to="/services" className="inline-flex items-center text-gray-900 font-semibold group-hover:text-primary transition-colors relative z-10">
                  En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div >
      </section >

      {/* ================= TEAM (SPLIT) ================= */}
      < section className="py-24 bg-surface relative overflow-hidden" >
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 transform translate-x-4 translate-y-4 -z-10 opacity-10"></div>
              <img
                src="/team-home.jpg"
                alt="Équipe"
                className="rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
              />

              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
                <p className="text-sm font-bold text-primary mb-1">DR MAHDJOUR</p>
                <p className="text-xs text-gray-500">Chirurgien Dentiste & Fondatrice</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <span className="text-secondary font-bold tracking-wider uppercase">Notre Équipe</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Des experts passionnés <br />
                <span className="text-primary italic">à votre écoute</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nous ne soignons pas seulement des dents, nous prenons soin de personnes. Notre équipe multidisciplinaire combine savoir-faire technique et bienveillance pour vous offrir une expérience unique.
              </p>

              <div className="grid grid-cols-2 gap-4 pb-4">
                {['Formation Continue', 'Technologie Laser', 'Stérilisation Max', 'Ambiance Zen'].map((tag, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-700 font-medium">
                    <div className="w-2 h-2 bg-accent rounded-full"></div> {tag}
                  </div>
                ))}
              </div>

              <Link to="/team">
                <Button variant="primary" size="lg" className="shadow-lg shadow-blue-200">
                  Rencontrer l'équipe
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section >

      {/* ================= RESULTS / CASES ================= */}
      < section id="results" className="py-24 bg-surface-dark relative" >
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-2 block">Transformations</span>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">Sourires Réels, Résultats Réels</h2>
            <p className="text-gray-600 text-lg">
              Découvrez les changements de vie que nous réalisons chaque jour.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer"
              >
                <img
                  src={`/cases/case-${num}.jpg`}
                  alt={`Cas Patient ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium text-sm">Voir le cas</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* ================= TESTIMONIALS (CAROUSEL) ================= */}
      < section className="py-24 bg-white relative overflow-hidden" >
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">Témoignages</span>
            <h2 className="text-4xl font-serif font-bold text-gray-900">La confiance de nos patients</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: "Sarah B.", text: "Une équipe incroyable ! J'avais peur du dentiste, mais le Dr Mahdjour a été d'une douceur absolue. Résultat magnifique.", stars: 5 },
              { name: "Karim M.", text: "Service très professionnel, clinique ultra-moderne et propre. Je recommande vivement pour les implants.", stars: 5 },
              { name: "Amel L.", text: "J'ai retrouvé mon sourire grâce aux facettes. Le suivi est parfait, merci à toute l'équipe Layen !", stars: 5 }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all max-w-sm border border-gray-100"
              >
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(review.stars)].map((_, s) => <Star key={s} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-bold text-gray-900">{review.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* ================= CTA (GRADIENT) ================= */}
      < section className="py-24 relative overflow-hidden" >
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Prêt pour votre nouveau sourire ?
          </motion.h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-light">
            N'attendez plus. La consultation de vos rêves est à un clic.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 border-none shadow-xl transform hover:-translate-y-1 transition-all rounded-full px-10">
                Prendre Rendez-vous
              </Button>
            </Link>
            <a href="tel:0553502425">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-full px-8">
                <Phone className="mr-2 h-5 w-5" /> 05 53 50 24 25
              </Button>
            </a>
          </div>
        </div>
      </section >

      {/* Floating WhatsApp Button */}
      < a
        href="https://wa.me/213553502425"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce-slow flex items-center justify-center"
        title="Discuter sur WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.062.579 2.09.882 3.803.882 3.182 0 5.769-2.586 5.769-5.766 0-3.181-2.588-5.766-5.766-5.766zm9.932 7.009h.197c-.015-1.996-.531-3.905-1.493-5.602-1.745-3.076-5.003-5.001-8.636-5.001-5.461 0-9.907 4.446-9.907 9.906 0 2.029.615 3.924 1.677 5.539l-1.792 6.544 6.692-1.755c1.558.848 3.328 1.302 5.2 1.302 5.462 0 9.908-4.446 9.908-9.906 0-.341-.017-.677-.046-1.027zm-9.932 9.065c-1.579 0-3.085-.389-4.426-1.07l-.317-.162-3.239.849.866-3.155-.207-.329c-.808-1.282-1.233-2.76-1.233-4.295 0-4.422 3.596-8.018 8.018-8.018s8.018 3.596 8.018 8.018c0 4.422-3.596 8.017-8.018 8.017z" />
        </svg>
      </a >

    </div >
  );
};

export default Home;
