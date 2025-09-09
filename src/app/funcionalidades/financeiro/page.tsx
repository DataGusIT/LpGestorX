// app/funcionalidades/financeiro/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header'; // <-- 1. IMPORTADO O HEADER
import Footer from '@/components/Footer'; // <-- 2. IMPORTADO O FOOTER
import FinanceBackground from '@/components/FinanceBackground'; // <-- 2. IMPORTADO O BACKGROUND
import { Download, Banknote, TrendingUp, Box, DollarSign, ArrowRight, CheckCircle, BarChart3, Zap } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

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
                    <AnimateInView>
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
                                <div className="financeiro-floating-card">
                                    <div className="financeiro-card-header">
                                        <div className="financeiro-status-indicator"></div>
                                        <span>Dashboard Financeiro</span>
                                    </div>
                                    <div className="financeiro-chart-simulation">
                                        <div className="financeiro-chart-bar" style={{ height: '60%' }}></div>
                                        <div className="financeiro-chart-bar" style={{ height: '80%' }}></div>
                                        <div className="financeiro-chart-bar" style={{ height: '45%' }}></div>
                                        <div className="financeiro-chart-bar" style={{ height: '90%' }}></div>
                                        <div className="financeiro-chart-bar" style={{ height: '70%' }}></div>
                                    </div>
                                    <div className="financeiro-metrics">
                                        <div className="financeiro-metric">
                                            <span className="financeiro-metric-label">Faturamento</span>
                                            <span className="financeiro-metric-value">R$ 45.670</span>
                                        </div>
                                        <div className="financeiro-metric">
                                            <span className="financeiro-metric-label">Lucro</span>
                                            <span className="financeiro-metric-value text-emerald-400">+28.5%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimateInView>

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
                                            src="/images/gallery-relatorio.png"
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