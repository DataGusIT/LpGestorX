"use client";

import { useRef, useEffect, useState } from 'react'; // Adicionado useState para o carrossel
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
// Ícones atualizados para o carrossel e novas features
import { Users, CheckCircle, ArrowRight, Truck, History, FileText, Download, Zap, ChevronLeft, ChevronRight, UploadCloud } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// --- CONTEÚDO ATUALIZADO ---
// O conteúdo agora reflete as funcionalidades exatas do seu sistema PyQt5.
const crmFeatures = [
    {
        icon: <Users className="text-blue-400" />,
        title: "Cadastro Unificado de Clientes",
        description: "Centralize dados essenciais dos seus clientes, incluindo nome, data de nascimento, contato, e-mail e endereço. Tenha tudo à mão para um atendimento ágil.",
        highlight: "Visão 360° do Cliente",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <Truck className="text-purple-400" />,
        title: "Gestão Estratégica de Fornecedores",
        description: "Organize seus parceiros por empresa, representante e classifique-os por frequência de compra (Alta, Média, Baixa) para otimizar suas negociações.",
        highlight: "Parcerias Fortes",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <History className="text-amber-400" />,
        title: "Histórico e Acompanhamento",
        description: "Acesse rapidamente o histórico de relacionamento. Para clientes, veja seus dados de cadastro, e para fornecedores, monitore a frequência de compras.",
        highlight: "Relacionamento Duradouro",
        gradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
        icon: <UploadCloud className="text-emerald-400" />,
        title: "Importação e Exportação CSV",
        description: "Migre seus dados existentes com facilidade ou extraia relatórios completos. A importação inteligente atualiza registros existentes e adiciona novos.",
        highlight: "Flexibilidade Total",
        gradient: "from-emerald-500/10 to-green-500/5"
    }
];

const benefits = [
    "Centralização de dados",
    "Negociações otimizadas",
    "Comunicação direcionada",
    "Gestão de dados flexível"
];

// --- DADOS PARA O NOVO CARROSSEL ---
const showcaseSlides = [
    {
        badgeIcon: <Users size={16} />,
        badgeText: "Segmentação Avançada",
        title: "Conheça seu Público a Fundo",
        gradientText: "a Fundo",
        description: "Utilize a busca avançada para filtrar clientes por nome, telefone ou e-mail. Segmente sua base para criar campanhas e ações de marketing direcionadas.",
        stats: [
            { number: "Rápida", label: "Busca" },
            { number: "1-to-1", label: "Comunicação" },
            { number: "Targeted", label: "Marketing" }
        ],
        imageSrc: "/images/gallery-cliente.png",
        imageAlt: "Tela de gestão de clientes do GestorX"
    },
    {
        badgeIcon: <Zap size={16} />,
        badgeText: "Gestão Inteligente de Compras",
        title: "Notifique Fornecedores com ",
        gradientText: "um Clique",
        description: "O sistema identifica produtos com estoque baixo e prepara uma lista para notificar seus fornecedores via e-mail, agilizando o processo de reposição.",
        stats: [
            { number: "Auto", label: "Identificação" },
            { number: "+Eficiência", label: "em Compras" },
            { number: "-Ruptura", label: "de Estoque" }
        ],
        imageSrc: "/images/gallery-fornecedores.png", // Imagem para fornecedores
        imageAlt: "Tela de gestão de fornecedores do GestorX"
    }
];


export default function ClientesFornecedoresPage() {
    const visualRef = useRef<HTMLDivElement | null>(null);

    // --- LÓGICA PARA O CARROSSEL ---
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === showcaseSlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? showcaseSlides.length - 1 : prev - 1));
    };


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        const centerNode = visualElement.querySelector('.node-center');
        const clientNodes = gsap.utils.toArray<HTMLDivElement>('.node-client');
        const supplierNodes = gsap.utils.toArray<HTMLDivElement>('.node-supplier');
        const allNodes = [centerNode, ...clientNodes, ...supplierNodes];
        const lines = gsap.utils.toArray<SVGPathElement>('.network-line');
        const uiOverlay = visualElement.querySelector('.crm-ui-overlay');
        const clientsEl = visualElement.querySelector('.connected-clients-value');
        const partnersEl = visualElement.querySelector('.active-partners-value');

        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(allNodes, { autoAlpha: 0, scale: 0, transformOrigin: 'center center' });
        gsap.set(lines, { autoAlpha: 0, strokeDasharray: 200, strokeDashoffset: 200 });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(centerNode, { scale: 1, autoAlpha: 1, duration: 0.8, ease: 'back.out(1.7)' });
        tl.to(lines, {
            strokeDashoffset: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.1
        }, "-=0.5");
        tl.to([...clientNodes, ...supplierNodes], {
            scale: 1,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'back.out(1.7)',
            stagger: 0.1
        }, "-=0.8");
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
            gsap.killTweensOf(allNodes);
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
                                <Users size={16} />
                                <span>Módulo de CRM</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Relacionamentos que
                                <span className="financeiro-gradient-text"> Impulsionam</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                Conecte-se com seus clientes e otimize parcerias com fornecedores. Gestão completa para quem move o seu negócio, com cadastros centralizados e ferramentas flexíveis.
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
                            <div ref={visualRef} className="crm-hero-visual">
                                <svg className="crm-network-svg" viewBox="0 0 400 400">
                                    <path className="network-line" d="M 200 200 L 80 80" />
                                    <path className="network-line" d="M 200 200 L 150 320" />
                                    <path className="network-line" d="M 200 200 L 330 120" />
                                    <path className="network-line" d="M 200 200 L 310 300" />
                                    <path className="network-line" d="M 200 200 L 50 250" />
                                </svg>
                                <div className="network-node node-center" style={{ top: 'calc(50% - 24px)', left: 'calc(50% - 24px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(20% - 12px)', left: 'calc(20% - 12px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(80% - 12px)', left: 'calc(37.5% - 12px)' }}></div>
                                <div className="network-node node-client" style={{ top: 'calc(62.5% - 12px)', left: 'calc(12.5% - 12px)' }}></div>
                                <div className="network-node node-supplier" style={{ top: 'calc(30% - 16px)', left: 'calc(82.5% - 16px)' }}></div>
                                <div className="network-node node-supplier" style={{ top: 'calc(75% - 16px)', left: 'calc(77.5% - 16px)' }}></div>
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

                    {/* --- FEATURES GRID (Conteúdo fiel ao sistema) --- */}
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

                    {/* --- SHOWCASE SECTION COM CARROSSEL --- */}
                    <AnimateInView delay={0.4}>
                        <div className="financeiro-showcase-section">
                            <div className="financeiro-showcase-content">
                                {/* Textos do carrossel */}
                                <div className="financeiro-showcase-text">
                                    <div className="financeiro-showcase-badge">
                                        {showcaseSlides[currentSlide].badgeIcon}
                                        <span>{showcaseSlides[currentSlide].badgeText}</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        {showcaseSlides[currentSlide].title}
                                        <span className="financeiro-gradient-text"> {showcaseSlides[currentSlide].gradientText}</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        {showcaseSlides[currentSlide].description}
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        {showcaseSlides[currentSlide].stats.map((stat, index) => (
                                            <div key={index} className="financeiro-stat-item">
                                                <span className="financeiro-stat-number">{stat.number}</span>
                                                <span className="financeiro-stat-label">{stat.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Imagem e controles do carrossel */}
                                <div className="financeiro-showcase-image showcase-carousel-container">
                                    <div className="financeiro-image-frame">
                                        {showcaseSlides.map((slide, index) => (
                                            <div key={index} className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}>
                                                <Image
                                                    src={slide.imageSrc}
                                                    alt={slide.imageAlt}
                                                    width={1200}
                                                    height={675}
                                                    style={{ width: '100%', height: 'auto' }}
                                                />
                                            </div>
                                        ))}
                                        <div className="financeiro-image-overlay">
                                            <div className="financeiro-overlay-gradient"></div>
                                        </div>
                                    </div>
                                    {/* Botões de navegação */}
                                    <button onClick={prevSlide} className="carousel-nav-button prev">
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button onClick={nextSlide} className="carousel-nav-button next">
                                        <ChevronRight size={24} />
                                    </button>
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