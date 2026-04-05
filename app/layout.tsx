import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-pjs',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sanden Intercool - Giải Pháp Tủ Mát Chuẩn Nhật',
  description: 'Sanden Intercool - Giải pháp tủ mát chuẩn Nhật Bản. Lạnh sâu, bền bỉ, tiết kiệm điện 35%, bảo hành chính hãng tận nơi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
