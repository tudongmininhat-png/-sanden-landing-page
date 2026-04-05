'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <nav className="nav container">
        <Link href="/" className="nav__logo">
          <span className="logo-sanden">Sanden</span>
          <span className="logo-intercool">Intercool</span>
        </Link>
        <ul className="nav__menu hide-on-mobile">
          <li><Link href="#pain-points" className="nav__link">Vấn Đề</Link></li>
          <li><Link href="#features" className="nav__link">Công Nghệ</Link></li>
          <li><Link href="#comparison" className="nav__link">So Sánh</Link></li>
          <li><Link href="#testimonials" className="nav__link">Đánh Giá</Link></li>
        </ul>
        <div className="nav__actions hide-on-mobile">
          <Link href="#contact" className="nav__cta">
            Yêu cầu báo giá
          </Link>
        </div>
        <button 
          className={`nav__toggle ${isMenuOpen ? 'nav__toggle--active' : ''}`} 
          onClick={toggleMenu} 
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--active' : ''}`}>
          <ul className="mobile-menu__links">
            <li><Link href="#pain-points" onClick={closeMenu}>Vấn Đề</Link></li>
            <li><Link href="#features" onClick={closeMenu}>Công Nghệ</Link></li>
            <li><Link href="#comparison" onClick={closeMenu}>So Sánh</Link></li>
            <li><Link href="#testimonials" onClick={closeMenu}>Đánh Giá</Link></li>
            <li>
              <Link href="#contact" className="nav__cta" onClick={closeMenu}>
                Báo giá 2026
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1.5rem 0;
        }

        .header--scrolled {
          padding: 0;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 0 4px 30px rgba(0, 95, 157, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 4.5rem;
        }

        .nav__logo {
          font-family: var(--font-pjs), sans-serif;
          font-weight: 800;
          font-size: 1.4rem;
          letter-spacing: -0.04em;
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
        }

        .logo-sanden {
          color: var(--primary);
        }

        .logo-intercool {
          color: var(--outline);
          font-weight: 600;
          font-size: 1.1rem;
        }

        .nav__menu {
          display: flex;
          gap: 2.5rem;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav__link {
          font-size: 0.8125rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--on-surface-variant);
          transition: color 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav__link:hover {
          color: var(--primary);
        }

        .nav__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: width 0.4s var(--transition-bounce);
        }

        .nav__link:hover::after {
          width: 100%;
        }

        .nav__cta {
          display: inline-flex;
          align-items: center;
          padding: 0.7rem 1.75rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%);
          color: #fff;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border-radius: var(--radius-full);
          transition: all 0.4s var(--transition-bounce);
          box-shadow: 0 10px 20px rgba(0, 95, 157, 0.2);
        }

        .nav__cta:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 95, 157, 0.3);
        }

        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2001;
          position: relative;
          padding: 10px;
        }

        .nav__toggle span {
          width: 28px;
          height: 2px;
          background: var(--on-surface);
          border-radius: 2px;
          transition: all 0.3s ease;
          display: block;
        }

        .nav__toggle--active span:first-child {
          transform: translateY(8px) rotate(45deg);
        }

        .nav__toggle--active span:nth-child(2) {
          opacity: 0;
        }

        .nav__toggle--active span:last-child {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(40px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu--active {
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu__links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3rem;
          text-align: center;
        }

        .mobile-menu__links li a {
          font-size: 1.5rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--on-surface);
        }

        @media (max-width: 1024px) {
          .hide-on-mobile { display: none !important; }
          .nav__toggle { display: flex; }
          .header { padding: 1rem 0; }
        }
      `}</style>
    </header>
  );
}
