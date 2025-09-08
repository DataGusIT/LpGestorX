'use client';

import { DollarSign, Package, Users, BarChart, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateInView from './AnimateInView';

const features = [
    { icon: <DollarSign size={32} className="text-emerald-400" />, title: 'Módulo Financeiro', description: 'Controle total de contas a pagar, receber, fluxo de caixa e relatórios precisos.', accent: 'accent-emerald', stats: '98% Precisão' },
    { icon: <Package size={32} className="text-blue-400" />, title: 'Gestão de Estoque', description: 'Otimize suas operações com controle de inventário inteligente e automatizado.', accent: 'accent-blue', stats: '50% Mais Eficiente' },
    { icon: <Users size={32} className="text-purple-400" />, title: 'CRM Integrado', description: 'Gerencie o relacionamento com seus clientes desde o primeiro contato até o pós-venda.', accent: 'accent-purple', stats: '3x Mais Vendas' },
    { icon: <BarChart size={32} className="text-amber-400" />, title: 'Business Intelligence', description: 'Tome decisões estratégicas baseadas em dados com painéis visuais interativos.', accent: 'accent-amber', stats: 'Insights em Tempo Real' },
    { icon: <TrendingUp size={32} className="text-pink-400" />, title: 'Analytics Avançado', description: 'IA para previsões de vendas, detecção de padrões e otimização de processos.', accent: 'accent-pink', stats: 'IA Integrada' },
    { icon: <Shield size={32} className="text-cyan-400" />, title: 'Segurança Avançada', description: 'Proteção multicamada com criptografia ponta a ponta e auditoria completa.', accent: 'accent-cyan', stats: 'ISO 27001' },
];

export default function Features() {
    return (
        <section className="features-section">
            <div className="relative container">
                <div style={{ marginBottom: '5rem' }}>
                    <AnimateInView className="benefits-header">
                        <div className="benefits-badge">
                            <BarChart size={16} className="text-blue-400" />
                            <span>Recursos Principais</span>
                        </div>
                        <h2 className="features-title cta-title">
                            <span className="gradient-text-white">Tudo que você precisa</span>
                            <br />
                            <span className="gradient-text-colored">em um só lugar</span>
                        </h2>
                        <p className="benefits-subtitle">
                            Funcionalidades robustas e inteligentes para automatizar e otimizar cada setor da sua empresa.
                        </p>
                    </AnimateInView>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <AnimateInView key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="feature-card"
                            >
                                <div className={`benefit-card-glow ${feature.accent}`}></div>
                                <div className="feature-card-content">
                                    <div className="benefit-card-icon">{feature.icon}</div>
                                    <div className="feature-card-badge"><span>{feature.stats}</span></div>
                                    <h3 className="feature-card-title">{feature.title}</h3>
                                    <p className="feature-card-description">{feature.description}</p>
                                    <a href="#" className="feature-card-link">
                                        Saiba mais
                                        <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimateInView>
                    ))}
                </div>

                <AnimateInView className="text-center" delay={0.8}>
                    <div className="integration-card">
                        <h3 className="benefit-card-title" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)', backgroundClip: 'text', color: 'transparent', marginBottom: '1rem' }}>
                            Integração Completa
                        </h3>
                        <p className="benefits-subtitle" style={{ marginTop: 0, marginBottom: '1.5rem', fontSize: '1.125rem' }}>
                            Todos os módulos trabalham em perfeita harmonia para uma visão 360° do seu negócio.
                        </p>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}