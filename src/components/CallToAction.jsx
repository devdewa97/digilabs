import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, X, Mail, Phone, User, Building2, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CallToAction = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        business: '',
        package: 'starter'
    });
    const modalRef = useRef(null);

    const packages = [
        { value: 'starter', label: 'Starter Website - Rp700.000', desc: '3 Halaman, Free Domain' },
        { value: 'business', label: 'Business Website - Rp2.500.000', desc: 'Up to 10 Halaman, Hosting' },
        { value: 'custom', label: 'Custom Website - Hubungi Kami', desc: 'Unlimited, Custom Features' }
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePackageChange = (e) => {
        setFormData({ ...formData, package: e.target.value });
    };

    const generateWhatsAppMessage = () => {
        const pkg = packages.find(p => p.value === formData.package);
        return `Halo kak 👋 Saya ${formData.name} dari ${formData.business}. Saya tertarik dengan Paket ${pkg.label}. 
Email: ${formData.email} | WA: ${formData.phone}. 
Boleh minta info lebih lanjut? Terima kasih 🙏`;
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') closeModal();
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, []);

    const handleBackdropClick = (e) => {
        if (e.target === modalRef.current) closeModal();
    };

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background with modern gradient */}
            <div className="absolute inset-0 bg-primary">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"></div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
                    <svg width="404" height="384" fill="none" viewBox="0 0 404 384" className="opacity-20">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                    </svg>
                </div>
                <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
                    <svg width="404" height="384" fill="none" viewBox="0 0 404 384" className="opacity-20">
                        <defs>
                            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
                            </pattern>
                        </defs>
                        <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"></rect>
                    </svg>
                </div>
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                    Siap Meningkatkan Bisnis Anda?
                </h2>
                <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Jangan biarkan kompetitor selangkah lebih maju. Dapatkan website profesional sekarang dan jangkau lebih banyak pelanggan.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#pricing"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-primary bg-white hover:bg-gray-50 shadow-xl transition-all hover:scale-105 duration-200"
                    >
                        Mulai Website Anda Sekarang
                        <ArrowRight className="ml-2 h-6 w-6" />
                    </a>
                    <a
                        href="https://wa.me/6281324887391?text=Halo+kak+%F0%9F%99%8B+saya+ingin+konsultasi+gratis+untuk+pembuatan+website.+Bisa+bantu+jawab+beberapa+pertanyaan+saya+ya%3F+Terima+kasih+%F0%9F%99%80"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-transparent border-2 border-white/30 hover:bg-white/10 transition-all duration-200"
                    >
                        Konsultasi Gratis
                    </a>
                </div>
            </div>

            {/* Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                        onClick={handleBackdropClick}
                        ref={modalRef}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="bg-white rounded-3xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                                    <Package className="h-8 w-8 text-primary mr-3" />
                                    Pilih Paket Website
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
                                >
                                    <X className="h-6 w-6 text-gray-500" />
                                </button>
                            </div>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                                        <User className="h-4 w-4 mr-2" />
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                                        <Mail className="h-4 w-4 mr-2" />
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                                        <Phone className="h-4 w-4 mr-2" />
                                        No. WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="08xxxxxxxxx"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2 items-center">
                                        <Building2 className="h-4 w-4 mr-2" />
                                        Nama Bisnis/Perusahaan
                                    </label>
                                    <input
                                        type="text"
                                        name="business"
                                        value={formData.business}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Paket Website
                                    </label>
                                    <select
                                        name="package"
                                        value={formData.package}
                                        onChange={handlePackageChange}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                                    >
                                        {packages.map((pkg) => (
                                            <option key={pkg.value} value={pkg.value}>
                                                {pkg.label} ({pkg.desc})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <motion.a
                                    href={`https://wa.me/6281324887391?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full block py-4 px-6 bg-primary text-white font-bold rounded-2xl text-lg hover:bg-blue-700 shadow-xl hover:shadow-2xl transition-all duration-200 text-center no-underline items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Pesan Sekarang
                                </motion.a>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CallToAction;
