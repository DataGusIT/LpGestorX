'use client';

import { motion } from 'framer-motion';
import { Rocket, Sparkles, Bug, ArrowRight, GitBranch } from 'lucide-react';
import AnimateInView from './AnimateInView';

// CONTEÚDO ATUALIZADO PARA O LANÇAMENTO INICIAL (v1.0)
const latestRelease = {
    version: 'v1.0 - Lançamento Inicial',
    date: 'Lançado em 08 de Setembro de 2025',
    features: [
        'Módulo de Ponto de Venda (PDV) completo e integrado ao caixa.',
        'Controle de Estoque avançado com suporte a produtos fracionados.',
        'Gestão Financeira com abertura, fechamento e movimentações de caixa.',
        'Cadastro de Clientes e Fornecedores (CRM) com importação/exportação CSV.',
        'Dashboard inicial com indicadores de performance e alertas.',
        'Sistema de Promoções flexível por período e tipo de produto.'
    ],
    // É comum não ter melhorias ou correções em um lançamento v1.0
    improvements: [],
    fixes: []
};

export default function Releases() {
    return (
        <section className="releases-section">
            <div className="container">
                <AnimateInView className="gallery-header">
                    <div className="benefits-badge">
                        <GitBranch size={16} className="text-emerald-400" />
                        <span>Notas de Lançamento</span>
                    </div>
                    {/* --- TÍTULO ATUALIZADO AQUI --- */}
                    <h2 className="benefits-title cta-title">
                        <span className="gradient-text-white">O Que Há </span>
                        <span className="gradient-text-colored">de Novo?</span>
                    </h2>
                    {/* CONTEÚDO ATUALIZADO */}
                    <p className="benefits-subtitle">
                        Acompanhe aqui o lançamento inicial e as futuras novidades e melhorias do GestorX.
                    </p>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                    <div className="changelog-card">
                        <div className="changelog-header">
                            <h3>{latestRelease.version}</h3>
                            <span>{latestRelease.date}</span>
                        </div>

                        <div className="changelog-body">
                            {/* Seção de Novos Recursos (agora a principal) */}
                            {latestRelease.features.length > 0 && (
                                <div className="changelog-category">
                                    <h4><Rocket size={20} className="icon-feature" /> Recursos Principais do Lançamento</h4>
                                    <ul className="changelog-list">
                                        {latestRelease.features.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}

                            {/* Seção de Melhorias (não será renderizada pois o array está vazio) */}
                            {latestRelease.improvements.length > 0 && (
                                <div className="changelog-category">
                                    <h4><Sparkles size={20} className="icon-improvement" /> Melhorias</h4>
                                    <ul className="changelog-list">
                                        {latestRelease.improvements.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}

                            {/* Seção de Correções (não será renderizada pois o array está vazio) */}
                            {latestRelease.fixes.length > 0 && (
                                <div className="changelog-category">
                                    <h4><Bug size={20} className="icon-fix" /> Correções de Bugs</h4>
                                    <ul className="changelog-list">
                                        {latestRelease.fixes.map((item, index) => <li key={index}>{item}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="changelog-footer">
                            <a href="#" className="changelog-footer-link">
                                Ver todos os lançamentos
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}