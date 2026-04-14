import React from 'react';
import { LayoutTemplate, Smartphone, LineChart, Zap, HeadphonesIcon, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <LayoutTemplate className="h-6 w-6 text-primary" />,
        title: 'Desain Modern & Profesional',
        description: 'Tampilan website elegan dan sesuai dengan identitas brand bisnis Anda, memberikan kesan profesional kepada calon pelanggan.',
    },
    {
        icon: <Smartphone className="h-6 w-6 text-primary" />,
        title: 'Mobile Friendly',
        description: 'Website dioptimalkan untuk tampil sempurna di semua perangkat, memberikan pengalaman pengguna yang unggul di PC, tablet, maupun smartphone.',
    },
    {
        icon: <LineChart className="h-6 w-6 text-primary" />,
        title: 'SEO Friendly Structure',
        description: 'Struktur kode dan konten dirancang agar mudah dikenali oleh mesin pencari seperti Google, membantu website Anda lebih mudah ditemukan.',
    },
    {
        icon: <Zap className="h-6 w-6 text-primary" />,
        title: 'Fast Loading Website',
        description: 'Performa tinggi dan waktu muat super cepat untuk mencegah pengunjung meninggalkan website karena loading yang lambat.',
    },
    {
        icon: <HeadphonesIcon className="h-6 w-6 text-primary" />,
        title: 'Support Konsultasi',
        description: 'Dukungan penuh dari tim ahli kami. Konsultasikan kebutuhan website Anda kapan saja untuk hasil yang paling maksimal.',
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: 'Cocok Untuk Bisnis & UMKM',
        description: 'Solusi digital tepat guna untuk berbagai skala bisnis, membantu UMKM dan korporat go digital dengan mudah.',
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Keunggulan Kami</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Mengapa Memilih Layanan Kami?</h3>
                    <p className="text-lg text-gray-600">
                        Kami tidak hanya membuat website, tapi membangun aset digital yang membantu pertumbuhan bisnis Anda dengan teknologi terkini.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-100/50 rounded-xl flex items-center justify-center mb-6 border border-blue-100 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                                {React.cloneElement(service.icon, { className: 'h-6 w-6 text-primary group-hover:text-white transition-colors duration-300' })}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
