import React from 'react';
import { ArrowRight, CheckCircle2, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-linear-to-br from-blue-50 via-white to-white">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl opacity-50"></div>
            <div className="absolute top-40 left-0 -ml-20 w-72 h-72 rounded-full bg-blue-50 blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl text-center lg:text-left"
                    >
                        <div className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-100/50 text-blue-700 font-medium text-sm mb-10 border border-blue-200">
                            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
                            Layanan Pembuatan Website Terbaik
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight sm:leading-[1.9] mb-8 sm:mb-10">
                            Solusi Website Profesional untuk Meningkatkan Kredibilitas <span className="text-primary">Bisnis Anda</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 mb-10 sm:mb-12 leading-relaxed sm:leading-[2]">
                            Kami menghadirkan website profesional dengan desain modern, performa cepat, dan pengalaman pengguna yang optimal untuk meningkatkan kredibilitas serta pertumbuhan bisnis Anda.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                            <a
                                href="#pricing"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-white bg-gradient-to-r from-primary to-blue-500 hover:from-primary hover:to-blue-600 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 cursor-pointer"
                            >
                                Pesan Sekarang
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('portfolio');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-full text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-gray-100"
                            >
                                Lihat Portofolio
                            </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>3-5 Hari Selesai</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Free Domain .com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500" />
                                <span>Mobile Friendly</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:ml-10 hidden lg:block"
                    >
                        {/* Abstract mockup representation */}
                        <div className="relative rounded-2xl bg-white shadow-2xl p-2 border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-gray-50 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                                <MonitorSmartphone className="h-8 w-8 text-primary" />
                            </div>
                            <div className="rounded-xl overflow-hidden bg-gray-100 aspect-4/3 flex flex-col">
                                <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="mx-auto bg-gray-700 text-gray-300 text-xs px-24 py-1 rounded w-1/2 flex justify-center">
                                        yourwebsite.com
                                    </div>
                                </div>
                                <div className="flex-1 bg-white p-6 relative">
                                    <div className="w-1/3 h-6 bg-gray-200 rounded mb-4"></div>
                                    <div className="w-2/3 h-10 bg-blue-100 rounded-lg mb-4"></div>
                                    <div className="space-y-2 mb-6">
                                        <div className="w-full h-3 bg-gray-100 rounded"></div>
                                        <div className="w-full h-3 bg-gray-100 rounded"></div>
                                        <div className="w-4/5 h-3 bg-gray-100 rounded"></div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-24 bg-gray-100 rounded-lg"></div>
                                        <div className="h-24 bg-gray-100 rounded-lg"></div>
                                        <div className="h-24 bg-gray-100 rounded-lg"></div>
                                    </div>

                                    {/* Floating elements */}
                                    <div className="absolute top-1/2 left-0 -ml-8 bg-white p-3 rounded-xl shadow-lg border border-gray-100 animate-pulse">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                                <CheckCircle2 className="h-6 w-6 text-green-500" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-500">Status</div>
                                                <div className="text-sm font-bold text-gray-900">Live</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden">
                                            <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        {'★★★★★'}
                                    </div>
                                    <div className="text-xs font-medium text-gray-600">500+ Klien Puas</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
