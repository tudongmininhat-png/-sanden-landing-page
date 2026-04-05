'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background"></div>
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="editorial-label">Tinh Hoa Công Nghệ Nhật Bản</span>
          <h1 className="editorial-title">
            Đẳng Cấp<br />
            <span className="hero__title-accent">Làm Lạnh</span><br />
            Chuyên Nghiệp
          </h1>
          <p className="hero__desc">
            Vượt xa ngoài công nghệ bảo quản, Sanden Intercool mang đến sự an tâm tuyệt đối cho doanh nghiệp với độ bền bỉ thách thức thời gian và hiệu quả tiết kiệm điện vượt bậc.
          </p>
          <div className="hero__actions">
            <Link href="#contact" className="btn btn--primary">Nhận báo giá ngay</Link>
            <Link href="tel:0949345019" className="btn btn--ghost">GỌI HOTLINE</Link>
          </div>
        </div>
        <div className="hero__image-container">
          <div className="hero__image-wrapper">
             <Image
              src="https://tudongtumat.com/wp-content/uploads/2022/07/cover-danh-muc-3-canh-1.jpeg"
              alt="Sanden Intercool Premium Solutions"
              width={1000}
              height={700}
              priority
              className="hero__img"
            />
            <div className="hero__img-overlay"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          padding-top: 10rem;
          padding-bottom: 8rem;
          background: var(--surface);
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero__background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 10% 20%, rgba(0, 95, 157, 0.04) 0%, transparent 50%);
          z-index: 1;
        }

        .hero__grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
          align-items: center;
        }

        .hero__title-accent {
          color: var(--primary);
        }

        .hero__desc {
          font-size: 1.125rem;
          color: var(--on-surface-variant);
          line-height: 1.8;
          max-width: 580px;
          margin-bottom: 3.5rem;
          font-weight: 500;
        }

        .hero__actions {
          display: flex;
          gap: 1.5rem;
        }

        .hero__image-container {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-left: 2rem;
        }

        .hero__image-wrapper {
          position: relative;
          width: 130%;
          transform: translateX(15%);
          z-index: 1;
        }

        :global(.hero__img) {
          border-radius: 2.5rem;
          box-shadow: 0 40px 100px rgba(0, 95, 157, 0.15);
          filter: contrast(1.05);
          width: 100%;
          height: auto;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero:hover :global(.hero__img) {
          transform: scale(1.02) translateX(-10px);
        }

        .hero__img-overlay {
          position: absolute;
          inset: 0;
          border-radius: 2.5rem;
          background: linear-gradient(135deg, rgba(0, 95, 157, 0.05) 0%, transparent 100%);
          pointer-events: none;
        }

        @media (max-width: 1100px) {
          .hero__grid { 
            grid-template-columns: 1fr; 
            gap: 4rem; 
            text-align: center; 
          }
          .hero__content { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            order: 1;
          }
          .hero__desc { 
            margin-left: auto; 
            margin-right: auto; 
            font-size: 1rem;
            margin-bottom: 2.5rem;
          }
          .hero__actions { 
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
          .hero__image-container { 
            padding-left: 0; 
            justify-content: center; 
            order: 2;
          }
          .hero__image-wrapper { 
            width: 100%; 
            transform: none; 
          }
          .hero { padding-top: 8rem; padding-bottom: 4rem; }
          :global(.hero__img) {
            border-radius: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
