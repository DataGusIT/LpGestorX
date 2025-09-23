"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
// Ícones atualizados para refletir as features reais
import { Tag, CheckCircle, ArrowRight, Gift, Percent, Download, Zap, BarChart, Package } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// --- CONTEÚDO ATUALIZADO ---
// O conteúdo agora reflete as funcionalidades exatas do seu sistema PyQt5.
const promotionFeatures = [
    {
        icon: <Percent className="text-blue-400" />,
        title: "Descontos Flexíveis",
        description: "Crie promoções definindo a taxa de desconto (%) ou o preço final desejado. O sistema calcula o outro valor automaticamente para sua conveniência.",
        highlight: "Controle Total",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Package className="text-emerald-400" />,
        title: "Promoção para Embalagem e Fração",
        description: "Para produtos vendidos por unidade (fração), aplique descontos apenas na embalagem, apenas na fração ou em ambos, com cálculos proporcionais.",
        highlight: "Estratégia Precisa",
        gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
        icon: <Zap className="text-purple-400" />,
        title: "Sugestões Inteligentes",
        description: "O sistema recomenda automaticamente produtos para promoção baseados em estoque baixo ou data de validade próxima, ajudando a evitar perdas.",
        highlight: "Decisão Inteligente",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <BarChart className="text-amber-400" />,
        title: "Gestão e Validade",
        description: "Defina datas de início e fim para cada campanha. O sistema alerta e pode travar a data final na validade do produto para garantir a conformidade.",
        highlight: "Organização Completa",
        gradient: "from-amber-500/10 to-yellow-500/5"
    }
];

const benefits = [
    "Acelera o giro de estoque",
    "Reduz perdas por validade",
    "Atrai mais clientes",
    "Aumenta o faturamento"
];

export default function PromocoesPage() {
    const visualRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        const promoTag = visualElement.querySelector('.promo-tag-visual');
        const particles = gsap.utils.toArray<HTMLDivElement>('.promo-particle');
        const uiOverlay = visualElement.querySelector('.promo-ui-overlay');
        const usedCouponsEl = visualElement.querySelector('.used-coupons-value');
        const revenueEl = visualElement.querySelector('.generated-revenue-value');

        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(promoTag, { scale: 0, autoAlpha: 0, rotate: -15 });
        gsap.set(particles, {
            x: () => gsap.utils.random(-400, 400),
            y: () => gsap.utils.random(-400, 400),
            scale: 0,
            autoAlpha: 0,
        });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(promoTag, {
            scale: 1,
            autoAlpha: 1,
            rotate: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.6)'
        });
        tl.to(promoTag, { '--glow-opacity': 0.7, duration: 0.5, ease: 'power2.inOut' }, "-=0.8");
        tl.to(particles, {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            stagger: { amount: 1 },
            ease: 'power2.in'
        }, "-=1.0");
        tl.to(particles, {
            scale: 0,
            autoAlpha: 0,
            duration: 0.5,
            stagger: { amount: 1 },
            ease: 'power1.in'
        }, "-=0.5");
        tl.to(uiOverlay, { autoAlpha: 1, duration: 0.7 }, "-=1.0");

        const counter = { coupons: 482, revenue: 12750 };
        tl.to(counter, {
            coupons: 482,
            revenue: 12750,
            duration: 2.5,
            ease: 'power2.out',
            onUpdate: () => {
                if (usedCouponsEl) usedCouponsEl.textContent = Math.round(counter.coupons).toLocaleString('pt-BR');
                if (revenueEl) revenueEl.textContent = `R$ ${Math.round(counter.revenue).toLocaleString('pt-BR')}`;
            }
        }, "<");

        gsap.to(promoTag, {
            y: -10,
            rotation: 2,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 2
        });

        return () => {
            gsap.killTweensOf(promoTag);
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
                                <Tag size={16} />
                                <span>Módulo de Promoções</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Ofertas Inteligentes que
                                <span className="financeiro-gradient-text"> Geram Resultados</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                Crie, gerencie e analise campanhas promocionais com agilidade. Aumente suas vendas, fidelize clientes e acelere o giro do seu estoque com sugestões estratégicas.
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

                        {/* Animação criativa (mantida e recontextualizada) */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="promo-hero-visual">
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <div key={i} className="promo-particle"></div>
                                ))}
                                <div className="promo-tag-visual">
                                    <Percent size={64} />
                                </div>
                                <div className="promo-ui-overlay">
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Vendas em Promoção</span>
                                        <span className="ui-metric-value used-coupons-value">0</span>
                                    </div>
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Receita Gerada</span>
                                        <span className="ui-metric-value generated-revenue-value">R$ 0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID (Conteúdo fiel ao sistema) --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Aceleradores de Vendas</h2>
                                <p className="financeiro-section-subtitle">
                                    Ferramentas flexíveis para criar a oferta perfeita para cada ocasião.
                                </p>
                            </div>
                            <div className="financeiro-features-grid">
                                {promotionFeatures.map((feature, index) => (
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
                                        <Zap size={16} />
                                        <span>Promoções Estratégicas</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Transforme Dados em
                                        <span className="financeiro-gradient-text"> Oportunidades</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Não espere os problemas acontecerem. O GestorX analisa seu estoque e validade, sugerindo proativamente quais produtos devem entrar em promoção para otimizar suas vendas e evitar prejuízos.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Giro</span>
                                            <span className="financeiro-stat-label">Rápido</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">- Perdas</span>
                                            <span className="financeiro-stat-label">por Validade</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">+ Lucro</span>
                                            <span className="financeiro-stat-label">no Fechamento</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-promocoes.png" // <-- Use uma imagem relevante
                                            alt="Tela de sugestões de promoção do GestorX"
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
                                    Pronto para <span className="financeiro-gradient-text">vender mais</span>?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e transforme suas ofertas em resultados concretos.
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