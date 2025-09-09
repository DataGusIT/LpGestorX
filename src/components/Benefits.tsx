// app/components/Benefits.tsx
'use client';

import { motion } from 'framer-motion';
// Alterado: Ícones que representam melhor os novos benefícios
import { CheckCircle, Database, Server, BarChart2, Sparkles } from 'lucide-react';
import AnimateInView from './AnimateInView';

// Alterado: Conteúdo dos benefícios totalmente reescrito
const benefits = [
    {
        icon: <Database size={28} className="text-blue-400" />,
        title: 'Total Privacidade (100% Offline)',
        description: 'Seus dados são armazenados localmente em um banco de dados SQLite. Sem nuvem, sem acesso externo. Controle total e segurança para sua empresa.',
        accent: 'accent-blue'
    },
    {
        icon: <Server size={28} className="text-emerald-400" />,
        title: 'Gestão de Estoque Detalhada',
        description: 'Controle de produtos por unidade ou fracionado (kg, L, etc.), alertas de estoque mínimo e monitoramento de data de validade para evitar perdas.',
        accent: 'accent-emerald'
    },
    {
        icon: <BarChart2 size={28} className="text-purple-400" />,
        title: 'Ponto de Venda (PDV) Integrado',
        description: 'Um PDV completo e ágil para registrar vendas, gerenciar o caixa, aplicar promoções, controlar formas de pagamento e cadastrar clientes na hora.',
        accent: 'accent-purple'
    },
    {
        icon: <CheckCircle size={28} className="text-amber-400" />,
        title: 'Código Aberto e Gratuito',
        description: 'Use, modifique e distribua sem custos de licença. O sistema é seu para adaptar conforme as necessidades do seu negócio.',
        accent: 'accent-amber'
    },
];

// O resto do componente (JSX) permanece o mesmo, ele apenas renderizará os novos dados.
export default function Benefits() {
    return (
        <section id='vantagens' className="benefits-section">
            <div className="relative container">
                <AnimateInView className="benefits-header">
                    <div className="benefits-badge">
                        <Sparkles size={16} className="text-blue-400" />
                        <span>Por que escolher o GestorX?</span>
                    </div>
                    {/* --- TÍTULO ATUALIZADO AQUI --- */}
                    <h2 className="benefits-title cta-title">
                        <span className="gradient-text-white">Vantagens que fazem </span>
                        <span className="gradient-text-colored">a diferença</span>
                    </h2>                    <p className="benefits-subtitle">
                        Construído para oferecer controle, segurança e eficiência para a gestão do seu negócio local.
                    </p>
                </AnimateInView>

                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <AnimateInView key={index} delay={index * 0.15}>
                            <motion.div
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                                className="benefit-card"
                            >
                                <div className={`benefit-card-glow ${benefit.accent}`}></div>
                                <div className="benefit-card-content">
                                    <div className="benefit-card-icon">{benefit.icon}</div>
                                    <h3 className="benefit-card-title">{benefit.title}</h3>
                                    <p className="benefit-card-description">{benefit.description}</p>
                                </div>
                            </motion.div>
                        </AnimateInView>
                    ))}
                </div>
            </div>
        </section>
    );
}