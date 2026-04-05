'use client';

import Image from 'next/image';

export function TechFeatures() {
  const features = [
    {
      title: 'Hệ Thống Gas R600a',
      desc: 'Công nghệ làm lạnh sâu tinh khiết, tiết kiệm điện 35% và thân thiện 100% với môi trường.',
      img: 'https://sandenintercool.net/wp-content/uploads/2021/05/TU-DONG-TU-MAT.png'
    },
    {
      title: 'Công Nghệ Inverter Nhật Bản',
      desc: 'Vận hành máy nén thông minh, giảm thiểu tiếng ồn và duy trì nhiệt độ ổn định tuyệt đối.',
      img: 'https://tudongtumat.com/wp-content/uploads/2021/12/tu-mat-inverter-sanden.jpg'
    }
  ];

  return (
    <section className="tech-features" id="features">
      <div className="container">
        <span className="editorial-label">Tinh Hoa Cơ Khí</span>
        <h2 className="editorial-title">Trái Tim Làm Lạnh<br />Chiếm Trọn Sự Tin Tưởng</h2>
        <div className="tech-features__grid">
          {features.map((f, i) => (
            <div key={i} className="tech-card">
              <div className="tech-card__image">
                <Image src={f.img} alt={f.title} width={600} height={400} className="tech-img" />
              </div>
              <div className="tech-card__content">
                <h3 className="tech-card__title">{f.title}</h3>
                <p className="tech-card__desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .tech-features {
          padding: 10rem 0;
          background: var(--surface-container-low);
          text-align: center;
        }

        .tech-features__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          margin-top: 5rem;
        }

        .tech-card {
          background: var(--surface-container-lowest);
          border-radius: 2.5rem;
          padding: 2.5rem;
          text-align: left;
          transition: var(--transition-smooth);
          box-shadow: 0 10px 30px rgba(0, 95, 157, 0.04);
        }

        .tech-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 40px 80px rgba(0, 95, 157, 0.1);
        }

        .tech-card__image {
          border-radius: 1.5rem;
          overflow: hidden;
          margin-bottom: 2.5rem;
          background: var(--surface-container);
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 16 / 10;
        }

        :global(.tech-img) {
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 1s ease;
        }

        .tech-card:hover :global(.tech-img) {
           transform: scale(1.05);
        }

        .tech-card__title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--on-surface);
          margin-bottom: 1rem;
        }

        .tech-card__desc {
          font-size: 1rem;
          color: var(--on-surface-variant);
          line-height: 1.7;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .tech-features__grid { 
            grid-template-columns: 1fr; 
            gap: 2rem;
          }
          .tech-card {
            padding: 2rem;
            text-align: center;
          }
          .tech-card__image {
            margin-bottom: 2rem;
          }
           .tech-features { padding: 6rem 0; }
        }
      `}</style>
    </section>
  );
}

export function Clients() {
  const logos = ['Coca-Cola', 'Pepsi', 'Heineken', '7-Eleven', 'FamilyMart', 'Nestle'];
  return (
    <section className="clients" id="clients">
      <div className="container">
        <span className="editorial-label">Đối Tác Chiến Lược</span>
        <h2 className="editorial-title">Được Tin Dùng Bởi Các<br />Thương Hiệu Hàng Đầu</h2>
        <div className="clients__logos">
          {logos.map(l => (
            <div key={l} className="client-logo">{l}</div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .clients {
          padding: 8rem 0;
          background: var(--surface);
          text-align: center;
        }

        .clients__logos {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4rem;
          flex-wrap: wrap;
          margin-top: 4rem;
          opacity: 0.6;
        }

        .client-logo {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--outline);
          transition: var(--transition-smooth);
        }

        .client-logo:hover {
          color: var(--primary);
          transform: scale(1.1);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

export function ComparisonTable() {
  return (
    <section className="comparison" id="comparison">
      <div className="container">
        <span className="editorial-label">Đáng Giá Đến Từng Đồng</span>
        <h2 className="editorial-title">Vượt Trội Qua Những Con Số</h2>
        <div className="comparison__table-wrapper">
          <table className="comparison__table">
            <thead>
              <tr>
                <th>Thông số công nghệ</th>
                <th>Tủ mát phổ thông</th>
                <th className="comparison__exclusive">Sanden Intercool Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chi phí điện/tháng</td>
                <td>~350.000 VNĐ</td>
                <td className="comparison__exclusive"><strong>~220.000 VNĐ</strong></td>
              </tr>
              <tr>
                <td>Công nghệ Dàn lạnh</td>
                <td>Nhôm / Sắt (Dễ Oxi hóa)</td>
                <td className="comparison__exclusive"><strong>100% Đồng Nguyên Chất</strong></td>
              </tr>
              <tr>
                <td>Tuổi thọ bình quân</td>
                <td>3 – 5 năm</td>
                <td className="comparison__exclusive"><strong>Trên 10 năm (Theo TC Nhật)</strong></td>
              </tr>
              <tr>
                <td>Khả năng nạp Gas</td>
                <td>Gas R134a (Cũ)</td>
                <td className="comparison__exclusive"><strong>Gas R600a (Thế hệ mới)</strong></td>
              </tr>
            </tbody>
          </table>
          <p className="comparison__note">* Dựa trên dữ liệu khảo sát tại các chuỗi siêu thị tiện lợi năm 2026</p>
        </div>
      </div>
      <style jsx>{`
        .comparison {
          padding: 10rem 0;
          background: var(--surface);
          text-align: center;
        }

        .comparison__table-wrapper {
          overflow-x: auto;
          margin-top: 5rem;
          padding: 2rem 0;
          -webkit-overflow-scrolling: touch;
        }

        .comparison__table {
          width: 100%;
          min-width: 800px; /* Force overflow on small screens */
          border-collapse: separate;
          border-spacing: 0;
          font-size: 1.125rem;
          background: var(--surface-container-lowest);
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 40px 100px rgba(0, 95, 157, 0.08);
        }

        @media (max-width: 768px) {
          .comparison__table-wrapper { 
            margin-top: 3rem; 
            padding: 1rem 0;
          }
          .comparison { padding: 6rem 0; }
        }

        .comparison__table thead th {
          padding: 2.5rem;
          font-weight: 800;
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-align: left;
          color: var(--outline);
          background: var(--surface-container-high);
        }

        .comparison__table thead th.comparison__exclusive {
          background: var(--primary);
          color: #fff;
          font-size: 0.9375rem;
        }

        .comparison__table tbody td {
          padding: 1.75rem 2.5rem;
          text-align: left;
          color: var(--on-surface-variant);
          border-bottom: 1.5px solid var(--surface-container);
          font-weight: 500;
        }

        .comparison__table tbody td.comparison__exclusive {
          background: rgba(0, 95, 157, 0.02);
          border-left: 4px solid var(--primary);
          color: var(--on-surface);
        }

        .comparison__note {
          font-size: 0.875rem;
          color: var(--outline);
          margin-top: 2rem;
          text-align: right;
          font-style: italic;
        }
      `}</style>
    </section>
  );
}

export function Testimonials() {
  const reviews = [
    {
      name: 'Nguyễn Diệu Linh',
      role: 'Quản lý chuỗi WinMart+',
      text: '"Sanden Intercool là lựa chọn ưu tiên hàng đầu của chúng tôi. Độ lạnh sâu và cực kỳ ổn định, bảo quản hàng hóa tuyệt đối an toàn."',
      avatar: 'DL'
    },
    {
      name: 'Trần Văn Mạnh',
      role: 'Chủ chuỗi Café Highland',
      text: '"Máy nén Inverter hoạt động êm ái, hóa đơn tiền điện giảm rõ rệt giúp tối ưu chi phí vận hành cho cả hệ thống của tôi."',
      avatar: 'VM'
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <span className="editorial-label">Người Thật & Việc Thật</span>
        <h2 className="editorial-title">Lời Khẳng Định Từ<br />Chính Đối Tác</h2>
        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div key={i} className="test-card">
              <p className="test-card__text">{r.text}</p>
              <div className="test-card__author">
                <div className="test-card__avatar">{r.avatar}</div>
                <div>
                  <p className="test-card__name">{r.name}</p>
                  <p className="test-card__role">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .testimonials {
          padding: 10rem 0;
          background: var(--surface-container);
          text-align: center;
        }

        .testimonials__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 3rem;
          margin-top: 5rem;
        }

        .test-card {
           background: var(--surface-container-lowest);
           border-radius: 2.5rem;
           padding: 4rem;
           text-align: left;
           transition: var(--transition-smooth);
           box-shadow: 0 20px 40px rgba(0, 95, 157, 0.05);
        }

        .test-card:hover {
           transform: translateY(-8px);
           box-shadow: 0 40px 80px rgba(0, 95, 157, 0.1);
        }

        .test-card__text {
           font-size: 1.125rem;
           line-height: 1.8;
           color: var(--on-surface-variant);
           font-style: italic;
           margin-bottom: 3rem;
           font-weight: 500;
        }

        .test-card__author {
           display: flex;
           align-items: center;
           gap: 1.5rem;
        }

        .test-card__avatar {
           width: 56px;
           height: 56px;
           border-radius: 1.25rem;
           background: var(--primary);
           color: #fff;
           display: flex;
           align-items: center;
           justify-content: center;
           font-weight: 800;
           font-size: 1rem;
        }

        .test-card__name { font-weight: 800; color: var(--on-surface); font-size: 1.1rem; }
        .test-card__role { font-size: 0.8125rem; color: var(--outline); font-weight: 600; }

        @media (max-width: 768px) {
          .testimonials__grid { 
            grid-template-columns: 1fr; 
            gap: 2rem;
            margin-top: 3rem;
          }
          .test-card {
            padding: 2.5rem 2rem;
          }
          .test-card__text {
            font-size: 1rem;
            margin-bottom: 2rem;
          }
          .testimonials { padding: 6rem 0; }
        }
      `}</style>
    </section>
  );
}
