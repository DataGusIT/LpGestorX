// app/components/Hero.tsx
'use client';

// Você pode remover o import de 'motion' se não o usar em outros lugares,
// mas vamos mantê-lo para as animações de entrada.
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
    return (
        // Usando a classe CSS que criamos
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-badge"
                >
                    <div className="hero-badge-dot"></div>
                    <span>Sistema ERP Open Source</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="hero-title"
                >
                    <span className="gradient-text-white">A revolução da gestão</span>
                    <br />
                    <span className="gradient-text-colored">ao seu alcance</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-paragraph"
                >
                    Um sistema ERP open source, <span className="text-blue">poderoso</span> e <span className="text-purple">intuitivo</span>, projetado para escalar com o seu negócio.
                    <span className="subtext">Sem amarras, sem limites.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="hero-buttons-container"
                >
                    <a href="#" className="btn btn-primary">
                        <span>Solicitar Demo</span>
                        <ArrowRight size={20} />
                    </a>

                    <a href="#" className="btn btn-secondary">
                        <Play size={18} />
                        <span>Ver no GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}