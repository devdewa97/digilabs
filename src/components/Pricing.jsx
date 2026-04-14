import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
    const plans = [
        {
            name: 'Starter Website',
            price: 'Rp699.000',
            priceNote: 'Perpanjang Rp400.000/tahun',
            description: 'Solusi terjangkau untuk bisnis pemula dan personal.',
            features: [
                'Free Domain .com',
                '3 Halaman Website',
                'Tanpa Akses Hosting',
                'Desain Profesional',
                'Mobile Friendly',
                'Pengerjaan 3 – 5 Hari'
            ],
            popular: false,
            buttonText: 'Pilih Paket Starter',
            greeting: 'Halo kak 👋 saya tertarik dengan Paket Starter Website. Boleh minta info lebih lanjut terkait detail layanan dan proses pengerjaannya? Terima kasih 🙏',
        },
        {
            name: 'Business Website',
            price: 'Rp2.499.000',
            priceNote: 'Perpanjang Rp600.000/tahun',
            description: 'Pilihan ideal untuk perusahaan yang ingin tampil profesional.',
            features: [
                'Custom Design',
                'Lebih Banyak Halaman (Up to 10)',
                'SEO Friendly',
                'Mobile Responsive',
                'Full Akses Hosting & CPanel',
                'Support Update 1 Bulan',
                'Pengerjaan 7 - 14 Hari'
            ],
            popular: true,
            buttonText: 'Pilih Paket Business',
            greeting: 'Halo kak 👋 saya tertarik dengan Paket Business Website. Saya ingin konsultasi lebih lanjut mengenai fitur, harga, dan timeline pengerjaannya. Terima kasih 🙏',
        },
        {
            name: 'Custom Website',
            price: 'Hubungi Kami',
            priceNote: '',
            description: 'Sistem kompleks seperti toko online atau platform khusus.',
            features: [
                'Fully Custom Website',
                'Unlimited Pages',
                'Custom Features (Web App)',
                'Scalable for Business',
                'Consultation Included',
                'Premium Support',
                'Advanced SEO Setup'
            ],
            popular: false,
            buttonText: 'Konsultasi Sekarang',
            greeting: 'Halo kak 👋 saya ingin konsultasi untuk pembuatan Custom Website sesuai kebutuhan saya. Bisa dibantu untuk diskusi lebih lanjut ya? Terima kasih 🙏',
        }
    ];

    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Harga Paket</h2>
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Investasi Terbaik Untuk Digitalisasi Bisnis</h3>
                    <p className="text-lg text-gray-600">
                        Pilih paket yang sesuai dengan kebutuhan dan skala bisnis Anda. <br className="hidden sm:block" />
                        Harga terjangkau dengan kualitas profesional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative rounded-3xl p-8 bg-white border ${plan.popular ? 'border-primary ring-2 ring-primary shadow-xl shadow-blue-100' : 'border-gray-200 shadow-sm hover:shadow-lg'} transition-shadow duration-300 flex flex-col h-full`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                                        Paling Diminati
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                                <p className="text-gray-500 text-sm h-10">{plan.description}</p>
                                <div className="mt-4 text-3xl font-extrabold text-gray-900">
                                    {plan.price}
                                </div>
                                {plan.priceNote && (
                                    <p className="text-sm text-gray-500 mt-1">
                                        {plan.priceNote}
                                    </p>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-start">
                                        <div className="shrink-0 mt-0.5">
                                            <Check className="h-5 w-5 text-primary" />
                                        </div>
                                        <p className="ml-3 text-base text-gray-600">{feature}</p>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/6281324887391?text=${encodeURIComponent(plan.greeting)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3.5 px-4 rounded-xl font-semibold transition-all duration-200 block text-center no-underline ${plan.popular
                                        ? 'bg-primary text-white hover:bg-blue-700 shadow-md hover:shadow-lg'
                                        : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                    }`}
                            >
                                {plan.buttonText}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
