import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const servicesList = [
    {
        id: 'whitening',
        title: 'Blanchiment Dentaire',
        shortDesc: 'Restaurez l\'éclat de votre sourire en une seule visite.',
        fullDesc: 'Procédure cosmétique conçue pour éliminer les taches et la décoloration en toute sécurité. Résultats immédiats avec une sensibilité minimale.',
        benefits: ['Résultats visibles immédiatement', 'Application contrôlée et sûre', 'Améliore l\'esthétique du sourire'],
        image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'cleaning',
        title: 'Nettoyage des Gencives',
        shortDesc: 'Prévention et traitement des maladies parodontales.',
        fullDesc: 'Détartrage et polissage pour éliminer la plaque et le tartre. Essentiel pour prévenir les maladies des gencives et la mauvaise haleine.',
        benefits: ['Prévient la perte de dents', 'Réduit l\'inflammation', 'Améliore la santé globale'],
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'implants',
        title: 'Implants Dentaires',
        shortDesc: 'Solutions durables pour remplacer les dents manquantes.',
        fullDesc: 'Piliers en titane placés chirurgicalement pour remplacer les racines manquantes. Offre une base permanente pour les couronnes.',
        benefits: ['Durabilité à long terme', 'A aspect et sensation naturels', 'Préserve l\'os de la mâchoire'],
        image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'xrays',
        title: 'Radiographie Dentaire',
        shortDesc: 'Imagerie diagnostique précise pour un traitement ciblé.',
        fullDesc: 'Techniques d\'imagerie essentielles pour visualiser les dents, les racines et les structures osseuses invisibles à l\'œil nu.',
        benefits: ['Détection précoce des problèmes', 'Support au plan de traitement', 'Rapide et non-invasif'],
        image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'extraction',
        title: 'Extraction Dentaire',
        shortDesc: 'Retrait sécurisé des dents endommagées ou problématiques.',
        fullDesc: 'Procédure réalisée sous anesthésie pour retirer les dents irrécupérables ou les dents de sagesse incluses.',
        benefits: ['Soulagement de la douleur', 'Prévention des infections', 'Anesthésie pour le confort'],
        image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'surgery',
        title: 'Chirurgie Orale',
        shortDesc: 'Interventions complexes pour restaurer la santé buccale.',
        fullDesc: 'Traitement des dents incluses, kystes, et autres pathologies des mâchoires et des tissus mous.',
        benefits: ['Restaure la fonction', 'Résout les problèmes complexes', 'Prévient les complications futures'],
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'prosthetics',
        title: 'Prothèses Dentaires',
        shortDesc: 'Couronnes, ponts et dentiers pour restaurer la fonction.',
        fullDesc: 'Solutions fixes ou amovibles pour remplacer les dents abîmées ou manquantes, améliorant la mastication et l\'élocution.',
        benefits: ['Restaure la mastication', 'Améliore l\'esthétique', 'Solutions durables'],
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'ortho',
        title: 'Orthodontie',
        shortDesc: 'Alignement des dents pour un sourire harmonieux.',
        fullDesc: 'Correction des dents mal alignées et des problèmes de mâchoire avec des appareils ou aligneurs transparents.',
        benefits: ['Dents plus droites', 'Meilleure santé bucco-dentaire', 'Esthétique faciale améliorée'],
        image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'cosmetic',
        title: 'Dentisterie Esthétique',
        shortDesc: 'Facettes et bonding pour un sourire parfait.',
        fullDesc: 'Amélioration de l\'apparence des dents via diverses techniques comme les facettes, le contouring et le bonding.',
        benefits: ['Boost la confiance en soi', 'Corrige les imperfections mineures', 'Résultats naturels'],
        image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800'
    }
];

const Services = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Header - Blue & Premium */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
                {/* Background Blobs - Blue on Blue */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full mix-blend-overlay filter blur-[80px] opacity-50 animate-blob"></div>
                    <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-secondary/20 rounded-full mix-blend-overlay filter blur-[80px] opacity-50 animate-blob animation-delay-2000"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-serif font-bold mb-6"
                    >
                        Nos Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Des solutions complètes et personnalisées pour votre santé bucco-dentaire, dispensées avec expertise et douceur.
                    </motion.p>
                </div>
            </div>

            <div className="container-custom py-16 relative z-10">
                <div className="grid grid-cols-1 gap-12">
                    {servicesList.map((service, index) => (
                        <motion.div
                            id={service.id}
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-all duration-500 group"
                        >
                            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-secondary/10 text-secondary rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                        <Check size={24} />
                                    </div>
                                    <h2 className="text-3xl font-serif font-bold text-gray-900">{service.title}</h2>
                                </div>

                                <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                                    {service.fullDesc}
                                </p>

                                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                                    <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Pourquoi choisir ce soin ?</h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                        {service.benefits.map((benefit, i) => (
                                            <li key={i} className="flex items-start text-gray-600 text-[15px] font-medium">
                                                <span className="inline-flex items-center justify-center w-5 h-5 mr-3 text-secondary mt-0.5">
                                                    <Check size={16} strokeWidth={3} />
                                                </span>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <Link to="/contact">
                                        <Button className="rounded-full px-8 py-6 shadow-lg shadow-primary/20 hover:shadow-primary/30">
                                            Prendre rendez-vous <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="md:w-1/3 min-h-[300px] relative overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="bg-white py-16 border-t border-gray-100">
                <div className="container-custom text-center">
                    <h2 className="text-2xl font-bold mb-6">Vous ne savez pas quel traitement choisir ?</h2>
                    <Link to="/contact">
                        <Button size="lg">Contactez-nous pour une consultation</Button>
                    </Link>
                </div>
            </div>

            {/* ================= FAQ SECTION ================= */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Questions Fréquentes</h2>
                        <p className="text-gray-600">Tout ce que vous devez savoir avant votre visite.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Acceptez-vous les nouveaux patients ?", a: "Oui, nous accueillons de nouveaux patients avec plaisir. Vous pouvez prendre rendez-vous directement en ligne ou par téléphone." },
                            { q: "Proposez-vous des facilités de paiement ?", a: "Nous proposons des plans de traitement personnalisés et pouvons discuter d'options de paiement échelonné pour les gros soins (implants, orthodontie)." },
                            { q: "Les facettes dentaires abîment-elles les dents ?", a: "Non, nous utilisons des techniques minimalement invasives qui préservent au maximum votre émail naturel." },
                            { q: "Que faire en cas d'urgence dentaire ?", a: "Contactez-nous immédiatement au 05 53 50 24 25. Nous réservons des créneaux quotidiens pour les urgences." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 transition-colors cursor-pointer border border-gray-100"
                            >
                                <h3 className="font-bold text-gray-900 text-lg mb-2 flex justify-between items-center">
                                    {item.q}
                                    <span className="text-primary text-xl">+</span>
                                </h3>
                                <p className="text-gray-600 leading-relaxed">{item.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
