import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioAll = () => {
    const projects = [
        {
            id: 'AI SaaS Product',
            title: 'Vokalita Generate Voice ',
            category: 'AI SaaS Product',
            description: 'Vokalita adalah platform AI Voice Over yang menggunakan bank suara manusia untuk menghasilkan audio seperti manusia asli.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-2.jpg',
        },
        {
            id: 'Website Arlindo Trans',
            title: 'Website Arlindo Trans',
            category: 'Company Profile',
            description: 'Katalog online untuk kedai kopi lokal dengan fitur pemesanan dan menu digital responsif.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-1.jpg?w=800&q=80',
        },
        {
            id: 'Landingpage Ebook',
            title: 'LandingPage Promosi Ebook ',
            category: 'LandingPage',
            description: 'Landing page promosi yang fokus menarik perhatian dan mendorong pengunjung langsung melakukan konversi.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-3.jpg',
        },
        {
            id: 'Website Cat Cafe',
            title: 'Website Cat Cafe Arlindo',
            category: 'Company Profile',
            description: 'Cat Cafe Arlindo adalah tempat nongkrong unik yang menggabungkan suasana kafe nyaman dengan kehadiran kucing-kucing lucu dan menggemaskan.',
            image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1776394094/Digilabs_Kreasi_Nusantara_4_d6mv1z.jpg',
        },
        {
            id: 'nusadaya academy',
            title: 'Website Nusadaya Academy',
            category: 'Company Profile',
            description: 'Nusadaya Academy adalah institusi pendidikan berbasis industri yang berfokus pada pengembangan sumber daya manusia unggul di bidang pariwisata dan perhotelan.',
            image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1776417500/Digilabs_Kreasi_Nusantara_5_ywri8u.jpg',
        },
        {
            id: 'restoran-sedap-mantap',
            title: 'Restoran Sedap Mantap',
            category: 'UMKM',
            description: 'Website restoran dengan menu digital dan sistem reservasi meja online.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
        },
        {
            id: 'travel-eksplorasi',
            title: 'Travel Eksplorasi',
            category: 'Company Profile',
            description: 'Website agensi perjalanan dengan sistem pemesanan paket wisata dan blog travel.',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
        },
        {
            id: 'boutique-fashion-hijab',
            title: 'Boutique Fashion Hijab',
            category: 'E-Commerce',
            description: 'Toko online fashion hijab dengan sistem inventori dan pembayaran yang lengkap.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
        },
        {
            id: 'startup-digital-agency',
            title: 'Startup Digital Agency',
            category: 'Landing Page',
            description: 'Landing page profesional untuk agensi digital dengan fitur portfolio dan pricing.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Kembali
                        </Link>
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://medivacare.com/wp-content/uploads/2026/04/Logo-Digilabs-Kreasi-Nusantara.png"
                                alt="PT DigiLabs Kreasi Nusantara"
                                className="h-10 w-auto"
                            />
                        </Link>
                        <div className="w-20"></div>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="py-16 bg-linear-to-b from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Karya Terbaik Kami</h1>
                        <p className="text-lg text-gray-600">
                            Berikut adalah portofolio lengkap proyek website yang telah berhasil kami buat untuk membantu berbagai jenis bisnis.
                        </p>
                    </div>
                </div>
            </div>

            {/* Portfolio Grid */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-60 overflow-hidden bg-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <Link
                                            to={`/portfolio/${project.id}`}
                                            className="bg-white text-gray-900 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-primary hover:text-white"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full">
                                            {project.category}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                                        {project.description}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <Link
                                            to={`/portfolio/${project.id}`}
                                            className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Preview
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Butuh website seperti ini?</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Konsultasikan kebutuhan website Anda dengan tim kami sekarang.
                    </p>
                    <Link
                        to="/#contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PortfolioAll;
