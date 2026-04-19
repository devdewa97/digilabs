import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, Tag, Image, Archive, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioDetail = () => {
    const { id } = useParams();

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const projects = [
        {
            id: 'AI SaaS Product',
            title: 'Vokalita Generate Voice ',
            category: 'AI SaaS Product',
            fullDescription: 'Vokalita adalah platform AI Voice Over berbasis web yang memungkinkan pengguna mengubah teks menjadi audio berkualitas tinggi dengan suara yang natural, ekspresif, dan terdengar seperti manusia asli.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-2.jpg',
            features: ['Text To Voice Generator', 'Karakter Vokal Beragam', 'Gaya Penyampaian', 'Proces Cepat & Praktis', 'Kualitas Audio Natural', 'Gratis Digunakan'],
            client: 'Personal Project',
            year: '2025',
            url: 'https://vokalita.digilabkreasi.my.id/',
            status: 'Aktif'
        },
        {
            id: 'Website Arlindo Trans',
            title: 'Website Arlindo Trans',
            category: 'Company Profile',
            fullDescription: 'Penyedia layanan sewa bus pariwisata terpercaya yang siap memenuhi kebutuhan perjalanan Anda dengan nyaman, aman, dan tepat waktu. Kami menghadirkan armada bus berkualitas dengan fasilitas lengkap serta didukung oleh tim profesional yang berpengalaman. Melayani berbagai kebutuhan perjalanan seperti wisata keluarga, study tour, perjalanan perusahaan, hingga event khusus, Arlindo Trans berkomitmen memberikan pengalaman perjalanan terbaik dengan pelayanan prima dan harga yang kompetitif.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-1.jpg',
            features: ['Responsive Design', 'SEO Friendly', 'Fast Loading', 'WA CTA Floating Button', 'Testimoni Slider'],
            client: 'PT ARLINDO MULTI JASA (ARLINDO TRANS)',
            year: '2025',
            url: 'https://arlindo-trans.vercel.app/',
            status: 'Aktif'
        },
        {
            id: 'Landingpage Ebook',
            title: 'LandingPage Promosi Ebook ',
            category: 'LandingPage',
            fullDescription: 'Landing page high-converting untuk software analytics bisnis. Didesain dengan fokus pada konversi dan user experience yang optimal.',
            image: 'https://medivacare.com/wp-content/uploads/2026/04/Digilabs-Kreasi-Nusantara-3.jpg',
            features: ['Fully Responsive Design', 'Direct To WhatsApp', 'Fast Loading', 'Fokus Pada Konversi', 'Design Modern & Profesional', 'Struktur Konten Jelas'],
            client: 'Klinik Medivacare Indonesia',
            year: '2024',
            url: 'https://medivacare.com/ebook/',
            status: 'Aktif'
        },
        {
            id: 'Website Cat Cafe',
            title: 'Website Cat Cafe',
            category: 'Company Profile',
            fullDescription: 'Cat Cafe Arlindo adalah tempat nongkrong unik yang menggabungkan suasana kafe yang nyaman dengan kehadiran kucing-kucing lucu dan menggemaskan, menciptakan pengalaman santai yang berbeda dan menyenangkan bagi para pengunjung. Website Cat Cafe Arlindo dirancang dengan tampilan modern, interaktif, dan user-friendly untuk memudahkan pengunjung dalam mengeksplorasi informasi serta melakukan reservasi secara online.',
            image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1776394094/Digilabs_Kreasi_Nusantara_4_d6mv1z.jpg',
            features: ['Responsive Design', 'Navigasi Lengkap', 'Animasi & Transisi Halus', 'Reservasi Online Terintegrasi', 'Desain Modern', 'Fitur Pendukung Lengkap', 'SEO Friendly'],
            client: 'Cat Cafe by Arlindo',
            year: '2024',
            url: 'https://catcafearlindo.com/',
            status: 'Aktif'
        },
        {
            id: 'nusadaya academy',
            title: 'Website Nusadaya Academy',
            category: 'Company Profile',
            fullDescription: 'Nusadaya Academy adalah institusi pendidikan berbasis industri di bidang pariwisata dan perhotelan yang berfokus mencetak lulusan siap kerja dan berdaya saing global. Website company profile ini menghadirkan informasi lengkap seputar program, fasilitas, dan pendaftaran dalam tampilan modern, cepat, dan responsif.',
            image: 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1776417500/Digilabs_Kreasi_Nusantara_5_ywri8u.jpg',
            features: ['Pendaftaran Online Terintegrasi WhatsApp', 'Floating WhatsApp Chat', 'Promo Popup Otomatis', 'Fast Loading', 'Animasi Halus & UX Premium', 'Desain Responsive', 'SEO Friendly', 'Multi-page Navigation'],
            client: 'Kampus Nusadaya Academy',
            year: '2026',
            url: 'https://nusday.vercel.app/',
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
        },
        {
            id: 'travel-eksplorasi',
            title: 'Travel Eksplorasi',
            category: 'Company Profile',
            description: 'Website agensi perjalanan dengan sistem pemesanan paket wisata dan blog travel.',
            fullDescription: 'Platform komprehensif untuk agensi perjalanan Travel Eksplorasi. Dilengkapi dengan sistem pemesanan paket wisata online, blog travel informatif, dan galeri foto destinasi.',
            image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80',
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80',
                'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80'
            ],
            features: ['Paket Wifi', 'Blog Travel', 'Galeri Destinasi', 'Sistem Pemesanan', 'Responsive Design'],
            client: 'Travel Eksplorasi',
            year: '2024',
            url: 'https://travel-eksplorasi.com',
            status: 'Aktif'
        },
        {
            id: 'boutique-fashion-hijab',
            title: 'Boutique Fashion Hijab',
            category: 'E-Commerce',
            description: 'Toko online fashion hijab dengan sistem inventori dan pembayaran yang lengkap.',
            fullDescription: 'Platform e-commerce profesional untuk Boutique Fashion Hijab. Dilengkapi dengan sistem inventori otomatis, keranjang belanja, checkout, dan integrasi payment gateway.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
                'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=1200&q=80',
                'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=1200&q=80'
            ],
            features: ['Katalog Produk', 'Keranjang Belanja', 'Checkout', 'Payment Gateway', 'Inventory Management'],
            client: 'Boutique Fashion Hijab',
            year: '2024',
            url: 'https://boutiquehijab.id',
            status: 'Aktif'
        },
        {
            id: 'startup-digital-agency',
            title: 'Startup Digital Agency',
            category: 'Landing Page',
            description: 'Landing page profesional untuk agensi digital dengan fitur portfolio dan pricing.',
            fullDescription: 'Landing page modern dan profesional untuk Startup Digital Agency. Didesain dengan fokus pada konversi tinggi, menampilkan portfolio proyek, pricing packages, dan form kontak.',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
            screenshots: [
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80',
                'https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1200&q=80',
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80'
            ],
            features: ['Hero Section', 'Portfolio Showcase', 'Pricing Table', 'Testimonials', 'Contact Form'],
            client: 'Startup Digital Agency',
            year: '2024',
            url: 'https://startup-digital.id',
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
                        <a href="/karya-terbaik-kami" className="flex items-center text-gray-600 hover:text-primary transition-colors">
                            <ArrowLeft className="w-5 h-5 mr-2" />
                            Kembali
                        </a>
                        <a href="/" className="flex items-center">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#021e5c]/80 via-[#021e5c]/40 to-transparent"></div>
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

                            <div className="flex flex-col sm:flex-row gap-4">
                                {isActive(project.status) ? (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5 mr-2" />
                                        Kunjungi Website
                                    </a>
                                ) : (
                                    <div className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-500 font-medium rounded-full cursor-not-allowed">
                                        <Archive className="w-5 h-5 mr-2" />
                                        Domain Tidak Aktif
                                    </div>
                                )}
                                <a
                                    href="https://wa.me/6281234567890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors"
                                >
                                    <Phone className="w-5 h-5 mr-2" />
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