'use client';

import { motion } from 'framer-motion';
import Link from 'next/link'; // <-- CORREÇÃO: Importado de 'next/link'
import { Download as DownloadIcon, HardDrive, Cpu, Database, ShieldCheck } from 'lucide-react'; // <-- CORREÇÃO: 'Link' removido daqui
import AnimateInView from './AnimateInView';

// Ícone do Windows (mantido como está)
const WindowsIcon = () => (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3,12V6.75L9,5.43V11.91L3,12M10,5.21L21,3V11.79L10,11.9V5.21M3,13L9,13.09V18.57L3,17.25V13M10,13.1L21,13.21V21L10,18.79V13.1Z" />
    </svg>
);

// Requisitos de sistema (mantidos como estão)
const requirements = [
    { icon: <Cpu size={16} />, text: 'Windows 10 (64-bit) ou superior' },
    { icon: <HardDrive size={16} />, text: '4GB RAM (8GB recomendado)' },
    { icon: <Database size={16} />, text: '200MB de espaço em disco' },
];

export default function Download() {
    return (
        <section id='download' className="download-section">
            <div className="container">
                <AnimateInView className="gallery-header">
                    <div className="benefits-badge">
                        <DownloadIcon size={16} className="text-blue-400" />
                        <span>Download para Windows</span>
                    </div>
                    {/* --- TÍTULO ATUALIZADO AQUI --- */}
                    <h2 className="benefits-title cta-title">
                        <span className="gradient-text-white">Comece a Usar </span>
                        <span className="gradient-text-colored">Agora</span>
                    </h2>
                    {/* CONTEÚDO ATUALIZADO */}
                    <p className="benefits-subtitle">
                        Baixe a versão mais recente do GestorX. A instalação é simples, rápida e 100% offline.
                    </p>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                    <div className="download-card-single">
                        <div className="download-card-icon">
                            <WindowsIcon />
                        </div>
                        <div className="download-card-info">
                            {/* CONTEÚDO ATUALIZADO */}
                            <h3>GestorX para Windows</h3>
                            <p>Primeira versão estável, compatível com sistemas 64-bit.</p>
                            <Link href="#" className="btn-download">
                                <DownloadIcon size={20} />
                                Baixar Agora (v1.0)
                            </Link>
                        </div>
                    </div>
                </AnimateInView>

                <AnimateInView delay={0.3}>
                    <div className="privacy-note">
                        <ShieldCheck size={48} className="text-emerald-400 flex-shrink-0" />
                        <p>
                            {/* CONTEÚDO ATUALIZADO */}
                            <strong>100% Offline. Seus Dados, Suas Regras.</strong>
                            O GestorX armazena tudo localmente no seu computador. Privacidade total, sem surpresas.
                        </p>
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}