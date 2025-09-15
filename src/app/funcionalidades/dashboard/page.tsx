"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
import { LayoutDashboard, CheckCircle, ArrowRight, TrendingUp, Users, Package, Download, Zap, Settings2, Bell, LayoutGrid, Target } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// Conteúdo focado no Dashboard
const dashboardFeatures = [
    {
        icon: <LayoutGrid className="text-blue-400" />,
        title: "Visão Geral Integrada",
        description: "Acesse os dados vitais de finanças, estoque e vendas em um só lugar. Tenha uma visão panorâmica do seu negócio sem trocar de tela.",
        highlight: "Tudo em Um",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <TrendingUp className="text-emerald-400" />,
        title: "KPIs em Tempo Real",
        description: "Monitore os Indicadores Chave de Performance (KPIs) mais importantes para você. Faturamento, lucro, ticket médio e mais, atualizados instantaneamente.",
        highlight: "Performance Agora",
        gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
        icon: <Settings2 className="text-purple-400" />,
        title: "Relatórios Personalizáveis",
        description: "Monte o dashboard do seu jeito. Arraste, solte e redimensione widgets para focar nas métricas que realmente importam para sua estratégia.",
        highlight: "Sua Visão",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <Bell className="text-amber-400" />,
        title: "Alertas Inteligentes",
        description: "Seja notificado proativamente sobre estoque baixo, metas atingidas ou qualquer evento crítico. Aja antes que vire um problema.",
        highlight: "Ação Imediata",
        gradient: "from-amber-500/10 to-yellow-500/5"
    }
];

const benefits = [
    "Decisões mais rápidas",
    "Visão unificada",
    "KPIs em tempo real",
    "Performance na mão"
];

export default function DashboardPage() {
    // --- REF PARA A NOVA ANIMAÇÃO CRIATIVA ---
    const visualRef = useRef<HTMLDivElement | null>(null);

    // --- NOVO useEffect COM A ANIMAÇÃO CRIATIVA DE DASHBOARD ---
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        // --- Seletores ---
        const dataStreams = gsap.utils.toArray<SVGPathElement>('.data-stream-path');
        const dataCore = visualElement.querySelector('.data-core');
        const widgets = gsap.utils.toArray<HTMLDivElement>('.dash-widget');
        const widgetContents = gsap.utils.toArray<HTMLDivElement>('.widget-content');
        const revenueEl = visualElement.querySelector('.revenue-value');
        const salesEl = visualElement.querySelector('.sales-value');

        // --- Estado Inicial ---
        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(dataStreams, { strokeDasharray: 500, strokeDashoffset: 500 });
        gsap.set(dataCore, { scale: 0, autoAlpha: 0 });
        gsap.set(widgets, { scale: 0, autoAlpha: 0, transformOrigin: 'center center' });
        gsap.set(widgetContents, { autoAlpha: 0 });

        // --- Timeline Principal ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        // FASE 1: O container e o núcleo aparecem
        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(dataCore, { scale: 1, autoAlpha: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }, "+=0.2");

        // FASE 2: Os fluxos de dados são desenhados em direção ao núcleo
        tl.to(dataStreams, {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "-=0.8");

        // FASE 3: O núcleo pulsa e os widgets "explodem" para suas posições
        tl.to(dataCore, { scale: 0.8, duration: 0.3, ease: 'power2.inOut', repeat: 1, yoyo: true }, "-=0.5");
        tl.to(widgets, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, "-=0.2");

        // FASE 4: O conteúdo dos widgets aparece e os números contam
        tl.to(widgetContents, { autoAlpha: 1, duration: 0.5, stagger: 0.1 }, "-=0.5");

        const counter = { revenue: 0, sales: 0 };
        tl.to(counter, {
            revenue: 78450,
            sales: 12,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                if (revenueEl) revenueEl.textContent = `R$ ${Math.round(counter.revenue).toLocaleString('pt-BR')}`;
                if (salesEl) salesEl.textContent = Math.round(counter.sales).toLocaleString('pt-BR');
            }
        }, "<");

        return () => {
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
                                <LayoutDashboard size={16} />
                                <span>Dashboard Central</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Sua Empresa em Uma Só Tela,
                                <span className="financeiro-gradient-text"> Visão Completa</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                O centro de comando do seu negócio. Acompanhe métricas vitais, identifique tendências e tome decisões inteligentes com dados consolidados em tempo real.
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

                        {/* --- NOVA ESTRUTURA JSX PARA A ANIMAÇÃO CRIATIVA DE DASHBOARD --- */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="dashboard-hero-visual">
                                {/* SVG com os fluxos de dados */}
                                <svg className="data-streams-svg" viewBox="0 0 500 500">
                                    <path className="data-stream-path stream-emerald" d="M 50 50 Q 150 250, 250 250" />
                                    <path className="data-stream-path stream-blue" d="M 450 50 Q 350 250, 250 250" />
                                    <path className="data-stream-path stream-purple" d="M 450 450 Q 350 250, 250 250" />
                                    <path className="data-stream-path stream-amber" d="M 50 450 Q 150 250, 250 250" />
                                </svg>

                                {/* Núcleo central de dados */}
                                <div className="data-core"></div>

                                {/* Widgets do Dashboard */}
                                <div className="dash-widget" id="widget-revenue">
                                    <div className="widget-content">
                                        <span className="widget-label">Faturamento (Mês)</span>
                                        <span className="widget-value revenue-value">R$ 0</span>
                                    </div>
                                </div>
                                <div className="dash-widget" id="widget-sales">
                                    <div className="widget-content">
                                        <span className="widget-label">Vendas Hoje</span>
                                        <span className="widget-value sales-value">0</span>
                                    </div>
                                </div>
                                <div className="dash-widget" id="widget-stock">
                                    <div className="widget-content">
                                        <span className="widget-label">Estoque Baixo</span>
                                        <span className="widget-value text-amber-400">19 itens</span>
                                    </div>
                                </div>
                                <div className="dash-widget" id="widget-clients">
                                    <div className="widget-content">
                                        <span className="widget-label">Novos Clientes</span>
                                        <span className="widget-value text-blue-400">+8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Componentes do seu Sucesso</h2>
                                <p className="financeiro-section-subtitle">
                                    Cada widget é uma peça fundamental para uma gestão mais inteligente.
                                </p>
                            </div>
                            <div className="financeiro-features-grid">
                                {dashboardFeatures.map((feature, index) => (
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
                                        <Target size={16} />
                                        <span>Metas e Objetivos</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Acompanhe suas Metas com
                                        <span className="financeiro-gradient-text"> Precisão</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Defina metas de vendas, crescimento ou aquisição de clientes e acompanhe o progresso em tempo real com gráficos visuais e projeções automáticas.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Real-time</span>
                                            <span className="financeiro-stat-label">Progresso</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">100%</span>
                                            <span className="financeiro-stat-label">Customizável</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Data-Driven</span>
                                            <span className="financeiro-stat-label">Decisões</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-main-dashboard.png" // <-- Imagem principal do dashboard
                                            alt="Tela de metas e objetivos do GestorX"
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
                                    Pronto para ter o <span className="financeiro-gradient-text">controle total</span>?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e transforme a maneira como você visualiza e gerencia seu negócio.
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