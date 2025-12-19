import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Phone, MapPin, Clock, MessageCircle, User, Calendar } from 'lucide-react';
// import { motion } from 'framer-motion';

const Contact = () => {
    const [patientType, setPatientType] = useState<'new' | 'returning'>('new');

    return (
        <div className="bg-white min-h-screen">
            {/* Header - Clean & Premium */}
            <div className="relative pt-32 pb-20 overflow-hidden bg-primary text-white">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full mix-blend-overlay filter blur-[80px] opacity-50 animate-blob"></div>
                </div>

                <div className="container-custom relative z-10 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Contactez-nous</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light">
                        Nous sommes là pour répondre à toutes vos questions et planifier votre visite.
                    </p>
                </div>
            </div>

            <div className="container-custom py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Informations de contact</h2>
                            <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
                                N'hésitez pas à nous appeler ou à nous rendre visite. Notre équipe est prête à vous accueillir avec le sourire.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="bg-white p-4 rounded-2xl text-secondary shadow-md border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Adresse</h3>
                                        <p className="text-gray-600 font-light">حي النسيم مقابل صيدلية بوفارس</p>
                                        <p className="text-gray-600 font-light">التلاغمة</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-white p-4 rounded-2xl text-secondary shadow-md border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Téléphone</h3>
                                        <p className="text-gray-600 hover:text-primary transition-colors text-lg">
                                            <a href="tel:0553502425">05 53 50 24 25</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="bg-white p-4 rounded-2xl text-secondary shadow-md border border-gray-100 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg mb-1">Heures d'ouverture</h3>
                                        <p className="text-gray-600">Samedi - Jeudi : 08:00 - 16:00</p>
                                        <p className="text-red-500 font-medium">Vendredi : Fermé</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed */}
                        <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200 border border-white h-80 relative bg-gray-100 transform hover:scale-[1.02] transition-transform duration-500">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3209.689582260477!2d6.3533968!3d36.311451999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f171bc29f44c77%3A0xe5a3c2605f15d970!2zT3J0aG9WaXNpb24gQ2xpbmlxdWUgZGVudGFpcmUgQ29uc3RhbnRpbmUgKGNpdMOpIGRyYSByaW1lKQ!5e0!3m2!1sen!2sdz!4v1709123456789!5m2!1sen!2sdz"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localisation Clinique"
                            ></iframe>
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg text-xs border border-gray-100">
                                <a href="https://maps.app.goo.gl/cTqVyrwTmbkWv3BY8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
                                    Ouvrir dans Google Maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Smart Form - Premium Tabs & WhatsApp */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-blue-900/5 p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-serif font-bold text-gray-900">Rendez-vous</h2>
                                <div className="bg-gray-100 p-1 rounded-xl inline-flex">
                                    <button
                                        onClick={() => setPatientType('new')}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${patientType === 'new' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        Nouveau
                                    </button>
                                    <button
                                        onClick={() => setPatientType('returning')}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${patientType === 'returning' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
                                    >
                                        Habitué
                                    </button>
                                </div>
                            </div>

                            {/* WhatsApp Fast Button */}
                            <a
                                href="https://wa.me/213553502425?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl shadow-lg shadow-green-200 transition-all transform hover:-translate-y-1 mb-8 font-bold text-lg"
                            >
                                <MessageCircle size={24} />
                                Réserver par WhatsApp (Rapide)
                            </a>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px bg-gray-200 flex-1"></div>
                                <span className="text-gray-400 text-sm font-medium">OU PAR EMAIL</span>
                                <div className="h-px bg-gray-200 flex-1"></div>
                            </div>

                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = e.target as HTMLFormElement;
                                    const formData = new FormData(form);
                                    const data = Object.fromEntries(formData.entries());

                                    const subject = `Rendez-vous [${patientType === 'new' ? 'Nouveau' : 'Habitué'}]: ${data.name}`;
                                    const body = `Nom: ${data.name}%0D%0ATéléphone: ${data.phone}%0D%0AService: ${data.service}%0D%0AMessage: ${data.message}`;

                                    window.location.href = `mailto:wajihegma@gmail.com?subject=${subject}&body=${body}`;
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Nom complet</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input name="name" required type="text" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300" placeholder="Votre nom" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Téléphone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input name="phone" required type="tel" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300" placeholder="055..." />
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Service souhaité</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <select name="service" className="w-full pl-12 pr-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 cursor-pointer appearance-none">
                                            <option>Consultation générale</option>
                                            <option>Blanchiment</option>
                                            <option>Implants</option>
                                            <option>Orthodontie</option>
                                            <option>Urgence</option>
                                            <option>Autre</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 pl-1">Message (Facultatif)</label>
                                    <textarea name="message" rows={3} className="w-full px-5 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300 resize-none" placeholder={patientType === 'new' ? "Dites-nous ce qui vous amène..." : "Rappel de votre dernier rdv ?"}></textarea>
                                </div>

                                <Button size="lg" className="w-full justify-center text-lg py-6 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 group">
                                    Envoyer la demande
                                    <Clock className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
