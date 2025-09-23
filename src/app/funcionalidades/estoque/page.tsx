// app/funcionalidades/estoque/page.tsx
"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
import { Package, CheckCircle, ArrowRight, Layers, BarChart, FileText, Download, Zap } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

const stockFeatures = [
    {
        icon: <Package className="text-blue-400" />,
        title: "Cadastro Inteligente de Produtos",
        description: "Adicione produtos com código de barras, SKU, preço de custo e venda. Suporte completo para itens fracionados como kg, litros ou metros.",
        highlight: "Flexibilidade Total",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Layers className="text-purple-400" />,
        title: "Controle de Lotes e Validade",
        description: "Gerencie múltiplos lotes para um mesmo produto, controlando datas de validade para evitar perdas e garantir a qualidade.",
        highlight: "Rastreabilidade",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <BarChart className="text-amber-400" />,
        title: "Movimentação e Histórico",
        description: "Todas as entradas (compras) e saídas (vendas, perdas) são registradas, criando um histórico completo para auditoria e análise.",
        highlight: "Auditoria Completa",
        gradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
        icon: <FileText className="text-emerald-400" />,
        title: "Relatórios Estratégicos",
        description: "Acesse relatórios de inventário, produtos com baixo estoque, curva ABC e sugestões de compra baseadas no seu histórico de vendas.",
        highlight: "Decisões Inteligentes",
        gradient: "from-emerald-500/10 to-green-500/5"
    }
];

const benefits = [
    "Redução de perdas",
    "Otimização de compras",
    "Inventário preciso",
    "Visão completa do negócio"
];

export default function EstoquePage() {
    // --- NOVA REF PARA A ANIMAÇÃO CRIATIVA ---
    const visualRef = useRef<HTMLDivElement | null>(null);

    // --- NOVO useEffect COM A ANIMAÇÃO CRIATIVA GSAP ---
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        // --- Seletores para os elementos da animação ---
        const grid = visualElement.querySelector('.stock-grid-bg');
        const boxes = gsap.utils.toArray<HTMLDivElement>(visualElement.querySelectorAll('.stock-item-box'));
        const scanner = visualElement.querySelector('.scanner-beam');
        const uiOverlay = visualElement.querySelector('.stock-ui-overlay');
        const mappedItemsEl = visualElement.querySelector('.mapped-items-value');
        const inventoryValueEl = visualElement.querySelector('.inventory-value');

        // --- Estado Inicial dos Elementos (invisíveis) ---
        gsap.set(visualElement, { autoAlpha: 0, scale: 0.9, y: 50 });
        gsap.set(boxes, { autoAlpha: 0, z: () => gsap.utils.random(-400, -800), scale: 0 });
        gsap.set(scanner, { xPercent: -110, skewX: -15 });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        // --- Timeline Principal da Animação ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // FASE 1: O container 3D aparece
        tl.to(visualElement, {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // FASE 2: A grade de "prateleiras" se materializa
        tl.from(grid, { opacity: 0, duration: 1.5, ease: 'power2.inOut' }, "-=0.5");

        // FASE 3: As caixas (produtos) voam do fundo para suas posições
        tl.to(boxes, {
            autoAlpha: 1,
            z: 0,
            scale: 1,
            duration: 1,
            ease: 'back.out(1.4)',
            stagger: { amount: 0.8, from: 'random' }
        }, "-=1.2");

        // FASE 4: O feixe do scanner varre os itens
        tl.to(scanner, { xPercent: 110, duration: 1.2, ease: 'power3.inOut' }, "-=0.5");

        // Efeito extra: As caixas piscam ao serem "escaneadas"
        tl.to(boxes, {
            backgroundColor: '#34d399', // Cor Esmeralda para destaque
            duration: 0.05,
            repeat: 1,
            yoyo: true,
            stagger: { amount: 0.7, from: 'start' }
        }, "-=1.1");

        // FASE 5: A interface com as métricas aparece e os números contam
        tl.to(uiOverlay, { autoAlpha: 1, duration: 0.7 }, "-=0.5");

        const counter = { items: 0, value: 0 };
        tl.to(counter, {
            items: 1247,
            value: 89750,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                if (mappedItemsEl) mappedItemsEl.textContent = Math.round(counter.items).toLocaleString('pt-BR');
                if (inventoryValueEl) inventoryValueEl.textContent = `R$ ${Math.round(counter.value).toLocaleString('pt-BR')}`;
            }
        }, "<");

        // --- Animação Ambiente (Looping) ---
        // Adiciona um movimento sutil de flutuação após a animação principal
        gsap.to(visualElement, {
            y: '+=10',
            x: '-=5',
            rotationZ: -1,
            rotationY: 5,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 2
        });

        return () => {
            tl.kill();
            gsap.killTweensOf(visualElement); // Limpa a animação de flutuação
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
                                <Package size={16} />
                                <span>Módulo de Estoque</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Gestão de Estoque
                                <span className="financeiro-gradient-text"> Precisa e Integrada</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                Do recebimento à venda, tenha controle absoluto sobre seus produtos. Evite perdas, otimize compras e nunca mais venda o que não tem.
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

                        {/* --- NOVA ESTRUTURA JSX PARA A ANIMAÇÃO CRIATIVA --- */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="stock-hero-visual">
                                {/* Grade de Fundo (Prateleiras) */}
                                <div className="stock-grid-bg"></div>

                                {/* Itens de Produto (Caixas) */}
                                {Array.from({ length: 18 }).map((_, i) => (
                                    <div key={i} className="stock-item-box">
                                        <div className="stock-item-glow"></div>
                                    </div>
                                ))}

                                {/* Feixe do Scanner */}
                                <div className="scanner-beam"></div>

                                {/* Overlay com a UI de Métricas */}
                                <div className="stock-ui-overlay">
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Itens Mapeados</span>
                                        <span className="ui-metric-value mapped-items-value">0</span>
                                    </div>
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Valor do Inventário</span>
                                        <span className="ui-metric-value inventory-value">R$ 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID (sem alterações) --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Recursos Essenciais</h2>
                                <p className="financeiro-section-subtitle">
                                    Ferramentas poderosas para um controle de estoque impecável.
                                </p>
                            </div>
                            <div className="financeiro-features-grid">
                                {stockFeatures.map((feature, index) => (
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

                    {/* --- SHOWCASE SECTION (sem alterações) --- */}
                    <AnimateInView delay={0.4}>
                        <div className="financeiro-showcase-section">
                            <div className="financeiro-showcase-content">
                                <div className="financeiro-showcase-text">
                                    <div className="financeiro-showcase-badge">
                                        <Zap size={16} />
                                        <span>Análise de Inventário</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Dados <span className="financeiro-gradient-text">Estratégicos</span> ao seu Alcance
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Identifique seus produtos mais rentáveis com a Curva ABC, analise o giro de estoque para otimizar compras e evite perdas com alertas de validade e estoque baixo.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item"><span className="financeiro-stat-number">99.8%</span><span className="financeiro-stat-label">Acuracidade</span></div>
                                        <div className="financeiro-stat-item"><span className="financeiro-stat-number">Real-time</span><span className="financeiro-stat-label">Sincronização</span></div>
                                        <div className="financeiro-stat-item"><span className="financeiro-stat-number">+25%</span><span className="financeiro-stat-label">Otimização</span></div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image src="/images/gallery-estoque.png" alt="Tela de relatórios de estoque do GestorX" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
                                        <div className="financeiro-image-overlay"><div className="financeiro-overlay-gradient"></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>

                    {/* --- FINAL CTA (sem alterações) --- */}
                    <AnimateInView delay={0.5}>
                        <div className="financeiro-final-cta-modern">
                            <div className="financeiro-cta-background"><div className="financeiro-cta-grid"></div></div>
                            <div className="financeiro-cta-content">
                                <h2 className="financeiro-cta-title">Pronto para <span className="financeiro-gradient-text">organizar</span> seu negócio?</h2>
                                <p className="financeiro-cta-description">Baixe o GestorX e tenha um controle de estoque que realmente funciona.</p>
                                <Link href="/#download" className="financeiro-cta-button group">
                                    <Download size={20} /><span>Ir para a Seção de Download</span><ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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