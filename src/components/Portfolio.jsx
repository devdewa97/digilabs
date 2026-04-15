import React from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
    const projects = [
        {
            id: 'AI SaaS Product',
            title: 'Vokalita Generate Voice ',
            category: 'AI SaaS Product',
            description: 'Vokalita adalah platform AI Voice Over yang menggunakan bank suara manusia untuk menghasilkan audio seperti manusia.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-2.jpg',
        },
        {
            id: 'Website Arlindo Trans',
            title: 'Website Arlindo Trans',
            category: 'Company Profile',
            description: 'Arlindo Trans adalah layanan sewa bus pariwisata yang menghadirkan perjalanan nyaman, aman, dan berkesan untuk setiap momen spesial Anda.',
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
            id: 'toko-sepatu-maju',
            title: 'Toko Sepatu Maju',
            category: 'E-Commerce',
            description: 'Website toko online untuk penjualan sepatu dengan sistem keranjang belanja dan pembayaran.',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
        },
        {
            id: 'klinik-sehat-sejahtera',
            title: 'Klinik Sehat Sejahtera',
            category: 'Company Profile',
            description: 'Website profil klinik dengan sistem appointment online dan informasi layanan kesehatan.',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
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
        <section id="portfolio" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Portofolio Kami</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Hasil Karya Terbaik Kami</h3>
                    <p className="text-lg text-gray-600">
                        Berikut adalah beberapa proyek website yang telah berhasil kami buat untuk membantu berbagai jenis bisnis.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.slice(0, 6).map((project, index) => (
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

                <div className="text-center mt-12">
                    <Link
                        to="/karya-terbaik-kami"
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                    >
                        Lihat Semua Portofolio
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;