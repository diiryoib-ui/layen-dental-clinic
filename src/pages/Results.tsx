import React from 'react';
import { motion } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const cases = [
    {
        title: "Reconstruction Esthétique",
        desc: "Traitement de la carie antérieure et reconstruction des dents avec une approche professionnelle pour un résultat 100% naturel.",
        imageBefore: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2070&auto=format&fit=crop", // Placeholder
        imageAfter: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", // Placeholder
        category: "Esthétique"
    },
    {
        title: "Traitement de Fluorose",
        desc: "Élimination de la ligne brune due à la fluorose avec un résultat esthétique naturel en une seule séance.",
        imageBefore: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?q=80&w=2070&auto=format&fit=crop", // Placeholder
        imageAfter: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop", // Placeholder
        category: "Blanchiment"
    },
    {
        title: "Extraction Complexe",
        desc: "Extraction d'une dent de sagesse supérieure sans douleur et cicatrisation rapide.",
        imageBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", // Placeholder (Generic dental)
        imageAfter: null,
        category: "Chirurgie"
    },
];

const Results = () => {
    return (
        <div className="bg-white min-h-screen">
            <div className="bg-gray-900 text-white py-20">
                <div className="container-custom text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Résultats</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Des transformations réelles. Découvrez comment nous avons aidé nos patients à retrouver leur sourire.
                    </p>
                </div>
            </div>

            <div className="container-custom py-16">
                <div className="grid grid-cols-1 gap-16">
                    {cases.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-gray-50"
                        >
                            <div className="p-8 border-b border-gray-100">
                                <span className="text-sm font-bold text-secondary uppercase tracking-wider">{item.category}</span>
                                <h2 className="text-2xl font-bold text-gray-900 mt-2">{item.title}</h2>
                                <p className="text-gray-600 mt-2">{item.desc}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="relative group overflow-hidden h-[300px] md:h-[400px]">
                                    <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">AVANT</div>
                                    <img src={item.imageBefore} alt="Avant traitement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                {item.imageAfter ? (
                                    <div className="relative group overflow-hidden h-[300px] md:h-[400px]">
                                        <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-md text-sm font-semibold z-10">APRÈS</div>
                                        <img src={item.imageAfter} alt="Après traitement" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    </div>
                                ) : (
                                    <div className="bg-white h-[300px] md:h-[400px] flex items-center justify-center p-8 text-center">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Résultat Clinique</h3>
                                            <p className="text-gray-500">Procédure réussie avec excellence.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="bg-blue-50 py-16 text-center">
                <div className="container-custom">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">Vous souhaitez le même résultat ?</h2>
                    <Link to="/contact">
                        <Button size="lg">Prendre rendez-vous pour une consultation</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Results;
