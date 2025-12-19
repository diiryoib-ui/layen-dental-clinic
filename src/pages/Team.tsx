import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const doctors = [
    {
        name: 'Dr. Mehjoub - Épouse Sami Ben Merzouk',
        title: 'Chirurgien Dentiste',
        specialty: 'Spécialiste en dentisterie esthétique et parodontologie',
        bio: 'Fondatrice de la clinique Layen Dental, Dr. Mehjoub se consacre à fournir des soins dentaires d\'excellence. Passionnée par la dentisterie esthétique et la santé des gencives, elle combine expertise technique et approche humaine pour redonner le sourire à ses patients.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop', // Placeholder
        credentials: ['Docteur en Chirurgie Dentaire', 'Formation avancée en Esthétique', 'Certifiée en Implantologie']
    }
];

const Team = () => {
    return (
        <div className="bg-white">
            {/* Header - Blue & Premium */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
                <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full mix-blend-overlay filter blur-[80px] opacity-50 animate-blob"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Notre Équipe
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Rencontrez les professionnels passionnés qui prennent soin de votre sourire.
                    </motion.p>
                </div>
            </div>

            {/* Main Doctor */}
            <div className="container-custom py-12">
                {doctors.map((doc, idx) => (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        key={idx}
                        className="flex flex-col items-center mb-24 max-w-5xl mx-auto text-center"
                    >
                        <div className="space-y-10 w-full bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                            {/* Decorative Background inside card */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/50 to-transparent"></div>

                            <div className="relative z-10">
                                <div className="inline-block px-6 py-2 bg-white border border-blue-100 text-secondary rounded-full text-sm font-bold tracking-wide shadow-sm mb-6">
                                    {doc.title}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
                                    {doc.name}
                                </h2>
                                <h3 className="text-xl text-primary font-medium tracking-wide">{doc.specialty}</h3>

                                <div className="relative py-12 max-w-3xl mx-auto">
                                    <span className="absolute top-4 left-0 text-8xl text-secondary/10 font-serif leading-none">“</span>
                                    <p className="text-gray-600 leading-relaxed text-lg md:text-xl font-light italic px-8 relative z-10">
                                        {doc.bio}
                                    </p>
                                    <span className="absolute bottom-[-1rem] right-0 text-8xl text-secondary/10 font-serif leading-none">”</span>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50/80 rounded-3xl p-8 mb-10">
                                    <div className="text-center md:text-left">
                                        <h4 className="font-bold text-gray-900 flex items-center justify-center md:justify-start gap-3 mb-4 text-lg">
                                            <div className="p-2 bg-white rounded-full shadow-sm text-secondary">
                                                <GraduationCap size={20} />
                                            </div>
                                            Diplômes & Certifications
                                        </h4>
                                    </div>
                                    <div>
                                        <ul className="space-y-3 text-left">
                                            {doc.credentials.map((cred, i) => (
                                                <li key={i} className="flex items-center text-gray-700 font-medium">
                                                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                                                    {cred}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <Link to="/contact">
                                        <Button className="rounded-full px-10 py-7 text-lg shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:scale-105 transition-all">
                                            Prendre Rendez-vous avec Dr. Mehjoub
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Join Us Block */}
            <div className="bg-primary text-white py-16">
                <div className="container-custom text-center">
                    <h2 className="text-3xl font-bold mb-4">Une équipe en croissance</h2>
                    <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                        Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre vision.
                    </p>
                    <Link to="/contact">
                        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                            Contactez-nous
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;
