import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag, Image, Archive } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioDetail = () => {
    const { id } = useParams();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            id: 'educare-platform',
            title: 'EduCare Platform',
            category: 'Company Profile',
            description: 'Website profil perusahaan untuk institusi pendidikan dengan fitur pendaftaran online dan blog informasi.',
            fullDescription: 'EduCare Platform adalah solution komprehensif untuk institusi pendidikan yang membutuhkan presence online profesional. Website ini dilengkapi dengan sistem pendaftaran online yang streamline, blog untuk berbagi informasi, dan dashboard admin yang mudah digunakan.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80',
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
            ],
            features: ['Pendaftaran Online', 'Blog & Articles', 'Dashboard Admin', 'Responsive Design', 'SEO Optimized'],
            client: 'EduCare Indonesia',
            year: '2024',
            url: 'https://educare-indonesia.com',
            status: 'Domain Tidak Aktif'
        },
        {
            id: 'kopi-kenangan-senja',
            title: 'Kopi Kenangan Senja',
            category: 'UMKM',
            description: 'Katalog online untuk kedai kopi lokal dengan fitur pemesanan dan menu digital responsif.',
            fullDescription: 'Platform katalog online yang elegan untuk kedai kopi Kopi Kenangan Senja. Dilengkapi dengan menu digital yang mudah diupdate, sistem pemesanan, dan desain yang menarik.',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
                'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80',
                'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1200&q=80'
            ],
            features: ['Menu Digital', 'Sistem Pemesanan', 'Foto Galeri', 'Sistem Reservasi Meja', 'Responsive Design'],
            client: 'Kopi Kenangan Senja',
            year: '2024',
            url: 'https://kopikenangan-senja.id',
            status: 'Aktif'
        },
        {
            id: 'saas-analytics-dashboard',
            title: 'SaaS Analytics Dashboard',
            category: 'Landing Page',
            description: 'Landing page modern dengan konversi tinggi untuk aplikasi perangkat lunak analitik bisnis.',
            fullDescription: 'Landing page high-converting untuk software analytics bisnis. Didesain dengan fokus pada konversi dan user experience yang optimal.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
                'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
                'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80'
            ],
            features: ['Hero Section', 'Feature Showcase', 'Pricing Table', 'Testimonials', 'CTA Section'],
            client: 'TechCorp Analytics',
            year: '2024',
            url: 'https://techcorp-analytics.com',
            status: 'Aktif'
        },
        {
            id: 'toko-sepatu-maju',
            title: 'Toko Sepatu Maju',
            category: 'E-Commerce',
            description: 'Website toko online untuk penjualan sepatu dengan sistem keranjang belanja dan pembayaran.',
            fullDescription: 'Platform e-commerce lengkap untuk toko sepatu dengan fitur keranjang belanja, checkout, integrasi payment gateway, dan sistem inventori otomatis.',
            image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80',
                'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1200&q=80',
                'https://images.unsplash.com/photo-1491553895911-0055uj?w=1200&q=80'
            ],
            features: ['Keranjang Belanja', 'Checkout', 'Payment Gateway', 'Inventory Management', 'Responsive Design'],
            client: 'Toko Sepatu Maju',
            year: '2024',
            url: 'https://tokosepatumaju.com',
            status: 'Aktif'
        },
        {
            id: 'klinik-sehat-sejahtera',
            title: 'Klinik Sehat Sejahtera',
            category: 'Company Profile',
            description: 'Website profil klinik dengan sistem appointment online dan informasi layanan kesehatan.',
            fullDescription: 'Website company profile untuk klinik dengan fitur appointment online, informasi dokter, layanan kesehatan, dan blog kesehatan.',
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
                'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
                'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=80'
            ],
            features: ['Appointment Online', 'Info Dokter', 'Layanan Kesehatan', 'Blog Kesehatan', 'Responsive Design'],
            client: 'Klinik Sehat Sejahtera',
            year: '2023',
            url: 'https://kliniksehatsejahtera.com',
            status: 'Aktif'
        },
        {
            id: 'restoran-sedap-mantap',
            title: 'Restoran Sedap Mantap',
            category: 'UMKM',
            description: 'Website restoran dengan menu digital dan sistem reservasi meja online.',
            fullDescription: 'Platform digital untuk restoran dengan menu digital interaktif, sistem reservasi meja, dan fitur order delivery.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
                'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
            ],
            features: ['Menu Digital', 'Reservasi Meja', 'Order Delivery', 'Gallery', 'Responsive Design'],
            client: 'Restoran Sedap Mantap',
            year: '2024',
            url: 'https://sedapmantap.id',
            status: 'Aktif'
        }
    ];

    // Helper function to check if domain is active
    const isActive = (status) => status === 'Aktif';

    // Find the project by ID, or fallback to first project for demo
    const project = projects.find(p => p.id === id) || projects[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <a href="#/" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Kembali
                        </a>
                        <a href="#/" className="flex items-center">
                            <img
                                src="https://medivacare.com/wp-content/uploads/2026/04/Logo-Digilabs-Kreasi-Nusantara.png"
                                alt="PT DigiLabs Kreasi Nusantara"
                                className="h-10 w-auto"
                            />
                        </a>
                        <div className="w-20"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Image */}
            <div className="relative h-96 lg:h-125 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className={`inline-block px-4 py-1 text-sm font-medium rounded-full mb-4 ${isActive(project.status) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                                {project.category}
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl text-gray-200 max-w-2xl">
                                {project.description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Tentang Project</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {project.fullDescription}
                            </p>

                            <h3 className="text-xl font-bold text-gray-900 mb-4">Fitur Utama</h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-gray-600">
                                        <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Screenshots Section */}
                            {project.screenshots && project.screenshots.length > 0 && (
                                <div className="mt-10 mb-12">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Tampilan Website</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {project.screenshots.map((screenshot, index) => (
                                            <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                                                <img
                                                    src={screenshot}
                                                    alt={`Tampilan ${index + 1}`}
                                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                    <Image className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-4">
                                {isActive(project.status) ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Kunjungi Website
                                    </a>
                                ) : (
                                    <div className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-500 font-medium rounded-full cursor-not-allowed">
                                        <Archive className="w-5 h-5 mr-2" />
                                        Domain Tidak Aktif
                                    </div>
                                )}
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                                >
                                    Hubungi Kami
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-gray-50 rounded-2xl p-6"
                        >
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Detail Project</h3>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-600">
                                    <Calendar className="w-5 h-5 mr-3 text-primary" />
                                    <div>
                                        <p className="text-sm text-gray-500">Tahun</p>
                                        <p className="font-medium text-gray-900">{project.year}</p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <Tag className="w-5 h-5 mr-3 text-primary" />
                                    <div>
                                        <p className="text-sm text-gray-500">Kategori</p>
                                        <p className="font-medium text-gray-900">{project.category}</p>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-600">
                                    <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center ${isActive(project.status) ? 'bg-green-100' : 'bg-gray-200'}`}>
                                        <span className={`w-2 h-2 rounded-full ${isActive(project.status) ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Status</p>
                                        <p className={`font-medium ${isActive(project.status) ? 'text-green-600' : 'text-gray-500'}`}>
                                            {project.status}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-6 border-gray-200" />

                            <h4 className="text-md font-bold text-gray-900 mb-4">Client</h4>
                            <p className="text-gray-600">{project.client}</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Related Projects */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Lainnya</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.filter(p => p.id !== id).slice(0, 3).map((relatedProject, index) => (
                            <Link
                                key={index}
                                to={`/portfolio/${relatedProject.id}`}
                                className="group rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className="relative h-48 overflow-hidden bg-gray-100">
                                    <img
                                        src={relatedProject.image}
                                        alt={relatedProject.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6">
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-medium rounded-full mb-2">
                                        {relatedProject.category}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                                        {relatedProject.title}
                                    </h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;