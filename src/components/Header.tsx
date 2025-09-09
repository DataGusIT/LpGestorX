'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Link, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const menuVariants: Variants = {
    hidden: {
        opacity: 0,
        transition: { duration: 0.3, ease: 'easeOut' },
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: 'easeIn' },
    },
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Limpeza do efeito ao desmontar o componente
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenuOpen]);

    return (
        // MUDANÇA 1: Usamos um Fragmento <> para retornar múltiplos elementos
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="site-header"
            >
                <div className="header-container">
                    <Link href="#" className="header-logo">
                        <div className="header-logo-icon-wrapper">
                            <Image
                                src="/images/Logo.png"
                                alt="GestorX Logo Icon"
                                width={40}
                                height={40}
                            />
                        </div>
                        <h1 className="gradient-text-blue">GestorX</h1>
                    </Link>

                    <nav className="header-nav-desktop">
                        <Link href="#recursos">Recursos <span className="nav-link-underline"></span></Link>
                        <Link href="#vantagens">Vantagens <span className="nav-link-underline"></span></Link>
                        <Link href="#faq">Dúvida <span className="nav-link-underline"></span></Link>
                        <Link href="#download">Download <span className="nav-link-underline"></span></Link>
                    </nav>

                    {/* 
                          AS DUAS LINHAS ABAIXO FORAM REMOVIDAS:
                          <a href="#" style={{...}}>Login</a>
                          <a href="#" className="btn-header-cta" style={{...}}>Começar Agora</a>
                        */}

                    <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.header>

            {/* MUDANÇA 2: O menu agora está FORA (é um irmão) do <motion.header> */}
            {isMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className="mobile-menu"
                >
                    <div className="mobile-menu-content">
                        <Link href="#recursos">Recursos</Link>
                        <Link href="#vantagens">Vantagens</Link>
                        <Link href="#faq">Dúvida</Link>
                        <Link href="#download">Download</Link>
                        {/* 
                          AS DUAS LINHAS ABAIXO FORAM REMOVIDAS:
                          <Link href="#" style={{...}}>Login</Link>
                          <Link href="#" className="btn-header-cta" style={{...}}>Começar Agora</Link>
                        */}
                    </div>
                </motion.div>
            )}
        </>
    );
}