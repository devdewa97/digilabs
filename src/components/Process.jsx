import React from 'react';
import { MessageSquare, PenTool, Code, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            icon: <MessageSquare className="w-8 h-8 text-primary" />,
            title: 'Konsultasi Kebutuhan',
            description: 'Diskusi awal untuk memahami visi, tujuan, dan kebutuhan spesifik bisnis Anda.',
        },
        {
            icon: <PenTool className="w-8 h-8 text-primary" />,
            title: 'Desain Website',
            description: 'Pembuatan mockup dan desain antarmuka modern yang merepresentasikan brand Anda.',
        },
        {
            icon: <Code className="w-8 h-8 text-primary" />,
            title: 'Development',
            description: 'Proses coding (pengembangan) menggunakan teknologi terdepan untuk performa tinggi.',
        },
        {
            icon: <Rocket className="w-8 h-8 text-primary" />,
            title: 'Website Siap Digunakan',
            description: 'Testing, revisi, dan peluncuran website ke publik. Anda siap menerima pelanggan baru!',
        }
    ];

    return (
        <section className="py-24 bg-linear-to-b from-white to-gray-50/50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-primary font-semibold tracking-wide uppercase text-sm mb-3 bg-linear-to-r from-primary to-blue-600 bg-clip-text"
                    >
                        Cara Kerja
                    </motion.h2>
                    <motion.h3 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight"
                    >
                        Proses Pembuatan Yang Mudah
                    </motion.h3>
                    <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                    >
                        Kami mengutamakan transparansi dan efisiensi di setiap tahap pengembangan website Anda.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Enhanced connecting line for desktop */}
                    <div className="hidden xl:block absolute top-32 left-16 right-16 h-1 bg-linear-to-r from-primary/20 via-transparent to-primary/20 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative"
                            >
                                {/* Modern Card */}
                                <div className="relative bg-white/80 backdrop-blur-xl shadow-2xl border border-white/50 hover:border-primary/30 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-3xl hover:bg-white/95 lg:hover:scale-[1.02] focus-within:ring-4 ring-primary/20 focus-within:shadow-3xl">
                                    
                                    {/* Card Header with Icon & Number */}
                                    <div className="relative mb-8">
                                        <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-linear-to-br from-primary/10 to-blue-500/10 backdrop-blur-sm border-2 border-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                            <div className="absolute inset-1 border-2 rounded-xl border-white/50 shadow-inner"></div>
                                            <div className="relative z-10 text-primary group-hover:text-primary-dark transition-colors">
                                                {React.cloneElement(step.icon, { className: "w-10 h-10 md:w-12 md:h-12" })}
                                            </div>
                                        </div>

                                        {/* Step Number Badge */}
                                        <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-12 h-12 md:w-14 md:h-14 bg-linear-to-r from-primary to-blue-600 text-white font-bold flex items-center justify-center text-lg md:text-xl shadow-2xl border-4 border-white/80 rounded-2xl ring-4 ring-white/50 group-hover:scale-110 transition-all duration-300">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="text-center space-y-4">
                                        <h4 className="text-2xl md:text-2xl lg:text-xl xl:text-2xl font-bold text-gray-900 group-hover:text-gray-950 transition-colors mb-2 bg-linear-to-r from-gray-900 to-gray-800 bg-clip-text">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600 text-base md:text-sm lg:text-base leading-relaxed px-4 group-hover:text-gray-700 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
