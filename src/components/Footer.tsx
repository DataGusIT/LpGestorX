// app/components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Zap, Heart } from 'lucide-react';

const footerLinks = {
    produto: [{ name: 'Recursos', href: '#' }, { name: 'Preços', href: '#' }, { name: 'Roadmap', href: '#' }],
    desenvolvedores: [{ name: 'Documentação', href: '#' }, { name: 'API Reference', href: '#' }, { name: 'Status', href: '#' }],
    empresa: [{ name: 'Sobre', href: '#' }, { name: 'Blog', href: '#' }, { name: 'Contato', href: '#' }],
    comunidade: [{ name: 'GitHub', href: '#' }, { name: 'Discord', href: '#' }, { name: 'Contribuir', href: '#' }],
};

const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="relative container">
                <div className="footer-main">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                                <div className="header-logo-icon-wrapper">
                                    <Zap size={24} className="text-white" />
                                </div>
                                <h3 className="header-logo">SeuERP</h3>
                            </div>
                            <p>O sistema ERP open source mais moderno e poderoso do mercado.</p>
                            <div className="footer-newsletter-box">
                                <h4>Receba as últimas atualizações</h4>
                                <div className="footer-newsletter-form">
                                    <input type="email" placeholder="seu@email.com" />
                                    <button>Inscrever</button>
                                </div>
                            </div>
                        </div>
                        <div className="footer-links-grid">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category} className="footer-links-column">
                                    <h4>{category}</h4>
                                    <ul>{links.map((link) => (<li key={link.name}><a href={link.href}>{link.name}</a></li>))}</ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* A SEÇÃO ABAIXO FOI REESTRUTURADA */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <span>&copy; {new Date().getFullYear()} SeuERP. Feito com</span>
                        <Heart size={16} className="text-red-400" />
                        <span>pela comunidade.</span>
                    </div>
                    <div className="footer-social-links">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} title={social.label} className="social-link">{social.icon}</a>
                        ))}
                    </div>
                </div>
                <div className="footer-legal">
                    <div className="footer-legal-links">
                        <a href="#">Termos de Uso</a>
                        <span>•</span>
                        <a href="#">Política de Privacidade</a>
                        <span>•</span>
                        <a href="#">Licença MIT</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}