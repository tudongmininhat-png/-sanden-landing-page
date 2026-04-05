'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      setIsSubmitted(true);
      setIsSubmitting(false);
      window.scrollTo({ top: document.getElementById('contact')?.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-section__grid">
          <div className="cta-section__content">
            <span className="editorial-label" style={{ color: '#0ea5e9' }}>Ưu Đãi Đặc Quyền Tháng 4</span>
            <h2 className="editorial-title" style={{ color: '#fff' }}>Sẵn Sàng Nâng Tầm<br />Kinh Doanh Của Bạn?</h2>
            <p className="cta-section__desc">Để lại thông tin để nhận báo giá chi tiết và voucher ưu đãi lên đến 1.500.000 VNĐ áp dụng cho các dòng Inverter mới nhất.</p>
            <div className="cta-section__benefits">
              <div className="benefit">
                <span className="benefit__icon">★</span>
                <p className="benefit__text">Tư vấn miễn phí giải pháp tiết kiệm điện 35%</p>
              </div>
              <div className="benefit">
                <span className="benefit__icon">★</span>
                <p className="benefit__text">Bảo hành tủ Sanden chính hãng 63 tỉnh thành</p>
              </div>
            </div>
          </div>
          <div className="cta-section__form-wrapper">
             {isSubmitted ? (
               <div className="contact-success">
                 <div className="success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                 </div>
                 <h3 className="success-title">Gửi Thành Công!</h3>
                 <p className="success-text">Cảm ơn bạn đã tin tưởng Sanden Intercool. Chuyên viên của chúng tôi sẽ liên hệ tư vấn và gửi báo giá ưu đãi đến bạn trong vòng 15 phút tới.</p>
                 <button onClick={() => setIsSubmitted(false)} className="btn btn--ghost btn--full">Gửi yêu cầu khác</button>
               </div>
             ) : (
               <form 
                className="contact-form" 
                id="contact-form"
                action="https://docs.google.com/forms/d/e/1FAIpQLSfgjRmr8dNxZTVfovwMt2Ze_WMhIS9vK7xD9Yp1ebPAXaXpnA/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
              >
                <h3 className="contact-form__title">Nhận Báo Giá Tư Vấn</h3>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="entry.545321213" 
                    id="form-name" 
                    placeholder="Họ và tên của bạn *" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    name="entry.370848660" 
                    id="form-phone" 
                    placeholder="Số điện thoại liên hệ *" 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <select name="entry.353309686" id="form-need">
                    <option value="">Loại hình kinh doanh (không bắt buộc)</option>
                    <option value="Nhà hàng">Nhà hàng</option>
                    <option value="Quán ăn">Quán ăn</option>
                    <option value="Tạp hóa">Tạp hóa</option>
                    <option value="Quán cafe">Quán cafe</option>
                  </select>
                </div>
                
                <button type="submit" className="btn btn--primary btn--full">Gửi và Nhận Ưu Đãi Ngay</button>
                <p className="contact-form__privacy">Chúng tôi cam kết bảo mật 100% dữ liệu của đối tác.</p>
              </form>
             )}
            
            {/* Hidden Iframe for silent submission. 
                Note: This will trigger a CSP "frame-ancestors 'none'" error in the console. 
                This is expected behavior and does NOT prevent the data from being submitted to Google.
            */}
            <iframe 
              name="hidden_iframe" 
              id="hidden_iframe" 
              style={{ display: 'none' }}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cta-section {
          padding: 10rem 0;
          background: #0f171f; /* Deep structural dark for high contrast */
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(0, 95, 157, 0.1) 0%, transparent 70%);
          z-index: 1;
        }

        .cta-section__grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 6rem;
          align-items: center;
        }

        .cta-section__desc {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          margin-bottom: 4rem;
          font-weight: 500;
        }

        .cta-section__benefits {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .benefit__icon {
          width: 32px;
          height: 32px;
          background: rgba(14, 165, 233, 0.15);
          color: #0ea5e9;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.875rem;
        }

        .benefit__text {
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
        }

        /* --- THE HIGH-TECH FORM --- */
        .contact-form, .contact-success {
          background: var(--surface-container-lowest);
          padding: 4rem;
          border-radius: 2.5rem;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3);
          min-height: 480px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-success {
          text-align: center;
          align-items: center;
          animation: successPop 0.6s var(--transition-bounce);
        }

        @keyframes successPop {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .success-icon {
          width: 80px;
          height: 80px;
          background: #e0f2fe;
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .success-icon svg {
          width: 40px;
          height: 40px;
        }

        .success-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--on-surface);
          margin-bottom: 1.5rem;
          letter-spacing: -0.04em;
        }

        .success-text {
          font-size: 1.1rem;
          color: var(--on-surface-variant);
          line-height: 1.7;
          margin-bottom: 3rem;
          font-weight: 500;
        }

        .contact-form__title {
          font-size: 1.75rem;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 3rem;
          text-align: center;
          color: var(--on-surface);
        }

        .form-group {
          margin-bottom: 2rem;
          position: relative;
        }

        .contact-form input, .contact-form select {
          width: 100%;
          padding: 1.25rem 0.5rem;
          background: transparent;
          border: none;
          border-bottom: 2px solid var(--surface-container-high); /* Editorial state */
          font-family: var(--font-pjs), sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: var(--on-surface);
          transition: var(--transition-smooth);
        }

        .contact-form input:focus, .contact-form select:focus {
          outline: none;
          border-bottom-color: var(--primary);
        }

        .contact-form input::placeholder {
           color: var(--outline);
           opacity: 0.7;
        }

        .btn--full {
          width: 100%;
          padding: 1.25rem;
          margin-top: 1.5rem;
        }

        .contact-form__privacy {
          font-size: 0.8125rem;
          color: var(--outline);
          text-align: center;
          margin-top: 2rem;
          font-weight: 600;
        }

        @media (max-width: 1100px) {
          .cta-section__grid { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .cta-section__content { display: flex; flex-direction: column; align-items: center; }
          .cta-section__benefits { align-items: center; }
          .contact-form, .contact-success { max-width: 500px; margin: 0 auto; padding: 3rem; min-height: auto; }
          .success-title { font-size: 1.75rem; }
        }
      `}</style>
    </section>
  );
}
