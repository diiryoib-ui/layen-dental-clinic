import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Accueil', path: '/' },
        { name: 'À propos', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Équipe', path: '/team' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-[100] border-b border-gray-100 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Layen Dental Clinic" className="h-12 w-auto object-contain" />
                        <div className="hidden md:block">
                            <h1 className="text-xl font-bold text-primary leading-tight">LAYEN</h1>
                            <p className="text-xs text-secondary tracking-widest uppercase">Dental Clinic</p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-gray-600 hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button size="sm" onClick={() => window.open('tel:0553502425', '_self')}>
                            <Phone className="w-4 h-4 mr-2" />
                            05 53 50 24 25
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-6 py-6 space-y-2">
                            {[
                                { name: 'Accueil', path: '/' },
                                { name: 'À propos', path: '/about' },
                                { name: 'Services', path: '/services' },
                                { name: 'Équipe', path: '/team' },
                                { name: 'Contact', path: '/contact' },
                            ].map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-all ${location.pathname === item.path
                                                ? 'text-primary bg-blue-50'
                                                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-4"
                            >
                                <Button className="w-full justify-center text-lg h-12" onClick={() => window.open('tel:0553502425', '_self')}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    05 53 50 24 25
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
