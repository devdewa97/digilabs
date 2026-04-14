import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        {
            name: 'Budi Santoso',
            role: 'Owner Kedai Kopi',
            image: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            text: 'Luar biasa! Website kafe saya jadi terlihat sangat profesional dan responsif. Pengunjung pun jadi lebih mudah melihat menu kami secara online.',
        },
        {
            name: 'Siti Rahmawati',
            role: 'Founder Startup Edukasi',
            image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
            text: 'Pengerjaannya sangat cepat dan rapi. Tim supportnya sangat responsif dan sabar menjawab semua pertanyaan saya selama proses pembuatan.',
        },
        {
            name: 'Andi Pratama',
            role: 'Direktur PT Cahaya Abadi',
            image: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
            text: 'Company profile yang dibuat sangat elegan dan mencerminkan citra perusahaan kami dengan sempurna. Investasi yang sangat layak!',
        }
    ];

    return (
        <section className="py-24 bg-blue-50 relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Testimoni</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Apa Kata Klien Kami?</h3>
                    <p className="text-lg text-gray-600">
                        Kami bangga dapat membantu berbagai bisnis mencapai target digital mereka.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-blue-50 opacity-50" />

                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-600 mb-8 italic relative z-10 text-lg">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-14 h-14 rounded-full border-2 border-white shadow-md object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
