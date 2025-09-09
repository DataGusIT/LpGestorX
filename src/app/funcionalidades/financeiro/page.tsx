// app/funcionalidades/financeiro/page.tsx

"use client"; // <-- AQUI ESTÁ A CORREÇÃO!

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import Header from '@/components/Header'; // <-- 1. IMPORTADO O HEADER
import Footer from '@/components/Footer'; // <-- 2. IMPORTADO O FOOTER
import FinanceBackground from '@/components/FinanceBackground'; // <-- 2. IMPORTADO O BACKGROUND
import { Download, Banknote, TrendingUp, Box, DollarSign, ArrowRight, CheckCircle, BarChart3, Zap } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

gsap.registerPlugin(ScrollTrigger);

const financialFeatures = [
    {
        icon: <Banknote className="text-emerald-400" />,
        title: "Gestão de Caixa Diário",
        description: "Inicie o dia com a abertura de caixa, registrando o saldo inicial. Todas as operações são monitoradas, e o fechamento permite conferir valores, apurar diferenças e manter um histórico seguro.",
        highlight: "Controle Total",
        gradient: "from-emerald-500/10 to-green-500/5"
    },
    {
        icon: <TrendingUp className="text-blue-400" />,
        title: "Registro de Vendas Automático",
        description: "Cada venda no PDV é instantaneamente lançada como uma entrada no caixa, incluindo o cálculo de taxas de cartão. Isso garante que o faturamento e o saldo estejam sempre 100% conciliados.",
        highlight: "Automação Inteligente",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Box className="text-pink-400" />,
        title: "Controle de Perdas de Estoque",
        description: "Dê baixa em produtos vencidos ou danificados. O sistema calcula o valor de custo do estoque e o registra como uma saída de 'Perda', garantindo que seu resultado financeiro seja sempre preciso.",
        highlight: "Precisão Garantida",
        gradient: "from-pink-500/10 to-rose-500/5"
    },
    {
        icon: <DollarSign className="text-purple-400" />,
        title: "Movimentações Manuais Detalhadas",
        description: "Registre suprimentos, pagamentos de contas, sangrias ou outras despesas. Classifique-as como 'Operacional' (afeta o lucro) ou 'Capital' para uma análise financeira avançada e relatórios mais claros.",
        highlight: "Análise Avançada",
        gradient: "from-purple-500/10 to-indigo-500/5"
    }
];

const benefits = [
    "Relatórios em tempo real",
    "Conciliação automática",
    "Histórico completo",
    "Análise de performance"
];

export default function FinanceiroPage() {
    // 1. Crie uma ref para o contêiner do card
    const cardRef = useRef(null);

    // 2. Use useEffect para animar o card quando o componente montar
    useEffect(() => {
        const card = cardRef.current as HTMLElement | null;
        if (!card) {
            console.log('Card ref não encontrado');
            return;
        }

        console.log('Card encontrado, iniciando animação...');

        // Buscar elementos com verificação de tipos mais segura
        const chartBars = Array.from(card.querySelectorAll('.financeiro-chart-bar')) as HTMLElement[];
        const metricValues = Array.from(card.querySelectorAll('.financeiro-metric-value')) as HTMLElement[];
        const cardHeader = card.querySelector('.financeiro-card-header') as HTMLElement | null;
        const statusIndicator = card.querySelector('.financeiro-status-indicator') as HTMLElement | null;
        const metricsContainer = card.querySelector('.financeiro-metrics') as HTMLElement | null;

        console.log('Elementos encontrados:', {
            chartBars: chartBars.length,
            metricValues: metricValues.length,
            cardHeader: !!cardHeader,
            statusIndicator: !!statusIndicator
        });

        // 1. SETUP INICIAL - Preparar elementos para animação
        gsap.set(card, {
            autoAlpha: 0,
            scale: 0.8,
            rotateY: -15,
            transformPerspective: 1000,
            transformOrigin: "center center"
        });

        if (chartBars.length > 0) {
            gsap.set(chartBars, {
                scaleY: 0,
                scaleX: 0.8,
                transformOrigin: 'bottom center',
                filter: 'blur(10px)',
                opacity: 0
            });
        }

        // Preparar elementos do header e métricas se existirem
        const elementsToFadeIn: HTMLElement[] = [];
        if (cardHeader) elementsToFadeIn.push(cardHeader);
        if (metricsContainer) elementsToFadeIn.push(metricsContainer);

        if (elementsToFadeIn.length > 0) {
            gsap.set(elementsToFadeIn, {
                y: 30,
                opacity: 0,
                filter: 'blur(5px)'
            });
        }

        // 2. TIMELINE PRINCIPAL - Sequência cinematográfica
        const masterTL = gsap.timeline({
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
                onEnter: () => console.log('Animação iniciada!'),
                // markers: true // Descomente para debug
            }
        });

        // FASE 1: Entrada dramática do card
        masterTL.to(card, {
            duration: 1.2,
            autoAlpha: 1,
            scale: 1,
            rotateY: 0,
            ease: "back.out(1.2)",
            transformOrigin: "center center",
            onComplete: () => console.log('Entrada do card completa')
        });

        // FASE 2: Efeito de "materialização" do header
        if (cardHeader) {
            masterTL.to(cardHeader, {
                duration: 0.8,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: "power3.out"
            }, "-=0.6");
        }

        // FASE 3: Animação das barras com efeito líquido
        if (chartBars.length > 0) {
            masterTL.to(chartBars, {
                duration: 1.5,
                scaleY: 1,
                scaleX: 1,
                opacity: 1,
                filter: 'blur(0px)',
                ease: "elastic.out(1, 0.6)",
                stagger: {
                    amount: 0.8,
                    from: "center",
                    ease: "power2.inOut"
                },
                onComplete: () => console.log('Animação das barras completa')
            }, "-=0.4");

            // FASE 4: Efeito de "onda" nas barras
            masterTL.to(chartBars, {
                duration: 0.6,
                scaleY: 1.1,
                ease: "sine.inOut",
                stagger: {
                    amount: 0.3,
                    yoyo: true,
                    repeat: 1
                }
            });
        }

        // FASE 5: Entrada suave das métricas
        if (metricsContainer) {
            masterTL.to(metricsContainer, {
                duration: 0.8,
                y: 0,
                opacity: 1,
                filter: 'blur(0px)',
                ease: "power3.out"
            }, "-=0.4");
        }

        // 3. ANIMAÇÃO DOS NÚMEROS - Contador sofisticado
        if (metricValues.length > 0) {
            metricValues.forEach((element, index) => {
                const isRevenue = index === 0;
                const targetValue = isRevenue ? 45670 : 28.5;
                const counter = { value: 0 };

                masterTL.to(counter, {
                    duration: 2,
                    value: targetValue,
                    ease: "power2.out",
                    delay: index * 0.3,
                    onUpdate: function () {
                        if (isRevenue) {
                            const currentValue = Math.floor(counter.value);
                            element.textContent = `R$ ${currentValue.toLocaleString('pt-BR')}`;

                            // Efeito de "glow" durante a contagem
                            const intensity = Math.sin(counter.value / targetValue * Math.PI) * 0.3;
                            element.style.textShadow = `0 0 ${intensity * 20}px rgba(52, 211, 153, ${intensity})`;
                        } else {
                            const currentValue = Math.round(counter.value * 10) / 10;
                            element.textContent = `+${currentValue}%`;

                            // Efeito de "pulse" na porcentagem
                            const scale = 1 + Math.sin(counter.value / targetValue * Math.PI * 2) * 0.05;
                            element.style.transform = `scale(${scale})`;
                        }
                    },
                    onComplete: () => {
                        // Remover efeitos após completar
                        element.style.textShadow = 'none';
                        element.style.transform = 'none';
                        console.log(`Animação do número ${index + 1} completa`);
                    }
                }, "-=1.5");
            });
        }

        // 4. ANIMAÇÕES CONTÍNUAS - Efeitos ambient

        // Indicador de status pulsante
        if (statusIndicator) {
            gsap.to(statusIndicator, {
                duration: 2,
                scale: 1.2,
                opacity: 0.7,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
            });
        }

        // Efeito sutil de flutuação no card
        masterTL.to(card, {
            duration: 4,
            y: -5,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: 1
        });

        // Animação contínua das barras (respiração)
        let breathingTL: gsap.core.Timeline | null = null;

        if (chartBars.length > 0) {
            breathingTL = gsap.timeline({ repeat: -1, delay: 3 });
            breathingTL.to(chartBars, {
                duration: 3,
                scaleY: () => gsap.utils.random(0.95, 1.05),
                ease: "sine.inOut",
                stagger: {
                    amount: 1,
                    from: "random"
                }
            })
                .to(chartBars, {
                    duration: 3,
                    scaleY: 1,
                    ease: "sine.inOut",
                    stagger: {
                        amount: 1,
                        from: "random"
                    }
                });
        }

        // 5. INTERAÇÕES HOVER - Efeitos responsivos
        const handleCardHover = () => {
            gsap.to(card, {
                duration: 0.3,
                scale: 1.02,
                y: -10,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                ease: "power2.out"
            });

            if (chartBars.length > 0) {
                gsap.to(chartBars, {
                    duration: 0.4,
                    scaleY: 1.1,
                    filter: 'brightness(1.1)',
                    ease: "power2.out",
                    stagger: 0.05
                });
            }
        };

        const handleCardLeave = () => {
            gsap.to(card, {
                duration: 0.5,
                scale: 1,
                y: 0,
                rotateX: 0,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                ease: "power2.out"
            });

            if (chartBars.length > 0) {
                gsap.to(chartBars, {
                    duration: 0.5,
                    scaleY: 1,
                    filter: 'brightness(1)',
                    ease: "power2.out",
                    stagger: 0.03
                });
            }
        };

        // Adicionar event listeners
        card.addEventListener('mouseenter', handleCardHover);
        card.addEventListener('mouseleave', handleCardLeave);

        // 6. CLEANUP - Limpar ao desmontar
        return () => {
            console.log('Limpando animações...');

            card.removeEventListener('mouseenter', handleCardHover);
            card.removeEventListener('mouseleave', handleCardLeave);

            masterTL.kill();
            if (breathingTL) breathingTL.kill();

            // Limpar todos os ScrollTriggers desta instância
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === card) {
                    trigger.kill();
                }
            });
        };

    }, []);
    return (
        <main className="finance-page-main relative overflow-hidden">
            <FinanceBackground /> {/* <-- 2. ADICIONE O COMPONENTE AQUI */}

            <Header /> {/* <-- 2. ADICIONADO O HEADER AQUI */}

            {/* REMOVA ESTA LINHA ABAIXO. ELA NÃO É MAIS NECESSÁRIA. */}
            {/* <div className="page-background-overlay absolute inset-0 bg-gradient-to-br from-indigo-950/20 via-black to-purple-950/20" /> */}
            {/* Floating Elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <section className="financeiro-page-section relative">
                <div className="container">

                    {/* --- HERO SECTION REDESIGNED --- */}
                    {/* --- HERO SECTION REDESIGNED --- */}
                    {/* AQUI ESTÁ A CORREÇÃO: <AnimateInView> foi removido */}
                    <div className="financeiro-hero-modern">
                        <div className="financeiro-hero-content">
                            <div className="financeiro-hero-badge">
                                <BarChart3 size={16} />
                                <span>Módulo Financeiro</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Controle Financeiro
                                <span className="financeiro-gradient-text"> Inteligente</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                O epicentro do seu negócio. Visualize a saúde financeira da sua empresa,
                                controle cada transação e tome decisões baseadas em dados precisos e em tempo real.
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
                        <div className="financeiro-hero-visual">
                            <div ref={cardRef} className="financeiro-floating-card financeiro-card-enhanced">

                                {/* Efeito de partículas de fundo */}
                                <div className="financeiro-particles-bg">
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                    <div className="particle"></div>
                                </div>

                                {/* Gradiente animado de borda */}
                                <div className="financeiro-card-border-glow"></div>

                                <div className="financeiro-card-header">
                                    <div className="financeiro-status-indicator"></div>
                                    <span>Dashboard Financeiro</span>

                                    {/* Mini indicadores adicionais */}
                                    <div className="financeiro-mini-indicators">
                                        <div className="mini-dot active"></div>
                                        <div className="mini-dot"></div>
                                        <div className="mini-dot"></div>
                                    </div>
                                </div>

                                <div className="financeiro-chart-simulation">
                                    <div className="financeiro-chart-bar" style={{ height: '60%' }}>
                                        <div className="bar-glow"></div>
                                        <div className="bar-tooltip">R$ 12.5k</div>
                                    </div>
                                    <div className="financeiro-chart-bar" style={{ height: '80%' }}>
                                        <div className="bar-glow"></div>
                                        <div className="bar-tooltip">R$ 18.2k</div>
                                    </div>
                                    <div className="financeiro-chart-bar" style={{ height: '45%' }}>
                                        <div className="bar-glow"></div>
                                        <div className="bar-tooltip">R$ 9.8k</div>
                                    </div>
                                    <div className="financeiro-chart-bar" style={{ height: '90%' }}>
                                        <div className="bar-glow"></div>
                                        <div className="bar-tooltip">R$ 22.1k</div>
                                    </div>
                                    <div className="financeiro-chart-bar" style={{ height: '70%' }}>
                                        <div className="bar-glow"></div>
                                        <div className="bar-tooltip">R$ 15.7k</div>
                                    </div>
                                </div>

                                <div className="financeiro-metrics">
                                    <div className="financeiro-metric">
                                        <span className="financeiro-metric-label">
                                            Faturamento
                                            <div className="label-underline"></div>
                                        </span>
                                        <span className="financeiro-metric-value faturamento-valor">R$ 45.670</span>
                                    </div>
                                    <div className="financeiro-metric">
                                        <span className="financeiro-metric-label">
                                            Lucro
                                            <div className="label-underline emerald"></div>
                                        </span>
                                        <span className="financeiro-metric-value text-emerald-400 lucro-valor">+28.5%</span>
                                    </div>
                                </div>

                                {/* Efeito de reflexo */}
                                <div className="financeiro-card-reflection"></div>

                                {/* Efeitos de luz ambiente */}
                                <div className="ambient-light top-left"></div>
                                <div className="ambient-light bottom-right"></div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID REDESIGNED --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Funcionalidades Avançadas</h2>
                                <p className="financeiro-section-subtitle">
                                    Cada recurso foi pensado para simplificar sua gestão financeira
                                </p>
                            </div>

                            <div className="financeiro-features-grid">
                                {financialFeatures.map((feature, index) => (
                                    <AnimateInView key={index} delay={index * 0.1 + 0.2}>
                                        <div className={`financeiro-feature-card bg-gradient-to-br ${feature.gradient}`}>
                                            <div className="financeiro-feature-card-header">
                                                <div className="financeiro-feature-icon">
                                                    {feature.icon}
                                                </div>
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
                                        <span>Relatórios Inteligentes</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Insights <span className="financeiro-gradient-text">Visuais</span> em Tempo Real
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Gere relatórios de período com um clique. Analise faturamento bruto, líquido,
                                        despesas, saldo final e os produtos mais vendidos para entender a performance do seu negócio.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">100%</span>
                                            <span className="financeiro-stat-label">Precisão</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Real-time</span>
                                            <span className="financeiro-stat-label">Atualização</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">24/7</span>
                                            <span className="financeiro-stat-label">Monitoramento</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-dashboard.png"
                                            alt="Tela de relatórios financeiros do GestorX"
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

                    {/* --- CTA FINAL REDESIGNED --- */}
                    <AnimateInView delay={0.5}>
                        <div className="financeiro-final-cta-modern">
                            <div className="financeiro-cta-background">
                                <div className="financeiro-cta-grid"></div>
                            </div>
                            <div className="financeiro-cta-content">
                                <h2 className="financeiro-cta-title">
                                    Pronto para <span className="financeiro-gradient-text">revolucionar</span> sua gestão?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e transforme a maneira como você gerencia seu negócio.
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
            <Footer /> {/* <-- 2. ADICIONE O COMPONENTE FOOTER AQUI, ANTES DE FECHAR O <main> */}
        </main>
    );
}