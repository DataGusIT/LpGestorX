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
import { Package, CheckCircle, ArrowRight, Layers, BarChart, FileText, Download } from 'lucide-react';
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
    const cardRef = useRef<HTMLDivElement | null>(null);
    const particlesRef = useRef<HTMLDivElement>(null);
    const waveEffectRef = useRef<HTMLDivElement>(null);
    const alertBadgeRef = useRef<HTMLDivElement>(null);

    // Função para criar partículas flutuantes
    // Função para criar partículas flutuantes (CORRIGIDA)
    const createParticles = (container: HTMLDivElement) => {
        // Agora a função recebe o container como argumento, garantindo que ele não é nulo
        for (let i = 0; i < 30; i++) {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            // Estilos para as partículas (você pode precisar criar a classe .floating-particle no seu CSS)
            particle.style.position = 'absolute';
            particle.style.width = '2px';
            particle.style.height = '2px';
            particle.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
            particle.style.borderRadius = '50%';

            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            container.appendChild(particle);

            gsap.to(particle, {
                y: gsap.utils.random(-100, 100),
                x: gsap.utils.random(-50, 50),
                opacity: 0,
                duration: gsap.utils.random(3, 8),
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: gsap.utils.random(0, 3)
            });
        }
    };

    // Substitua APENAS o useEffect em app/funcionalidades/estoque/page.tsx

    // Substitua APENAS o useEffect em app/funcionalidades/estoque/page.tsx

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const cardElement = cardRef.current;
        if (!cardElement) return;

        // --- CORREÇÃO: Usando gsap.utils.toArray com contexto para todas as seleções ---
        const header = gsap.utils.toArray(cardElement.querySelectorAll('.dashboard-header-animated'));
        const metricCards = gsap.utils.toArray(cardElement.querySelectorAll('.metric-card-animated'));
        const chartBars = gsap.utils.toArray(cardElement.querySelectorAll('.estoque-chart-bar'));
        const inventoryItems = gsap.utils.toArray(cardElement.querySelectorAll('.inventory-item-animated'));
        const alertBadge = gsap.utils.toArray(cardElement.querySelectorAll('.alert-badge-animated'));

        // Elementos dos contadores
        const produtosAtivosEl = cardElement.querySelector('.produtos-ativos-valor');
        const itensAlertaEl = cardElement.querySelector('.itens-alerta-valor');
        const valorTotalEl = cardElement.querySelector('.valor-total-valor');
        const movimentacoesEl = cardElement.querySelector('.movimentacoes-valor');

        // --- Animação de Contadores (sem alterações aqui) ---
        const values = { produtos: 0, alerta: 0, valorTotal: 0, movimentacoes: 0 };
        const endValues = { produtos: 1247, alerta: 32, valorTotal: 89750, movimentacoes: 156 };

        // --- TIMELINE PRINCIPAL ---
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: cardElement,
                start: "top 75%",
                toggleActions: "play none none none"
            },
            defaults: { ease: "power3.out" }
        });

        // A lógica da timeline permanece a mesma, pois agora as variáveis estão corretas
        tl.from(cardElement, {
            autoAlpha: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8
        })
            .from(header, {
                autoAlpha: 0,
                y: 20,
                duration: 0.6
            }, "-=0.5")
            .from(metricCards, {
                autoAlpha: 0,
                y: 30,
                scale: 0.9,
                duration: 0.5,
                stagger: 0.1
            }, "-=0.4")
            .from(chartBars, {
                scaleY: 0,
                transformOrigin: "bottom",
                duration: 0.8,
                stagger: 0.08
            }, "-=0.5")
            .from(alertBadge, {
                autoAlpha: 0,
                scale: 0.5,
                duration: 0.5,
                ease: "back.out(1.7)"
            }, "-=0.6")
            .to(values, {
                produtos: endValues.produtos,
                alerta: endValues.alerta,
                valorTotal: endValues.valorTotal,
                movimentacoes: endValues.movimentacoes,
                duration: 2,
                ease: "power2.out",
                onUpdate: () => {
                    if (produtosAtivosEl) produtosAtivosEl.textContent = Math.round(values.produtos).toLocaleString('pt-BR');
                    if (itensAlertaEl) itensAlertaEl.textContent = Math.round(values.alerta).toLocaleString('pt-BR');
                    if (valorTotalEl) valorTotalEl.textContent = `R$ ${Math.round(values.valorTotal).toLocaleString('pt-BR')}`;
                    if (movimentacoesEl) movimentacoesEl.textContent = Math.round(values.movimentacoes).toLocaleString('pt-BR');
                }
            }, "<")
            .from(inventoryItems, {
                autoAlpha: 0,
                y: 20,
                duration: 0.4,
                stagger: 0.05
            }, "-=1.2");

        // Cleanup
        return () => {
            tl.kill();
        };

    }, []);

    return (
        <main className="finance-page-main relative overflow-hidden">
            <FinanceBackground />
            <Header />

            {/* Partículas flutuantes */}
            <div ref={particlesRef} className="floating-particles-container"></div>

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

                        <div className="financeiro-hero-visual">
                            {/* Card principal com todas as animações */}
                            <div
                                ref={cardRef}
                                className="financeiro-floating-card advanced-stock-card"
                                style={{ opacity: 0, visibility: 'hidden' }}
                            >
                                {/* Efeito de onda */}
                                <div ref={waveEffectRef} className="wave-effect"></div>

                                {/* Badge de alerta */}
                                <div ref={alertBadgeRef} className="alert-badge-animated">
                                    🚨 32 Itens em Estoque Baixo
                                </div>

                                {/* Header do card */}
                                <div className="financeiro-card-header dashboard-header-animated">
                                    <div className="financeiro-status-indicator status-pulse"></div>
                                    <span>Inventário em Tempo Real</span>
                                </div>

                                {/* Grid de métricas expandida */}
                                <div className="metrics-grid-expanded">
                                    <div className="metric-card-animated">
                                        <div className="financeiro-metric-value produtos-ativos-valor">1.247</div>
                                        <div className="financeiro-metric-label">Produtos Ativos</div>
                                        <div className="progress-bar-container">
                                            <div className="progress-fill progress-blue"></div>
                                        </div>
                                    </div>
                                    <div className="metric-card-animated">
                                        <div className="financeiro-metric-value text-amber-400 itens-alerta-valor">32</div>
                                        <div className="financeiro-metric-label">Estoque Baixo</div>
                                        <div className="progress-bar-container">
                                            <div className="progress-fill progress-amber"></div>
                                        </div>
                                    </div>
                                    <div className="metric-card-animated">
                                        <div className="financeiro-metric-value text-emerald-400 valor-total-valor">R$ 89.750</div>
                                        <div className="financeiro-metric-label">Valor Total</div>
                                        <div className="progress-bar-container">
                                            <div className="progress-fill progress-emerald"></div>
                                        </div>
                                    </div>
                                    <div className="metric-card-animated">
                                        <div className="financeiro-metric-value text-purple-400 movimentacoes-valor">156</div>
                                        <div className="financeiro-metric-label">Movimentações Hoje</div>
                                        <div className="progress-bar-container">
                                            <div className="progress-fill progress-purple"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Gráfico melhorado */}
                                <div className="financeiro-chart-simulation enhanced-chart">
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '75%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '45%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '90%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '60%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '85%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                    <div className="estoque-chart-bar-wrapper">
                                        <div className="estoque-chart-bar" style={{ height: '35%' }}>
                                            <div className="chart-bar-glow"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Grid de inventário */}
                                <div className="inventory-grid-container">
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">📦</div>
                                        <div className="inventory-name">Eletrônicos</div>
                                        <div className="inventory-stock">245 itens</div>
                                    </div>
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">👕</div>
                                        <div className="inventory-name">Roupas</div>
                                        <div className="inventory-stock">189 itens</div>
                                    </div>
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">🏠</div>
                                        <div className="inventory-name">Casa</div>
                                        <div className="inventory-stock">96 itens</div>
                                    </div>
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">🎮</div>
                                        <div className="inventory-name">Games</div>
                                        <div className="inventory-stock">78 itens</div>
                                    </div>
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">📚</div>
                                        <div className="inventory-name">Livros</div>
                                        <div className="inventory-stock">156 itens</div>
                                    </div>
                                    <div className="inventory-item-animated">
                                        <div className="inventory-icon">🍃</div>
                                        <div className="inventory-name">Orgânicos</div>
                                        <div className="inventory-stock">67 itens</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID --- */}
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

                    {/* --- FINAL CTA --- */}
                    <AnimateInView delay={0.5}>
                        <div className="financeiro-final-cta-modern">
                            <div className="financeiro-cta-background">
                                <div className="financeiro-cta-grid"></div>
                            </div>
                            <div className="financeiro-cta-content">
                                <h2 className="financeiro-cta-title">
                                    Pronto para <span className="financeiro-gradient-text">organizar</span> seu negócio?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e tenha um controle de estoque que realmente funciona.
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