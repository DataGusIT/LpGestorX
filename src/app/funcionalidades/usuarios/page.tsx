"use client";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FinanceBackground from '@/components/FinanceBackground';
import { ShieldCheck, CheckCircle, ArrowRight, KeyRound, UserPlus, Activity, Download, Eye, UserCog } from 'lucide-react';
import AnimateInView from '@/components/AnimateInView';

// --- CONTEÚDO ATUALIZADO ---
// O conteúdo agora reflete as funcionalidades exatas do seu sistema PyQt5.
const userControlFeatures = [
    {
        icon: <UserPlus className="text-blue-400" />,
        title: "Cadastro de Usuários",
        description: "Adicione membros da sua equipe com nome, login, e-mail e nível de acesso. Mantenha um registro centralizado e organizado de todos os operadores.",
        highlight: "Equipe Organizada",
        gradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
        icon: <UserCog className="text-purple-400" />,
        title: "Gestão de Acesso Completa",
        description: "Defina o tipo de cada usuário (ex: admin) e controle o acesso com status 'Ativo' ou 'Inativo', além de poder resetar senhas com segurança.",
        highlight: "Controle Hierárquico",
        gradient: "from-purple-500/10 to-indigo-500/5"
    },
    {
        icon: <Activity className="text-amber-400" />,
        title: "Logs de Atividades Detalhados",
        description: "Monitore todas as ações com um log completo. Filtre por data, usuário ou nível de criticidade (INFO, WARNING, ERROR) para auditorias precisas.",
        highlight: "Rastreabilidade Total",
        gradient: "from-amber-500/10 to-yellow-500/5"
    },
    {
        icon: <ShieldCheck className="text-emerald-400" />,
        title: "Personalização e Segurança",
        description: "Configure informações da sua empresa para relatórios e personalize a logo do sistema, garantindo uma identidade visual profissional e segura.",
        highlight: "Identidade Segura",
        gradient: "from-emerald-500/10 to-green-500/5"
    }
];

const benefits = [
    "Segurança de dados reforçada",
    "Controle total de acesso",
    "Auditoria e rastreabilidade",
    "Delegação segura de tarefas"
];

export default function ControleUsuariosPage() {
    const visualRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const visualElement = visualRef.current;
        if (!visualElement) return;

        const core = visualElement.querySelector('.security-core');
        const rings = gsap.utils.toArray<HTMLDivElement>('.scanner-ring');
        const userCards = gsap.utils.toArray<HTMLDivElement>('.user-id-card');
        const uiOverlay = visualElement.querySelector('.users-ui-overlay');
        const activeUsersEl = visualElement.querySelector('.active-users-value');
        const rolesEl = visualElement.querySelector('.defined-roles-value');

        gsap.set(visualElement, { autoAlpha: 0 });
        gsap.set(core, { scale: 0, autoAlpha: 0 });
        gsap.set(rings, { scale: 0, autoAlpha: 0 });
        gsap.set(userCards, { scale: 0, autoAlpha: 0 });
        gsap.set(uiOverlay, { autoAlpha: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: visualElement,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });

        tl.to(visualElement, { autoAlpha: 1, duration: 0.5 });
        tl.to(core, { scale: 1, autoAlpha: 1, duration: 1, ease: 'elastic.out(1, 0.5)' });
        tl.to(rings, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out',
            onComplete: () => {
                gsap.to(rings, { opacity: 0, duration: 1, delay: 0.5 });
            }
        }, "-=0.7");
        tl.to(userCards, {
            scale: 1,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        }, "-=0.8");
        tl.to(uiOverlay, { autoAlpha: 1, duration: 0.7 }, "-=0.5");

        const counter = { users: 0, roles: 0 };
        tl.to(counter, {
            users: 8,
            roles: 4,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                if (activeUsersEl) activeUsersEl.textContent = Math.round(counter.users).toLocaleString('pt-BR');
                if (rolesEl) rolesEl.textContent = Math.round(counter.roles).toLocaleString('pt-BR');
            }
        }, "<");

        gsap.to(core, {
            rotation: 360,
            duration: 30,
            repeat: -1,
            ease: 'none'
        });

        return () => {
            gsap.killTweensOf(core);
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
                                <ShieldCheck size={16} />
                                <span>Controle de Usuários</span>
                            </div>
                            <h1 className="financeiro-hero-title">
                                Acesso Preciso e
                                <span className="financeiro-gradient-text"> Seguro para sua Equipe</span>
                            </h1>
                            <p className="financeiro-hero-description">
                                Gerencie quem acessa as informações do seu negócio. Defina permissões, monitore atividades e garanta a segurança dos seus dados com total controle.
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
                            <div ref={visualRef} className="security-hero-visual">
                                <div className="scanner-ring ring-1"></div>
                                <div className="scanner-ring ring-2"></div>
                                <div className="scanner-ring ring-3"></div>
                                <div className="security-core">
                                    <ShieldCheck size={48} />
                                </div>
                                <div className="user-id-card card-admin">
                                    <span className="user-avatar ua-1"></span>
                                    <div className="user-info"><strong>Ana Souza</strong><span>Administrador</span></div>
                                </div>
                                <div className="user-id-card card-manager">
                                    <span className="user-avatar ua-2"></span>
                                    <div className="user-info"><strong>Bruno Costa</strong><span>Gerente</span></div>
                                </div>
                                <div className="user-id-card card-seller">
                                    <span className="user-avatar ua-3"></span>
                                    <div className="user-info"><strong>Carla Dias</strong><span>Vendedor</span></div>
                                </div>
                                <div className="user-id-card card-stock">
                                    <span className="user-avatar ua-4"></span>
                                    <div className="user-info"><strong>Daniel Lima</strong><span>Estoquista</span></div>
                                </div>
                                <div className="users-ui-overlay">
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Usuários Ativos</span>
                                        <span className="ui-metric-value active-users-value">0</span>
                                    </div>
                                    <div className="ui-metric">
                                        <span className="ui-metric-label">Níveis Definidos</span>
                                        <span className="ui-metric-value defined-roles-value">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- FEATURES GRID (Conteúdo fiel ao sistema) --- */}
                    <AnimateInView delay={0.1}>
                        <div className="financeiro-features-section">
                            <div className="financeiro-section-header">
                                <h2 className="financeiro-section-title">Gerenciamento Centralizado</h2>
                                <p className="financeiro-section-subtitle">
                                    Ferramentas completas para delegar tarefas com segurança e eficiência.
                                </p>
                            </div>
                            <div className="financeiro-features-grid">
                                {userControlFeatures.map((feature, index) => (
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
                                        <Eye size={16} />
                                        <span>Logs de Auditoria</span>
                                    </div>
                                    <h2 className="financeiro-showcase-title">
                                        Rastreabilidade Completa
                                        <span className="financeiro-gradient-text"> de Ações</span>
                                    </h2>
                                    <p className="financeiro-showcase-description">
                                        Tenha um registro detalhado de todas as operações críticas. Saiba quem, quando e o que foi alterado no sistema, garantindo total transparência e segurança para sua gestão.
                                    </p>
                                    <div className="financeiro-showcase-stats">
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">100%</span>
                                            <span className="financeiro-stat-label">Auditável</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Segurança</span>
                                            <span className="financeiro-stat-label">Avançada</span>
                                        </div>
                                        <div className="financeiro-stat-item">
                                            <span className="financeiro-stat-number">Conformidade</span>
                                            <span className="financeiro-stat-label">Garantida</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="financeiro-showcase-image">
                                    <div className="financeiro-image-frame">
                                        <Image
                                            src="/images/gallery-users.png" // Mantenha a imagem do log
                                            alt="Tela de log de auditoria do GestorX"
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
                                    Pronto para elevar a <span className="financeiro-gradient-text">segurança</span> da sua gestão?
                                </h2>
                                <p className="financeiro-cta-description">
                                    Baixe o GestorX e tenha controle total sobre quem acessa as informações do seu negócio.
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