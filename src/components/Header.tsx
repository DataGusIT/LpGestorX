'use client';

import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link'; // <-- CORREÇÃO: Importado de 'next/link' para navegação
import { Menu, X } from 'lucide-react'; // <-- CORREÇÃO: 'Link' foi removido desta linha
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

    // Função para fechar o menu ao clicar em um link
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="site-header"
            >
                <div className="header-container">
                    {/* Agora este Link funcionará corretamente */}
                    <Link href="/" className="header-logo" onClick={handleLinkClick}>
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

                    {/* E estes também */}
                    <nav className="header-nav-desktop">
                        <Link href="#recursos">Recursos <span className="nav-link-underline"></span></Link>
                        <Link href="#vantagens">Vantagens <span className="nav-link-underline"></span></Link>
                        <Link href="#faq">Dúvidas <span className="nav-link-underline"></span></Link>
                        <Link href="#download">Download <span className="nav-link-underline"></span></Link>
                    </nav>

                    <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </motion.header>

            {isMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className="mobile-menu"
                >
                    <div className="mobile-menu-content">
                        {/* Adicionei 'onClick' aqui para o menu fechar no mobile */}
                        <Link href="#recursos" onClick={handleLinkClick}>Recursos</Link>
                        <Link href="#vantagens" onClick={handleLinkClick}>Vantagens</Link>
                        <Link href="#faq" onClick={handleLinkClick}>Dúvidas</Link>
                        <Link href="#download" onClick={handleLinkClick}>Download</Link>
                    </div>
                </motion.div>
            )}
        </>
    );
}