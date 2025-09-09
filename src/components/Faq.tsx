'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown } from 'lucide-react';
import AnimateInView from './AnimateInView';

// Conteúdo do FAQ totalmente reescrito para ser fiel ao seu sistema desktop.
const faqData = [
    {
        question: 'Onde os dados da minha empresa são armazenados? É seguro?',
        answer: 'Com certeza. Sua segurança e privacidade são a nossa maior prioridade. O sistema é 100% offline, o que significa que todos os seus dados (vendas, clientes, estoque) são salvos em um único arquivo de banco de dados (SQLite) diretamente no seu computador. Nada é enviado para a nuvem. Você tem controle total e absoluto sobre suas informações.'
    },
    {
        question: 'Como funciona a instalação? Preciso de um servidor?',
        answer: 'Não! A instalação é extremamente simples, como qualquer outro programa para Windows. Basta baixar o nosso instalador (.exe), executá-lo e seguir os passos. Em menos de um minuto, o sistema estará pronto para usar, sem necessidade de servidores, internet ou configurações complexas.'
    },
    {
        question: 'Como posso fazer um backup dos meus dados?',
        answer: 'Fazer backup é muito fácil. Como todos os seus dados ficam em um único arquivo no seu computador (o arquivo "estoque.db"), basta copiar este arquivo para um local seguro, como um pen drive, um HD externo ou o seu serviço de nuvem preferido (Google Drive, Dropbox, etc.).'
    },
    {
        question: 'Posso importar meus produtos e clientes de outro sistema?',
        answer: 'Sim! Para facilitar sua migração, o sistema permite a importação em massa de produtos, clientes e fornecedores a partir de arquivos CSV (planilhas). Você também pode exportar todos os seus dados a qualquer momento, garantindo total liberdade e controle sobre suas informações.'
    },
    {
        question: 'O sistema tem alguma mensalidade ou custo escondido?',
        answer: 'Não. O sistema é totalmente gratuito e de código aberto (open source). Você pode baixar e usar para sempre, sem nenhum custo de licença, mensalidade ou limite de usuários, produtos ou vendas. Nosso objetivo é oferecer uma ferramenta poderosa e acessível para todos.'
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id='faq' className="faq-section">
            <div className="container">
                <AnimateInView className="gallery-header">
                    <div className="benefits-badge">
                        <HelpCircle size={16} className="text-purple-400" />
                        <span>Dúvidas Frequentes</span>
                    </div>
                    {/* --- TÍTULO ATUALIZADO AQUI --- */}
                    <h2 className="benefits-title cta-title">
                        <span className="gradient-text-white">Perguntas </span>
                        <span className="gradient-text-colored">e Respostas</span>
                    </h2>
                    <p className="benefits-subtitle">
                        Tudo o que você precisa saber para começar a transformar sua gestão com nosso ERP.
                    </p>
                </AnimateInView>

                <AnimateInView className="faq-container" delay={0.2}>
                    {faqData.map((item, index) => (
                        <div key={index} className="faq-item">
                            <button className="faq-question" onClick={() => toggleFaq(index)}>
                                <span>{item.question}</span>
                                <motion.div
                                    className="faq-icon"
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p className="faq-answer">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </AnimateInView>
            </div>
        </section>
    );
}