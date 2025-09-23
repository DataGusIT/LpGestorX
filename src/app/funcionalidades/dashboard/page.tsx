"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
// Ícones atualizados para refletir as features do sistema
import { LayoutDashboard, CheckCircle, ArrowRight, TrendingUp, Download, PieChart, BarChart, Bell, Target } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// --- CONTEÚDO ATUALIZADO ---
// O conteúdo agora reflete as funcionalidades exatas do seu dashboard em PyQt5.
const dashboardFeatures = [
    {
        icon: <LayoutDashboard className="text-blue-400" />,
        title: "KPIs Essenciais na Grade",
        description: "Acompanhe 6 indicadores chave em uma grade clara: Faturamento, Lucro Líquido, Margem Média, Nº de Vendas, Ticket Médio e Perdas.",
        highlight: "Decisão Rápida",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Bell className="text-amber-400" />,
        title: "Alertas Operacionais",
        description: "Receba notificações visuais e imediatas sobre o status do seu negócio, incluindo produtos com estoque baixo, vencendo em 30 dias ou já vencidos.",
        highlight: "Ação Imediata",
        gradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
        icon: <PieChart className="text-emerald-400" />,
        title: "Análise Detalhada com Gráficos",
        description: "Vá além dos números. Analise os produtos mais vendidos, as formas de pagamento mais usadas e os principais clientes com gráficos de pizza e barras.",
        highlight: "Insights Visuais",
        gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
        icon: <BarChart className="text-purple-400" />,
        title: "Evolução de Vendas no Período",
        description: "Filtre por dia, semana, mês ou período personalizado e visualize a evolução das suas vendas em um gráfico de linha interativo para identificar tendências.",
        highlight: "Tendências Claras",
        gradient: "from-purple-500/10 to-indigo-500/5"
    }
];

const benefits = [
    "Decisões baseadas em dados",
    "Visão unificada do negócio",
    "Alertas proativos",
    "Análise de performance"
];

export default function DashboardPage() {
    const visualRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        const dataStreams = gsap.utils.toArray<SVGPathElement>('.data-stream-path');
        const dataCore = visualElement.querySelector('.data-core');
        const widgets = gsap.utils.toArray<HTMLDivElement>('.dash-widget');
        const widgetContents = gsap.utils.toArray<HTMLDivElement>('.widget-content');
        const revenueEl = visualElement.querySelector('.revenue-value');
        const salesEl = visualElement.querySelector('.sales-value');

        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(dataStreams, { strokeDasharray: 500, strokeDashoffset: 500 });
        gsap.set(dataCore, { scale: 0, autoAlpha: 0 });
        gsap.set(widgets, { scale: 0, autoAlpha: 0, transformOrigin: 'center center' });
        gsap.set(widgetContents, { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(dataCore, { scale: 1, autoAlpha: 1, duration: 1, ease: 'elastic.out(1, 0.5)' }, "+=0.2");
        tl.to(dataStreams, {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }, "-=0.8");
        tl.to(dataCore, { scale: 0.8, duration: 0.3, ease: 'power2.inOut', repeat: 1, yoyo: true }, "-=0.5");
        tl.to(widgets, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'back.out(1.7)'
        }, "-=0.2");
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

                    {/* --- HERO SECTION (Conteúdo ajustado) --- */}
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

                        {/* Animação criativa (mantida) */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="dashboard-hero-visual">
                                <svg className="data-streams-svg" viewBox="0 0 500 500">
                                    <path className="data-stream-path stream-emerald" d="M 50 50 Q 150 250, 250 250" />
                                    <path className="data-stream-path stream-blue" d="M 450 50 Q 350 250, 250 250" />
                                    <path className="data-stream-path stream-purple" d="M 450 450 Q 350 250, 250 250" />
                                    <path className="data-stream-path stream-amber" d="M 50 450 Q 150 250, 250 250" />
                                </svg>
                                <div className="data-core"></div>
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

                    {/* --- FEATURES GRID (Conteúdo fiel ao sistema) --- */}
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

                    {/* --- SHOWCASE SECTION (Conteúdo fiel ao sistema) --- */}
                    <AnimateInView delay={0.4}>
                        <div className="financeiro-showcase-section">
                            <div className="financeiro-showcase-content">
                                <div className="financeiro-showcase-text">
                                    <div className="financeiro-showcase-badge">
                                        <TrendingUp size={16} />
                                        <span>Performance e Tendências</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Analise a Performance
                                        <span className="financeiro-gradient-text"> em Detalhes</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Filtre os dados pelo período desejado e mergulhe em análises detalhadas. Identifique seus produtos de maior sucesso, entenda o mix de pagamentos e reconheça seus clientes mais valiosos.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Top 5</span>
                                            <span className="financeiro-stat-label">Produtos</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">360°</span>
                                            <span className="financeiro-stat-label">Pagamentos</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">VIP</span>
                                            <span className="financeiro-stat-label">Clientes</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-dashboard.png"
                                            alt="Tela do dashboard principal do GestorX"
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