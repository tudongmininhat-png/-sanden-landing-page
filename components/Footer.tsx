'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer section">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <span className="logo-sanden">Sanden</span>
            <span className="logo-intercool">Intercool</span>
          </Link>
          <p className="footer__tagline">
            Giải pháp làm lạnh đỉnh cao Nhật Bản.<br />
            Đồng hành cùng sự thịnh vượng của bạn.
          </p>
        </div>
        <div className="footer__links-group">
          <div className="footer__links">
            <h4 className="footer__title">Khám Phá</h4>
            <ul>
              <li><Link href="#pain-points">Thách Thức</Link></li>
              <li><Link href="#features">Công Nghệ</Link></li>
              <li><Link href="#comparison">So Sánh</Link></li>
              <li><Link href="#testimonials">Đối Tác</Link></li>
            </ul>
          </div>
          <div className="footer__links">
            <h4 className="footer__title">Liên Hệ</h4>
            <ul className="footer__contact">
              <li>📞 +84-028-62-766-012</li>
              <li>📧 siv@sandenintercool.com</li>
              <li>📍 Thới An, Q.12, TP.HCM</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Sanden Intercool Vietnam. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          padding: 8rem 0 4rem;
          background: var(--surface-container-high);
          border-top: 1px solid rgba(255, 255, 255, 0.4);
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          margin-bottom: 6rem;
        }

        .footer__logo {
          display: flex;
          align-items: baseline;
          gap: 0.2rem;
          font-family: var(--font-pjs), sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -0.04em;
          margin-bottom: 2rem;
        }

        .logo-sanden { color: var(--primary); }
        .logo-intercool { color: var(--outline); font-weight: 600; font-size: 1.25rem; }

        .footer__tagline {
          font-size: 1.125rem;
          color: var(--on-surface-variant);
          line-height: 1.7;
          font-weight: 500;
        }

        .footer__links-group {
          display: flex;
          gap: 6rem;
        }

        .footer__title {
          font-size: 0.8125rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--on-surface);
          margin-bottom: 2.5rem;
        }

        .footer__links ul {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .footer__links li {
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--on-surface-variant);
          transition: var(--transition-smooth);
        }

        .footer__links a:hover {
          color: var(--primary);
          padding-left: 5px;
        }

        .footer__contact {
           gap: 1.5rem;
        }

        .footer__bottom {
          padding-top: 4rem;
          border-top: 1px solid rgba(0, 95, 157, 0.05);
          text-align: center;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--outline);
        }

        @media (max-width: 900px) {
          .footer__grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .footer__logo { justify-content: center; }
          .footer__links-group { flex-direction: column; gap: 4rem; align-items: center; }
          .footer__links { text-align: center; }
        }
      `}</style>
    </footer>
  );
}
