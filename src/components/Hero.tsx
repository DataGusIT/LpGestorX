// app/components/Hero.tsx

'use client';
import { Download, Link, /* outros ícones que você usa */ } from 'lucide-react';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-badge"
                >
                    <div className="hero-badge-dot"></div>
                    {/* Alterado: Reflete a tecnologia */}
                    <span>Sistema Desktop Open Source</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hero-title"
                >
                    {/* Alterado: Título mais direto e focado no benefício principal */}
                    <span className="gradient-text-white">A Gestão Completa do seu Negócio</span>
                    <br />
                    <span className="gradient-text-colored">100% Offline e Sob seu Controle</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-paragraph"
                >
                    {/* Alterado: Descreve os módulos reais do sistema */}
                    Um sistema ERP com Ponto de Venda (PDV), Controle de Estoque, Financeiro, Clientes e Fornecedores.
                    <span className="subtext">Seus dados ficam no seu computador. Sem mensalidades, sem nuvem.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="hero-buttons-container"
                >
                    <Link href="#download" className="btn btn-primary">
                        <span>Baixar Agora</span>
                        <Download size={20} />
                    </Link>

                    <Link href="https://github.com/DataGusIT/EstacaoDoces" className="btn btn-secondary">
                        <Play size={18} />
                        <span>Ver no GitHub</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}