'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // Importação correta
import { Download, ArrowRight, Github, Users } from 'lucide-react';
import AnimateInView from './AnimateInView';

export default function CallToAction() {
    return (
        <section className="cta-section">
            <div className="relative container mx-auto px-6">
                <AnimateInView className="cta-header">
                    <div className="cta-badge">
                        <div className="hero-badge-dot"></div>
                        {/* Mantido: É um ótimo chamado */}
                        <span>Comece Gratuitamente</span>
                    </div>

                    <h2 className="cta-title">
                        <span className="gradient-text-white">Pronto para transformar</span>
                        <br />
                        <span className="gradient-text-colored">sua gestão?</span>
                    </h2>

                    {/* ALTERADO: Mensagem mais focada nos benefícios diretos */}
                    <p className="cta-subtitle">
                        Assuma o controle total da sua operação com uma ferramenta poderosa, gratuita e de código aberto.
                    </p>

                    <div className="cta-stats-grid">
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)' }}>
                                Seus Dados,<br />Suas Regras
                            </h4>
                            <p>Operação 100% offline e privada</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #34d399, #60a5fa)' }}>
                                Código 100%<br />Aberto
                            </h4>
                            <p>Transparência total e sem vendor lock-in</p>
                        </div>
                        <div className="stat-item">
                            <h4 style={{ backgroundImage: 'linear-gradient(to right, #a78bfa, #f472b6)' }}>
                                Sem Mensalidades
                            </h4>
                            <p>Uso gratuito para sempre, sem surpresas</p>
                        </div>
                    </div>

                    <div className="hero-buttons-container" style={{ marginBottom: '3rem' }}>
                        <Link href="#download" className="btn btn-cta-primary">
                            <Download size={20} />
                            Download Gratuito
                            <ArrowRight size={18} />
                        </Link>
                        {/* ALTERADO: Link aponta para o repositório correto */}
                        <Link href="https://github.com/DataGusIT/EstacaoDoces" target="_blank" className="btn btn-secondary">
                            <Github size={18} />
                            Ver Código Fonte
                        </Link>
                    </div>

                    <div className="community-card">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                            <Users size={24} className="text-blue-400" />
                            <h3 className="benefit-card-title" style={{ backgroundImage: 'linear-gradient(to right, #60a5fa, #a78bfa)', backgroundClip: 'text', color: 'transparent', marginBottom: 0 }}>
                                Junte-se à Comunidade
                            </h3>
                        </div>
                        {/* ALTERADO: Descrição mais realista */}
                        <p className="benefits-subtitle" style={{ marginTop: 0, marginBottom: '2rem' }}>
                            Contribua com o projeto, tire dúvidas e compartilhe suas ideias com outros usuários e desenvolvedores.
                        </p>
                        <div className="community-card-grid">
                            {/* ALTERADO: Itens mais realistas para um projeto open-source */}
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Suporte da Comunidade</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Acesso a guias, tutoriais e fóruns</p>
                            </div>
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Desenvolvimento Contínuo</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Melhorias constantes baseadas no feedback</p>
                            </div>
                            <div className="community-item">
                                <h4 className="benefit-card-title" style={{ fontSize: '1.125rem' }}>Instalação Simples</h4>
                                <p className="benefit-card-description" style={{ fontSize: '0.875rem' }}>Comece a usar em poucos cliques</p>
                            </div>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}