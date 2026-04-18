import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = ({ forceWhite = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check if we're on home page
    const isHomePage = location.pathname === '/' || location.pathname === '#home';

    // Force white background for blog pages
    const isWhite = forceWhite || scrolled;

    const scrollToSection = (sectionId) => {
        if (isHomePage) {
            // If on home page, scroll directly
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If not on home page, navigate to home first then scroll
            window.location.href = '#' + sectionId;
        }
        setIsOpen(false);
    };

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        scrollToSection(sectionId);
    };

    const navLinks = [
        { name: 'Home', section: 'home' },
        { name: 'Services', section: 'services' },
        { name: 'Portfolio', href: '/karya-terbaik-kami', isRoute: true },
        { name: 'Blog', href: '/blog', isRoute: true },
        { name: 'Pricing', section: 'pricing' },
    ];

    const renderNavLink = (link) => {
        if (link.isRoute) {
            return (
                <Link key={link.name} to={link.href} className="text-gray-600 hover:text-primary transition-colors font-medium">
                    {link.name}
                </Link>
            );
        }
        return (
            <a
                key={link.name}
                href={isHomePage ? '#' + link.section : '/'}
                onClick={(e) => {
                    if (isHomePage) {
                        e.preventDefault();
                        scrollToSection(link.section);
                    }
                    // If not on home page, just navigate to home page (default behavior)
                }}
                className="text-gray-600 hover:text-primary transition-colors font-medium"
            >
                {link.name}
            </a>
        );
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isWhite ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-white py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://medivacare.com/wp-content/uploads/2026/04/Logo-Digilabs-Kreasi-Nusantara.png"
                                alt="PT Digilabs Kreasi Nusantara"
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => renderNavLink(link))}
                        <a href="https://wa.me/6281324887391" target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md">
                            Hubungi Kami
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {navLinks.map((link) => (
                            link.isRoute ? (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ) : (
                                <Link
                                    to="/"
                                    className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50 rounded-md"
                                    onClick={(e) => {
                                        if (!isHomePage) {
                                            // Navigate to home page - let the link work normally
                                        } else {
                                            e.preventDefault();
                                            scrollToSection(link.section);
                                        }
                                        setIsOpen(false);
                                    }}
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <a href="https://wa.me/6281324887391" target="_blank" rel="noopener noreferrer" className="block w-full mt-4 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors text-center">
                            Hubungi Kami
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
