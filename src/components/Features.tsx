// app/components/Features.tsx
'use client';

// Alterado: Novos ícones para representar os recursos reais
import { DollarSign, Package, Users, BarChart, TrendingUp, Shield, Tags, UserCog } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimateInView from './AnimateInView'
import Link from 'next/link'; // Adicione a importação do Link

// CORREÇÃO 2: Adicionada a propriedade 'accent' em cada objeto para corrigir o erro e reativar o efeito de brilho.
const features = [
    {
        icon: <DollarSign size={32} className="text-emerald-400" />,
        title: 'Módulo Financeiro Completo',
        description: 'Controle total do caixa com aberturas, fechamentos, sangrias e relatórios detalhados. Gerencie todas as entradas e saídas.',
        stats: 'Fluxo de Caixa',
        accent: 'accent-emerald'
    },
    {
        icon: <Package size={32} className="text-blue-400" />,
        title: 'Gestão de Estoque Avançada',
        description: 'Cadastro de produtos com código de barras, controle de validade, estoque mínimo, e suporte a produtos fracionados (unidade, kg, etc.).',
        stats: 'Importação via CSV',
        accent: 'accent-blue'
    },
    {
        icon: <Users size={32} className="text-purple-400" />,
        title: 'CRM (Clientes & Fornecedores)',
        description: 'Mantenha um cadastro completo de seus clientes e fornecedores. Importe e exporte listas em CSV para facilitar a migração e o backup.',
        stats: 'Relacionamento',
        accent: 'accent-purple'
    },
    {
        icon: <BarChart size={32} className="text-amber-400" />,
        title: 'Dashboard e Business Intelligence',
        description: 'Tome decisões com um painel visual que mostra faturamento, lucro líquido, ticket médio, produtos mais vendidos e alertas operacionais.',
        stats: 'Decisões com Dados',
        accent: 'accent-amber'
    },
    {
        icon: <Tags size={32} className="text-pink-400" />,
        title: 'Promoções Inteligentes',
        description: 'Crie promoções flexíveis por período. Aplique descontos a embalagens, unidades avulsas ou ambos, com cálculo automático de preços.',
        stats: 'Venda Mais',
        accent: 'accent-pink'
    },
    {
        icon: <UserCog size={32} className="text-cyan-400" />,
        title: 'Controle de Usuários',
        description: 'Crie perfis de usuário (Administrador, Comum) para controlar o acesso às diferentes áreas do sistema e visualize logs de atividades.',
        stats: 'Segurança e Auditoria',
        accent: 'accent-cyan'
    },
];

export default function Features() {
    return (
        <section id='recursos' className="features-section">
            <div className="relative container">
                {/* 
                  A CORREÇÃO FOI FEITA AQUI: 
                  Removemos a propriedade 'style' e adicionamos a classe 'mb-20' para o espaçamento.
                */}
                <AnimateInView className="benefits-header mb-20">
                    <div className="benefits-badge">
                        <BarChart size={16} className="text-blue-400" />
                        <span>Recursos Principais</span>
                    </div>
                    <h2 className="features-title cta-title">
                        <span className="gradient-text-white">Tudo que você precisa</span>
                        <br />
                        <span className="gradient-text-colored">em um só lugar</span>
                    </h2>
                    <p className="benefits-subtitle">
                        Funcionalidades robustas para automatizar e otimizar cada setor da sua empresa.
                    </p>
                </AnimateInView>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <AnimateInView key={index} delay={index * 0.1}>
                            <motion.div
                                whileHover={{ y: -12, scale: 1.02 }}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                className="feature-card"
                            >
                                <div className={`benefit-card-glow ${feature.accent}`}></div>
                                <div className="feature-card-content">
                                    <div className="benefit-card-icon">{feature.icon}</div>
                                    <div className="feature-card-badge"><span>{feature.stats}</span></div>
                                    <h3 className="feature-card-title">{feature.title}</h3>
                                    <p className="feature-card-description">{feature.description}</p>
                                    <a href="/funcionalidades/financeiro" className="feature-card-link">
                                        Saiba mais
                                        <span>→</span>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}
