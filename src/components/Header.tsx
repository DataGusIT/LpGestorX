'use client';

import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="site-header"
        >
            <div className="container mx-auto">
                <div className="header-container">
                    <a href="#" className="header-logo">
                        <div className="header-logo-icon-wrapper">
                            <Zap size={20} className="text-white" />
                        </div>
                        <h1>SeuERP</h1>
                    </a>

                    <nav className="header-nav-desktop">
                        <a href="#">Recursos <span className="nav-link-underline"></span></a>
                        <a href="#">Vantagens <span className="nav-link-underline"></span></a>
                        <a href="#">Preços <span className="nav-link-underline"></span></a>
                        <a href="#">Documentação <span className="nav-link-underline"></span></a>
                    </nav>

                    <div className="header-cta-desktop">
                        <a href="#" className="login-link">Login</a>
                        <a href="#" className="btn-header-cta">Começar Agora</a>
                    </div>

                    <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                <motion.div
                    initial={false}
                    animate={{ height: isMenuOpen ? 'auto' : 0 }}
                    className="mobile-menu"
                >
                    <div className="mobile-menu-content">
                        <a href="#">Recursos</a>
                        <a href="#">Vantagens</a>
                        <a href="#">Preços</a>
                        <a href="#">Documentação</a>
                        <a href="#" style={{ paddingTop: '1rem', marginTop: '1rem', borderTop: '1px solid #374151' }}>Login</a>
                        <a href="#" className="btn-header-cta" style={{ display: 'block', textAlign: 'center' }}>Começar Agora</a>
                    </div>
                </motion.div>
            </div>
        </motion.header>
    );
}