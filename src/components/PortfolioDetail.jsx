import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
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
            features: ['Pendaftaran Online', 'Blog & Articles', 'Dashboard Admin', 'Responsive Design', 'SEO Optimized'],
            client: 'EduCare Indonesia',
            year: '2024',
            url: 'https://educare-indonesia.com'
        },
        {
            id: 'kopi-kenangan-senja',
            title: 'Kopi Kenangan Senja',
            category: 'UMKM',
            description: 'Katalog online untuk kedai kopi lokal dengan fitur pemesanan dan menu digital responsif.',
            fullDescription: 'Platform katalog online yang elegan untuk kedai kopi Kopi Kenangan Senja. Dilengkapi dengan menu digital yang mudah diupdate, sistem pemesanan, dan desain yang menarik.',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80',
            features: ['Menu Digital', 'Sistem Pemesanan', 'Foto Galeri', 'Sistem Reservasi Meja', 'Responsive Design'],
            client: 'Kopi Kenangan Senja',
            year: '2024',
            url: 'https://kopikenangan-senja.id'
        },
        {
            id: 'saas-analytics-dashboard',
            title: 'SaaS Analytics Dashboard',
            category: 'Landing Page',
            description: 'Landing page modern dengan konversi tinggi untuk aplikasi perangkat lunak analitik bisnis.',
            fullDescription: 'Landing page high-converting untuk software analytics bisnis. Didesain dengan fokus pada konversi dan user experience yang optimal.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
            features: ['Hero Section', 'Feature Showcase', 'Pricing Table', 'Testimonials', 'CTA Section'],
            client: 'TechCorp Analytics',
            year: '2024',
            url: 'https://techcorp-analytics.com'
        }
    ];

    // Find the project by ID, or fallback to first project for demo
    const project = projects.find(p => p.id === id) || projects[0];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <a href="/#portfolio" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Kembali
                        </a>
                        <a href="/#portfolio" className="flex items-center">
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
                            <span className="inline-block px-4 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
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

                            <div className="flex gap-4">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5 mr-2" />
                                    Kunjungi Website
                                </a>
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
                        {projects.filter(p => p.id !== id).slice(0, 2).map((relatedProject, index) => (
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