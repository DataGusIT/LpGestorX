// app/layout.tsx
import { Inter, Raleway } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}