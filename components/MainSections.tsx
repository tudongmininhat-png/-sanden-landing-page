'use client';

import Image from 'next/image';
import Link from 'next/link';

export function PainPoints() {
  const points = [
    {
      title: 'Tủ Không Đủ Lạnh',
      desc: 'Nhiệt độ không ổn định làm biến chất thực phẩm, phá hủy doanh thu trầm trọng.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v6l3 3"/><circle cx="12" cy="14" r="8"/><path d="M12 10v4l2 2"/></svg>
    },
    {
      title: 'Hóa Đơn Điện Cao',
      desc: 'Máy nén cũ kỹ ngốn điện năng cực lớn, "ăn mòn" lợi nhuận mỗi kỳ thanh toán.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    },
    {
      title: 'Tủ Hỏng Liên Miên',
      desc: 'Gián đoạn kinh doanh do lỗi block, rò gas. Chi phí sửa chữa ngày càng đắt đỏ.',
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
    }
  ];

  return (
    <section className="pain-points" id="pain-points">
      <div className="container">
        <div className="pain-points__header">
          <span className="editorial-label">Thách Thức Của Doanh Nghiệp</span>
          <h2 className="editorial-title">Nỗi Lo Thường Trực Khi<br />Chọn Tủ Mát Kém Chất Lượng</h2>
        </div>
        <div className="pain-points__grid">
          {points.map((point, index) => (
            <div key={index} className="pain-card">
              <div className="pain-card__icon">{point.icon}</div>
              <h3 className="pain-card__title">{point.title}</h3>
              <p className="pain-card__desc">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .pain-points {
          padding: 10rem 0;
          background: var(--surface-container); /* Tonal shift from base surface */
          position: relative;
        }

        .pain-points__header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .pain-points__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .pain-card {
          background: var(--surface-container-lowest);
          border-radius: 2rem;
          padding: 4rem 3rem;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
          box-shadow: 0 4px 20px rgba(0, 95, 157, 0.02);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        @media (max-width: 768px) {
          .pain-card {
            padding: 2.5rem 2rem;
            align-items: center;
            text-align: center;
          }
          .pain-points { padding: 6rem 0; }
        }

        .pain-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 95, 157, 0.08);
        }

        .pain-card__icon {
          width: 64px;
          height: 64px;
          border-radius: 1.25rem;
          background: var(--surface-container-low);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
          transition: transform 0.4s var(--transition-bounce);
        }

        .pain-card:hover .pain-card__icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 20px rgba(0, 95, 157, 0.1);
        }

        .pain-card__title {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--on-surface);
          margin-bottom: 1.25rem;
        }

        .pain-card__desc {
          font-size: 1rem;
          color: var(--on-surface-variant);
          line-height: 1.7;
          font-weight: 500;
        }
      `}</style>
    </section>
  );
}

export function ValueProp() {
  const items = [
    {
      title: 'Tiên Phong Inverter Nhật Bản',
      desc: 'Giảm hóa đơn điện 35% mỗi kỳ nhờ công nghệ Inverter biến tần tối ưu hóa vận hành máy nén.',
      icon: '01'
    },
    {
      title: 'Độ Bền Bỉ Thách Thức Thời Gian',
      desc: 'Dàn lạnh 100% đồng nguyên chất chịu đựng được mọi môi trường khắc nghiệt nhất tại Việt Nam.',
      icon: '02'
    },
    {
      title: 'Dịch Vụ Tận Tâm Toàn Quốc',
      desc: 'Giao hàng và lắp đặt miễn phí, bảo hành chính hãng có mặt nhanh chóng hỗ trợ kinh doanh.',
      icon: '03'
    }
  ];

  return (
    <section className="value-prop" id="value-prop">
      <div className="container">
        <div className="value-prop__grid">
          <div className="value-prop__content">
            <span className="editorial-label">Tại Sao Chọn Sanden?</span>
            <h2 className="editorial-title">Công Nghệ Định Nghĩa Sự An Tâm Tuyệt Đối</h2>
            <div className="value-prop__items">
              {items.map((item, index) => (
                <div key={index} className="value-item">
                  <div className="value-item__marker">{item.icon}</div>
                  <div className="value-item__text">
                    <h3 className="value-item__title">{item.title}</h3>
                    <p className="value-item__desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="value-prop__action">
              <Link href="#contact" className="btn btn--primary">Nhận báo giá 2026 ngay</Link>
            </div>
          </div>
          <div className="value-prop__image">
            <div className="vp-img-container">
              <Image 
                src="https://tudongtumat.com/wp-content/uploads/2021/11/spb-0400-anh-bia-san-pham--500x501.jpeg"
                alt="Sanden Inverter Compressor Tech"
                width={700}
                height={800}
                className="vp-img"
              />
              <div className="vp-img-glow"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .value-prop {
          padding: 10rem 0;
          background: var(--surface);
          overflow: hidden;
        }

        .value-prop__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .value-prop__items {
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
          margin-bottom: 4rem;
        }

        .value-item {
          display: flex;
          gap: 2rem;
          position: relative;
        }

        .value-item__marker {
          font-family: var(--font-pjs), sans-serif;
          font-size: 0.8125rem;
          font-weight: 800;
          color: var(--primary);
          opacity: 0.3;
          margin-top: 0.5rem;
        }

        .value-item__title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--on-surface);
          margin-bottom: 0.75rem;
        }

        .value-item__desc {
          font-size: 1rem;
          color: var(--on-surface-variant);
          line-height: 1.7;
          font-weight: 500;
        }

        .value-prop__image {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .vp-img-container {
          position: relative;
          width: 100%;
          transform: rotate(2deg);
        }

        :global(.vp-img) {
          border-radius: 2.5rem;
          box-shadow: 0 40px 100px rgba(0, 95, 157, 0.12);
          width: 100%;
          height: auto;
          transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .value-prop:hover :global(.vp-img) {
          transform: rotate(-2deg) scale(1.03);
        }

        .vp-img-glow {
          position: absolute;
          inset: -4rem;
          background: radial-gradient(circle, rgba(0, 95, 157, 0.08) 0%, transparent 70%);
          z-index: -1;
        }

        @media (max-width: 1024px) {
          .value-prop__grid { 
            grid-template-columns: 1fr; 
            gap: 4rem; 
            text-align: center; 
          }
          .value-prop__content { 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
          }
          .value-item { 
            flex-direction: column; 
            align-items: center; 
            gap: 1rem;
          }
          .value-item__marker { 
            margin-top: 0;
          }
          .value-prop__image { 
            max-width: 100%; 
            margin: 0 auto; 
          }
          .value-prop { padding: 6rem 0; }
        }
      `}</style>
    </section>
  );
}
