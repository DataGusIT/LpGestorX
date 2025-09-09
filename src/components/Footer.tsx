'use client';

import { motion } from 'framer-motion';
// A CORREÇÃO ESTÁ AQUI: Importamos 'Image' como 'ImageIcon' para evitar o conflito.
import { Github, Twitter, Linkedin, Zap, Heart, Image as ImageIcon } from 'lucide-react';
// Agora, o componente 'Image' do Next.js pode ser importado sem problemas.
import Image from 'next/image';
import Link from 'next/link';

// --- DADOS ATUALIZADOS ---

const footerLinksConfig = {
    navegacao: [
        { name: 'Funcionalidades', href: '/#features' },
        { name: 'Vantagens', href: '/#benefits' },
        { name: 'Galeria', href: '/#gallery' },
        { name: 'Dúvidas', href: '/#faq' },
    ],
    projeto: [
        { name: 'Documentação', href: '#' },
        { name: 'Notas de Lançamento', href: '/#releases' },
        { name: 'Status', href: '#' },
    ],
    empresa: [
        { name: 'Sobre', href: '#' },
        { name: 'Contato', href: '#' },
    ],
    comunidade: [
        { name: 'GitHub', href: '#' },
        { name: 'Reportar um Bug', href: '#' },
        { name: 'Sugerir um Recurso', href: '#' },
    ],
};

const socialLinksConfig = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

// --- ANIMAÇÕES (Mantidas como estão) ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

// --- SUBCOMPONENTES (Com textos atualizados) ---

const FooterBrand = () => (
    <motion.div variants={itemVariants} className="footer-brand">
        <Link href="/" className="flex items-center gap-3 mb-6 text-white no-underline">
            <div className="header-logo-icon-wrapper">
                <Image src="/images/Logo.png" alt="GestorX Logo Icon" width={24} height={24} />
            </div>
            {/* Adicionamos a classe 'gradient-text-blue' */}
            <h3 className="text-xl font-bold font-raleway gradient-text-blue">GestorX</h3>
        </Link>
        <p className="max-w-xs pr-4 text-gray-400">
            Um sistema de gestão completo, open source e 100% offline para o seu negócio.
        </p>
        <div className="mt-6 footer-newsletter-box">
            <h4 className="mb-3 font-semibold text-white">Receba as novidades do projeto</h4>
            <form className="footer-newsletter-form">
                <input type="email" placeholder="seu@email.com" aria-label="Seu email" />
                <button type="submit">Inscrever</button>
            </form>
        </div>
    </motion.div>
);

const FooterLinks = () => (
    <div className="footer-links-grid">
        {Object.entries(footerLinksConfig).map(([category, links]) => (
            <motion.div variants={itemVariants} key={category} className="footer-links-column">
                <h4 className="font-semibold text-white capitalize mb-4">{category}</h4>
                <ul>
                    {links.map((link) => (
                        <li key={link.name}>
                            {/* A ALTERAÇÃO ESTÁ NESTE LINK ABAIXO */}
                            <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                                {link.name}
                                {/* Adicione este span para criar a linha */}
                                <span className="footer-link-underline"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </motion.div>
        ))}
    </div>
);

const FooterBottom = () => (
    <div className="footer-bottom">
        <div className="footer-copyright">
            <span>&copy; {new Date().getFullYear()} GestorX. Todos os direitos reservados.</span>
        </div>
        <div className="footer-social-links">
            {socialLinksConfig.map((social) => {
                const Icon = social.icon;
                return (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        title={social.label}
                        aria-label={social.label}
                        className="social-link"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Icon size={20} />
                    </motion.a>
                );
            })}
        </div>
    </div>
);
// Substitua o subcomponente FooterLegal por este:
const FooterLegal = () => (
    <div className="footer-legal">
        <div className="footer-legal-links">
            {/* Links atualizados para as novas páginas */}
            <Link href="/termos">Termos de Uso</Link>
            <span className="select-none">•</span>
            <Link href="/privacidade">Política de Privacidade</Link>
            <span className="select-none">•</span>
            {/* O link para a licença pode levar para a página de Termos ou direto para o site da MIT */}
            <Link href="/termos">Licença MIT</Link>
        </div>
    </div>
);


// --- COMPONENTE PRINCIPAL (Inalterado) ---

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="relative container">
                <motion.div
                    className="footer-main"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="footer-grid">
                        <FooterBrand />
                        <FooterLinks />
                    </div>
                </motion.div>

                <FooterBottom />
                <FooterLegal />
            </div>
        </footer>
    );
}