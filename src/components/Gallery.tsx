'use client';

import { useState } from 'react';
import Image from 'next/image'; // 1. Importado o componente Image do Next.js
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react'; // Removido 'Maximize' que não estava sendo usado
import AnimateInView from './AnimateInView';

// Lista de imagens atualizada para refletir as telas reais do seu sistema.
// Coloque seus screenshots na pasta `public/images/` e use os caminhos abaixo.
const galleryImages = [
    { src: '/images/gallery-dashboard.png', alt: 'Dashboard Principal do ERP' },
    { src: '/images/gallery-pdv.png', alt: 'Tela de Análises de Business Intelligence' },
    { src: '/images/gallery-estoque.png', alt: 'Tela de Relatórios Financeiros' },
    { src: '/images/gallery-cliente.png', alt: 'Tela de Gestão de Estoque' },
    { src: '/images/gallery-fornecedores.png', alt: 'Tela do Módulo de CRM' },
    { src: '/images/gallery-promocoes.png', alt: 'Tela de Configurações do Sistema' },
];

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="gallery-section">
            <div className="container">
                <AnimateInView className="gallery-header">
                    <div className="benefits-badge">
                        <ImageIcon size={16} className="text-blue-400" />
                        <span>Interface em Ação</span>
                    </div>
                    <h2 className="benefits-title cta-title">
                        <span className="gradient-text-white">Uma Experiência </span>
                        <span className="gradient-text-colored">de Uso Incrível</span>
                    </h2>
                    <p className="benefits-subtitle">
                        Navegue por algumas das telas chave do nosso sistema. Design limpo, moderno e focado em produtividade.
                    </p>
                </AnimateInView>

                <AnimateInView delay={0.2}>
                    <div className="gallery-main-image-wrapper">
                        <AnimatePresence mode="wait">
                            {/* 2. A animação agora envolve o componente <Image> */}
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Image
                                    src={galleryImages[activeIndex].src}
                                    alt={galleryImages[activeIndex].alt}
                                    width={1920} // <-- IMPORTANTE: Substitua pela largura real da sua imagem
                                    height={1080} // <-- IMPORTANTE: Substitua pela altura real da sua imagem
                                    sizes="(max-width: 1024px) 100vw, 80vw"
                                    className="gallery-main-image"
                                    priority // Ajuda a carregar a imagem principal mais rápido
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="gallery-thumbnails">
                        {galleryImages.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`thumbnail-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* 3. Tag <img> substituída pelo componente <Image> otimizado */}
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={320} // <-- Use uma largura menor para as miniaturas
                                    height={180} // <-- Use uma altura menor para as miniaturas
                                    sizes="(max-width: 768px) 33vw, 15vw"
                                    className="thumbnail-image"
                                />
                            </motion.div>
                        ))}
                    </div>
                </AnimateInView>
            </div>
        </section>
    );
}