import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Header */}
            <div className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="container-custom relative z-10 text-center">
                    <span className="text-secondary font-semibold tracking-wide uppercase text-sm">Notre Histoire</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-2">À propos de Layen Dental Clinic</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Fondée avec une vision claire : redéfinir l'expérience dentaire par l'excellence et l'empathie.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="container-custom py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <Heart size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">Notre Mission</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10 font-light">
                            Délivrer des soins dentaires de haute qualité, centrés sur le patient, grâce à une expertise clinique avancée,
                            une technologie moderne et un engagement envers le confort et la transparence.
                            <br /><br />
                            Nous visons à bâtir une confiance durable, à améliorer la santé bucco-dentaire et à fournir des traitements aux normes internationales.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <Sparkles size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 relative z-10">Notre Vision</h2>
                        <p className="text-gray-600 leading-relaxed text-lg relative z-10 font-light">
                            Devenir la référence en services dentaires et orthodontiques dans notre région.
                            <br /><br />
                            Nous aspirons à établir des références en matière de soins préventifs, de dentisterie numérique et d'éducation,
                            tout en élargissant l'accès à des soins complets et compatissants pour tous.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Philosophy */}
            <div className="py-20 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <img
                                src="/about-interior.jpg"
                                alt="Intérieur Clinique Layen"
                                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                            />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Philosophie de Soins</h2>
                                <p className="text-gray-600 text-lg">
                                    Ancrée dans la prévention et l'éducation. Nous croyons que chaque patient mérite des soins sûrs, confortables et adaptés.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Résultats à long terme plutôt que solutions temporaires",
                                    "Approches de traitement minimalement invasives",
                                    "Prise de décision collaborative",
                                    "Prévention et diagnostic précoce"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                                        <Shield className="text-secondary w-6 h-6 flex-shrink-0 mt-0.5" />
                                        <span className="font-medium text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white py-16 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6">Rejoignez notre famille de patients</h2>
                    <Link to="/contact">
                        <Button variant="secondary">Prendre rendez-vous aujourd'hui</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default About;
