'use client';

import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Users } from 'lucide-react';
import AnimateInView from './AnimateInView';

export default function CallToAction() {
    return (
        <section className="cta-section">
            <div className="relative container mx-auto px-6">
                <AnimateInView className="cta-header">
                    <div className="cta-badge">
                        <div className="hero-badge-dot"></div>
                        <span>Comece Gratuitamente</span>
                    </div>

                    <h2 className="cta-title">
                        <span className="gradient-text-white">Pronto para transformar</span>
                        <br />
                        <span className="gradient-text-colored">sua gestão?</span>
                    </h2>

                    <p className="cta-subtitle">
                        Junte-se à <span style={{ color: '#34d399', fontWeight: 500 }}>comunidade global</span> de empresas que já transformaram sua gestão com nosso ERP open source.
                    </p>

                    <div className="cta-stats-grid">
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)' }}>10K+</h4>
                            <p>Empresas Ativas</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #34d399, #60a5fa)' }}>99.9%</h4>
                            <p>Uptime</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #a78bfa, #f472b6)' }}>500+</h4>
                            <p>Contribuidores</p>
                        </div>
                    </div>

                    <div className="hero-buttons-container" style={{ marginBottom: '3rem' }}>
                        <a href="#" className="btn btn-cta-primary">
                            <Download size={20} />
                            Download Gratuito
                            <ArrowRight size={18} />
                        </a>
                        <a href="#" className="btn btn-secondary">
                            <Github size={18} />
                            Ver Código Fonte
                        </a>
                    </div>

                    <div className="community-card">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Users size={24} className="text-blue-400" />
                            <h3 className="benefit-card-title" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)', backgroundClip: 'text', color: 'transparent', marginBottom: 0 }}>
                                Junte-se à Comunidade
                            </h3>
                        </div>
                        <p className="benefits-subtitle" style={{ marginTop: 0, marginBottom: '2rem' }}>
                            Participe de uma comunidade ativa de desenvolvedores, empresários e especialistas em ERP.
                        </p>
                        <div className="community-card-grid">
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Suporte 24/7</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Comunidade ativa e documentação completa</p>
                            </div>
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Atualizações Frequentes</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Novos recursos e melhorias mensais</p>
                            </div>
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Setup em Minutos</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Docker, Kubernetes ou instalação tradicional</p>
                            </div>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}