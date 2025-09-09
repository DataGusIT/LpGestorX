// src/components/FinanceBackground.tsx

'use client'; // Necessário para usar estilos que podem ser dinâmicos

export default function FinanceBackground() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                backgroundImage: `
                    radial-gradient(circle at 15% 20%, rgba(139, 92, 246, 0.15), transparent 40%),
                    radial-gradient(circle at 85% 80%, rgba(16, 185, 129, 0.15), transparent 45%),
                    radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1), transparent 50%)
                `,
                backgroundSize: '200% 200%',
                animation: 'moveGradients 40s ease-in-out infinite alternate',
            }}
        />
    );
}