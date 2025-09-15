// app/funcionalidades/promocoes/page.tsx
"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
import { Tag, CheckCircle, ArrowRight, Gift, Percent, Users, Download, Zap, Star } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// Conteúdo focado em Promoções
const promotionFeatures = [
    {
        icon: <Percent className="text-blue-400" />,
        title: "Campanhas de Desconto",
        description: "Crie promoções por porcentagem ou valor fixo, aplique a produtos específicos ou categorias inteiras e defina a data de validade com facilidade.",
        highlight: "Vendas Imediatas",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Tag className="text-emerald-400" />,
        title: "Cupons Personalizados",
        description: "Gere cupons únicos de uso único ou múltiplo. Ideal para parcerias com influenciadores, marketing por e-mail ou para recompensar clientes especiais.",
        highlight: "Atração Direcionada",
        gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
        icon: <Gift className="text-purple-400" />,
        title: "Leve Mais, Pague Menos",
        description: "Configure ofertas do tipo 'Compre X, Leve Y' ou descontos progressivos por quantidade para aumentar o ticket médio e o giro de estoque.",
        highlight: "Aumente o Ticket",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <Users className="text-amber-400" />,
        title: "Segmentação de Clientes",
        description: "Direcione suas promoções para grupos específicos de clientes, como aniversariantes, clientes inativos ou os mais fiéis, maximizando o impacto.",
        highlight: "Marketing de Precisão",
        gradient: "from-amber-500/10 to-yellow-500/5"
    }
];

const benefits = [
    "Aumento do ticket médio",
    "Atração de novos clientes",
    "Giro de estoque acelerado",
    "Maior fidelização"
];

export default function PromocoesPage() {
    // --- REF PARA A NOVA ANIMAÇÃO CRIATIVA ---
    const visualRef = useRef<HTMLDivElement | null>(null);

    // --- NOVO useEffect COM A ANIMAÇÃO CRIATIVA DE PROMOÇÕES ---
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        // --- Seletores ---
        const promoTag = visualElement.querySelector('.promo-tag-visual');
        const particles = gsap.utils.toArray<HTMLDivElement>('.promo-particle');
        const uiOverlay = visualElement.querySelector('.promo-ui-overlay');
        const usedCouponsEl = visualElement.querySelector('.used-coupons-value');
        const revenueEl = visualElement.querySelector('.generated-revenue-value');

        // --- Estado Inicial ---
        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(promoTag, { scale: 0, autoAlpha: 0, rotate: -15 });
        gsap.set(particles, {
            x: () => gsap.utils.random(-400, 400),
            y: () => gsap.utils.random(-400, 400),
            scale: 0,
            autoAlpha: 0,
        });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        // --- Timeline Principal ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        // FASE 1: O container e a tag de promoção aparecem
        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(promoTag, {
            scale: 1,
            autoAlpha: 1,
            rotate: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.6)'
        });
        tl.to(promoTag, { '--glow-opacity': 0.7, duration: 0.5, ease: 'power2.inOut' }, "-=0.8");

        // FASE 2: Partículas (clientes) são atraídas para a tag
        tl.to(particles, {
            x: 0,
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            stagger: { amount: 1 },
            ease: 'power2.in'
        }, "-=1.0");

        // FASE 3: Partículas são "capturadas" e desaparecem
        tl.to(particles, {
            scale: 0,
            autoAlpha: 0,
            duration: 0.5,
            stagger: { amount: 1 },
            ease: 'power1.in'
        }, "-=0.5");

        // FASE 4: A interface aparece e os contadores disparam
        tl.to(uiOverlay, { autoAlpha: 1, duration: 0.7 }, "-=1.0");

        const counter = { coupons: 0, revenue: 0 };
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

        // --- Animação Ambiente (Looping) ---
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

                    {/* --- HERO SECTION --- */}
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
                                Crie, gerencie e analise campanhas promocionais com agilidade. Aumente suas vendas, fidelize clientes e acelere o giro do seu estoque.
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

                        {/* --- NOVA ESTRUTURA JSX PARA A ANIMAÇÃO CRIATIVA DE PROMOÇÕES --- */}
                        <div className="financeiro-hero-visual">
                            <div ref={visualRef} className="promo-hero-visual">
                                {/* Partículas (Clientes) */}
                                {Array.from({ length: 30 }).map((_, i) => (
                                    <div key={i} className="promo-particle"></div>
                                ))}

                                {/* Tag de Promoção Central */}
                                <div className="promo-tag-visual">
                                    <Percent size={64} />
                                </div>

                                {/* Overlay com a UI de Métricas */}
                                <div className="promo-ui-overlay">
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Cupons Utilizados</span>
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

                    {/* --- FEATURES GRID --- */}
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

                    {/* --- SHOWCASE SECTION REDESIGNED --- */}
                    <AnimateInView delay={0.4}>
                        <div className="financeiro-showcase-section">
                            <div className="financeiro-showcase-content">
                                <div className="financeiro-showcase-text">
                                    <div className="financeiro-showcase-badge">
                                        <Star size={16} />
                                        <span>Programas de Fidelidade</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Recompense a Lealdade e
                                        <span className="financeiro-gradient-text"> Crie Fãs</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Vá além de simples descontos. Crie programas de pontos, recompensas por recorrência e benefícios exclusivos para transformar clientes em verdadeiros embaixadores da sua marca.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">+40%</span>
                                            <span className="financeiro-stat-label">Retenção</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">2x Mais</span>
                                            <span className="financeiro-stat-label">Recorrência</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">VIP</span>
                                            <span className="financeiro-stat-label">Experiência</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-loyalty.png"
                                            alt="Tela do programa de fidelidade do GestorX"
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