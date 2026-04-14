import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <img
                                src="https://medivacare.com/wp-content/uploads/2026/04/Logo-Digilabs-Kreasi-Nusantara-Putih.png"
                                alt="PT Digilabs Kreasi Nusantara"
                                className="h-14 w-auto"
                            />
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Solusi cerdas untuk pembuatan website profesional, cepat, dan mobile-friendly khusus untuk bantu kembangkan bisnis Anda.
                        </p>
                        <div className="flex space-x-3">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Layanan */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Layanan</h4>
                        <ul className="space-y-3">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Website Company Profile</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Landing Page</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Website Toko Online</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Redesign Website</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Maintenance & SEO</a></li>
                        </ul>
                    </div>

                    {/* Quick Links - Perusahaan */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Perusahaan</h4>
                        <ul className="space-y-3">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Beranda</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Harga Paket</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-primary transition-colors text-gray-400 hover:text-white">Portofolio</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors text-gray-400 hover:text-white">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors text-gray-400 hover:text-white">Kebijakan Privasi</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white text-lg font-bold mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span className="text-gray-400">Gedung Perkantoran Sudirman, Lt 12<br />Jakarta Selatan, 12190</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">+62 813-2488-7391</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-gray-400">halo@digilabs.co.id</span>
                            </li>
                        </ul>

                        <a href="https://wa.me/6281324887391" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors">
                            Chat via WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} <span className="text-white font-semibold">PT DIGILABS KREASI NUSANTARA</span>. All rights reserved.
                        </p>
                        <p className="text-sm text-gray-500">
                            Seluruh hak cipta dilindungi.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;