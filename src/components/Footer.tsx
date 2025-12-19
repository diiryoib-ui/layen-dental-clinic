import { Link } from 'react-router-dom';
import { Facebook, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0B1221] text-white pt-16 pb-8 border-t border-white/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link to="/" className="inline-block">
                            <h2 className="text-2xl font-bold text-white">LAYEN</h2>
                            <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">Dental Clinic</p>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Votre sourire est notre priorité. Une clinique moderne dédiée à l'excellence des soins dentaires.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Liens Rapides</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-colors">À Propos</Link></li>
                            <li><Link to="/services" className="hover:text-primary transition-colors">Nos Services</Link></li>
                            <li><Link to="/team" className="hover:text-primary transition-colors">Notre Équipe</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>حي النسيم مقابل صيدلية بوفارس, التلاغمة</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                <a href="tel:0553502425" className="hover:text-white transition-colors">05 53 50 24 25</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>Sam - Jeu: 08:00 - 16:00<br />Ven: Fermé</span>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Suivez-nous</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/layen.dental.clinic.2025"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition-colors group"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Layen Dental Clinic. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
