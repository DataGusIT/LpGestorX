"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
import { Users, CheckCircle, ArrowRight, Truck, History, FileText, Download, Zap } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// Conteúdo focado em Clientes e Fornecedores (CRM)
const crmFeatures = [
    {
        icon: <Users className="text-blue-400" />,
        title: "Cadastro Unificado",
        description: "Centralize todas as informações de clientes e fornecedores. Acesse contatos, histórico de compras, e condições comerciais em um único lugar.",
        highlight: "Visão 360°",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Truck className="text-purple-400" />,
        title: "Gestão de Fornecedores",
        description: "Organize seus parceiros, cadastre tabelas de preços, controle prazos de entrega e gerencie pedidos de compra de forma integrada ao estoque.",
        highlight: "Parcerias Fortes",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <History className="text-amber-400" />,
        title: "Histórico de Relacionamento",
        description: "Cada interação, venda ou negociação é registrada. Crie um atendimento personalizado e antecipe as necessidades dos seus clientes.",
        highlight: "Atendimento Premium",
        gradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
        icon: <FileText className="text-emerald-400" />,
        title: "Relatórios de CRM",
        description: "Entenda quem são seus melhores clientes, a frequência de compra e o desempenho dos seus fornecedores para tomar decisões estratégicas.",
        highlight: "Inteligência de Negócio",
        gradient: "from-emerald-500/10 to-green-500/5"
    }
];

const benefits = [
    "Fidelização de clientes",
    "Negociações otimizadas",
    "Comunicação centralizada",
    "Visão completa do funil"
];

export default function ClientesFornecedoresPage() {
    // --- REF PARA A NOVA ANIMAÇÃO CRIATIVA ---
    const visualRef = useRef<HTMLDivElement | null>(null);

    // --- NOVO useEffect COM A ANIMAÇÃO GSAP CRIATIVA ---
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        // --- Seletores para os elementos da animação de rede ---
        const centerNode = visualElement.querySelector('.node-center');
        const clientNodes = gsap.utils.toArray<HTMLDivElement>('.node-client');
        const supplierNodes = gsap.utils.toArray<HTMLDivElement>('.node-supplier');
        const allNodes = [centerNode, ...clientNodes, ...supplierNodes];
        const lines = gsap.utils.toArray<SVGPathElement>('.network-line');
        const uiOverlay = visualElement.querySelector('.crm-ui-overlay');
        const clientsEl = visualElement.querySelector('.connected-clients-value');
        const partnersEl = visualElement.querySelector('.active-partners-value');

        // --- Estado Inicial ---
        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(allNodes, { autoAlpha: 0, scale: 0, transformOrigin: 'center center' });
        gsap.set(lines, { autoAlpha: 0, strokeDasharray: 200, strokeDashoffset: 200 });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        // --- Timeline Principal ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // FASE 1: O container aparece
        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });

        // FASE 2: O nó central pulsa e aparece
        tl.to(centerNode, { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.7)' });

        // FASE 3: As linhas se desenham a partir do centro
        tl.to(lines, {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.1
        }, "-=0.5");

        // FASE 4: Os nós de clientes e fornecedores aparecem nas pontas das linhas
        tl.to([...clientNodes, ...supplierNodes], {
            scale: 1,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, "-=0.8");

        // FASE 5: A interface com os contadores aparece
        tl.to(uiOverlay, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.5");

        const counter = { clients: 0, partners: 0 };
        tl.to(counter, {
            clients: 358,
            partners: 42,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                if (clientsEl) clientsEl.textContent = Math.round(counter.clients).toLocaleString('pt-BR');
                if (partnersEl) partnersEl.textContent = Math.round(counter.partners).toLocaleString('pt-BR');
            }
        }, "<");

        // --- Animação de Fundo (Looping) ---
        allNodes.forEach(node => {
            gsap.to(node, {
                y: () => gsap.utils.random(-10, 10),
                x: () => gsap.utils.random(-10, 10),
                duration: gsap.utils.random(4, 8),
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        return () => {
            gsap.killTweensOf(allNodes); // Limpa todas as animações
            tl.kill();
        };
    }, []);

    return (
        <main className="finance-page-main relative overflow-hidden">
            <FinanceBackground />
            <Header />

            <section className="financeiro-page-section relative">
                <div className="container">

                    {/* --- HERO SECTION --- */}
                    <div className="financeiro-hero-modern">
                        <div className="financeiro-hero-content">
                            <div className="financeiro-hero-badge">
                                <Users size={16} />
                                <span>Módulo de CRM</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Relacionamentos que
                                <span className="financeiro-gradient-text"> Impulsionam</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                Conecte-se de verdade com seus clientes e otimize parcerias com fornecedores. Gestão completa para quem move o seu negócio.
                            </p>
                            <div className="financeiro-hero-benefits">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="financeiro-benefit-item">
                                        <CheckCircle size={16} className="text-emerald-400" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* --- NOVA ESTRUTURA JSX PARA A ANIMAÇÃO CRIATIVA DE REDE --- */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="crm-hero-visual">
                                {/* SVG para desenhar as linhas de conexão */}
                                <svg className="crm-network-svg" viewBox="0 0 400 400">
                                    <path className="network-line" d="M 200 200 L 80 80" />
                                    <path className="network-line" d="M 200 200 L 150 320" />
                                    <path className="network-line" d="M 200 200 L 330 120" />
                                    <path className="network-line" d="M 200 200 L 310 300" />
                                    <path className="network-line" d="M 200 200 L 50 250" />
                                </svg>

                                {/* Nós (Sua Empresa, Clientes, Fornecedores) */}
                                <div className="network-node node-center" style={{ top: 'calc(50% - 24px)', left: 'calc(50% - 24px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(20% - 12px)', left: 'calc(20% - 12px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(80% - 12px)', left: 'calc(37.5% - 12px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(62.5% - 12px)', left: 'calc(12.5% - 12px)' }}></div>
                                <div className="network-node node-supplier" style={{ top: 'calc(30% - 16px)', left: 'calc(82.5% - 16px)' }}></div>
                                <div className="network-node node-supplier" style={{ top: 'calc(75% - 16px)', left: 'calc(77.5% - 16px)' }}></div>

                                {/* Overlay com a UI de Métricas */}
                                <div className="crm-ui-overlay">
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Clientes Conectados</span>
                                        <span className="ui-metric-value connected-clients-value">0</span>
                                    </div>
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Parcerias Ativas</span>
                                        <span className="ui-metric-value active-partners-value">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Ferramentas de Conexão</h2>
                                <p className="financeiro-section-subtitle">
                                    Recursos projetados para fortalecer cada parceria de negócio.
                                </p>
                            </div>
                            <div className="financeiro-features-grid">
                                {crmFeatures.map((feature, index) => (
                                    <AnimateInView key={index} delay={index * 0.1 + 0.2}>
                                        <div className={`financeiro-feature-card bg-gradient-to-br ${feature.gradient}`}>
                                            <div className="financeiro-feature-card-header">
                                                <div className="financeiro-feature-icon">{feature.icon}</div>
                                                <span className="financeiro-feature-highlight">{feature.highlight}</span>
                                            </div>
                                            <h3 className="financeiro-feature-title">{feature.title}</h3>
                                            <p className="financeiro-feature-description">{feature.description}</p>
                                            <div className="financeiro-feature-arrow">
                                                <ArrowRight size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                                            </div>
                                        </div>
                                    </AnimateInView>
                                ))}
                            </div>
                        </div>
                    </AnimateInView>

                    {/* --- SHOWCASE SECTION REDESIGNED --- */}
                    <AnimateInView delay={0.4}>
                        <div className="financeiro-showcase-section">
                            <div className="financeiro-showcase-content">
                                <div className="financeiro-showcase-text">
                                    <div className="financeiro-showcase-badge">
                                        <Zap size={16} />
                                        <span>Segmentação Avançada</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Conheça seu Público
                                        <span className="financeiro-gradient-text"> a Fundo</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Segmente clientes por histórico de compras, localização ou tags personalizadas. Crie campanhas de marketing direcionadas e ofereça promoções que realmente convertem.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">+30%</span>
                                            <span className="financeiro-stat-label">Fidelização</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">1-to-1</span>
                                            <span className="financeiro-stat-label">Comunicação</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Targeted</span>
                                            <span className="financeiro-stat-label">Marketing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-crm.png" // <-- Use uma imagem relevante para CRM
                                            alt="Tela de segmentação de clientes do GestorX"
                                            width={1200}
                                            height={675}
                                            style={{ width: '100%', height: 'auto' }}
                                        />
                                        <div className="financeiro-image-overlay">
                                            <div className="financeiro-overlay-gradient"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* --- FINAL CTA --- */}
                    <AnimateInView delay={0.5}>
                        <div className="financeiro-final-cta-modern">
                            <div className="financeiro-cta-background">
                                <div className="financeiro-cta-grid"></div>
                            </div>
                            <div className="financeiro-cta-content">
                                <h2 className="financeiro-cta-title">
                                    Pronto para <span className="financeiro-gradient-text">conectar</span> seu negócio?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e transforme a maneira como você se relaciona com clientes e fornecedores.
                                </p>
                                <Link href="/#download" className="financeiro-cta-button group">
                                    <Download size={20} />
                                    <span>Ir para a Seção de Download</span>
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </AnimateInView>

                </div>
            </section>

            <Footer />
        </main>
    );
}