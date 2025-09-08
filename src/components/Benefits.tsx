'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';
import AnimateInView from './AnimateInView';

const benefits = [
    {
        icon: <CheckCircle size={28} className="text-emerald-400" />,
        title: 'Open Source',
        description: 'Código aberto, sem custos de licença. Customize conforme suas necessidades.',
        accent: 'accent-emerald'
    },
    {
        icon: <Zap size={28} className="text-blue-400" />,
        title: 'Performance Superior',
        description: 'Arquitetura moderna que garante velocidade e confiabilidade.',
        accent: 'accent-blue'
    },
    {
        icon: <Shield size={28} className="text-purple-400" />,
        title: 'Segurança Empresarial',
        description: 'Proteção de dados com criptografia e controles de acesso avançados.',
        accent: 'accent-purple'
    },
    {
        icon: <Sparkles size={28} className="text-amber-400" />,
        title: 'Interface Intuitiva',
        description: 'Design moderno e experiência de usuário pensada para produtividade.',
        accent: 'accent-amber'
    },
];

export default function Benefits() {
    return (
        <section className="benefits-section">
            <div className="relative container mx-auto px-6">
                <AnimateInView className="benefits-header">
                    <div className="benefits-badge">
                        <Sparkles size={16} className="text-blue-400" />
                        <span>Por que escolher nosso ERP?</span>
                    </div>

                    <h2 className="benefits-title">
                        Vantagens que fazem a diferença
                    </h2>
                    <p className="benefits-subtitle">
                        Desenvolvido com as mais modernas tecnologias para oferecer uma experiência única de gestão empresarial.
                    </p>
                </AnimateInView>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <AnimateInView key={index} delay={index * 0.15}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="benefit-card"
                            >
                                <div className={`benefit-card-glow ${benefit.accent}`}></div>

                                <div className="benefit-card-content">
                                    <div className="benefit-card-icon">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="benefit-card-title">{benefit.title}</h3>
                                    <p className="benefit-card-description">{benefit.description}</p>
                                </div>
                            </motion.div>
                        </AnimateInView>
                    ))}
                </div>

                <AnimateInView className="stats-section" delay={0.6}>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)' }}>100%</h4>
                            <p>Código Aberto</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #34d399, #60a5fa)' }}>24/7</h4>
                            <p>Disponibilidade</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #a78bfa, #f472b6)' }}>∞</h4>
                            <p>Escalabilidade</p>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}