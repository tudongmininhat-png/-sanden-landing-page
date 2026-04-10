'use client';

import { useState, useEffect, useRef, KeyboardEvent } from 'react';

const FAQS = [
  {
    q: "Tủ này sản xuất ở đâu em?",
    keywords: ["sản xuất", "xuất xứ", "đâu", "nhật", "thái", "nguồn gốc", "xuất"],
    a: "Dạ, Sanden Intercool là thương hiệu số 1 của Nhật Bản. Tủ bên em được nhập khẩu nguyên chiếc từ nhà máy Sanden tại Thái Lan nên độ bền và tiêu chuẩn kỹ thuật anh yên tâm hoàn toàn ạ."
  },
  {
    q: "Tủ chạy có tốn điện không?",
    keywords: ["điện", "tốn", "tiết kiệm", "hóa đơn", "kwh", "inverter", "biến tần"],
    a: "Dạ, đây là thế mạnh của Sanden. Tủ bên em dùng công nghệ Inverter biến tần và dàn lạnh đồng nguyên chất. Tính ra mỗi tháng anh tiết kiệm được tầm 30-35% tiền điện so với các dòng tủ thông thường đó ạ."
  },
  {
    q: "Sao giá cao hơn hiệu khác vậy?",
    keywords: ["giá", "đắt", "cao", "rẻ", "bao nhiêu", "sanaky", "hòa phát", "tiền", "mắc"],
    a: "Dạ đúng là giá Sanden có nhỉnh hơn, nhưng tiền nào của nấy anh ạ. Anh đầu tư một lần dùng 10-15 năm êm ru, không hỏng vặt. Tính ra chi phí vận hành và tiền điện mỗi tháng rẻ hơn rất nhiều ạ."
  },
  {
    q: "Bảo hành bao lâu em?",
    keywords: ["bảo hành", "warranty", "hỏng", "sửa", "chính hãng", "năm", "tháng"],
    a: "Dạ, bên em bảo hành chính hãng toàn quốc tận nhà mình luôn. Toàn bộ linh kiện bảo hành 1 năm, riêng máy nén (Block) bên em bảo hành tới 3 năm để anh yên tâm kinh doanh ạ."
  },
  {
    q: "Kính có bị đọng nước không?",
    keywords: ["kính", "đọng", "mờ", "sương", "nhìn", "trong suốt", "nước"],
    a: "Dạ không anh ơi. Tủ mát Sanden có hệ thống sưởi kính bằng hơi nóng từ máy nén. Kính lúc nào cũng trong suốt, khách đứng ngoài nhìn thấy rõ từng chai nước, rất bắt mắt ạ."
  },
  {
    q: "Tủ chạy có ồn không?",
    keywords: ["ồn", "ồn ào", "tiếng", "ầm", "yên tĩnh", "êm", "noise"],
    a: "Dạ tủ chạy cực êm anh nhé. Như máy chủ chạy trong đêm vậy, chỉ nghe tiếng quạt gió rất nhẹ. Anh để gần quầy thu ngân đều không gây khó chịu đâu ạ."
  },
  {
    q: "Có giao hàng miễn phí không?",
    keywords: ["giao hàng", "vận chuyển", "ship", "miễn phí", "free", "giao"],
    a: "Dạ, bên em hỗ trợ giao hàng và lắp đặt tận nơi. Tùy khu vực mà bên em sẽ có chính sách miễn phí hoặc hỗ trợ phí tốt nhất cho anh ạ. Anh cho em xin địa chỉ nhé?"
  },
  {
    q: "Tủ dùng bao lâu cần nạp gas?",
    keywords: ["gas", "nạp", "freon", "môi chất", "rò"],
    a: "Dạ với dàn lạnh đồng 100% của Sanden thì hệ thống rất kín và bền, mình dùng vài năm cũng không phải lo nạp gas đâu ạ. Chỉ cần vệ sinh định kỳ là dùng bền bỉ suốt đời ạ."
  },
  {
    q: "Anh bán cafe dùng loại nào?",
    keywords: ["cafe", "quán", "loại nào", "dòng nào", "model", "mã", "spm", "tư vấn", "nào phù hợp"],
    a: "Dạ nếu quán cafe thì dòng 1 cánh 400 lít (SPM-0400) là vừa vặn nhất ạ. Tủ sấy kính đẹp, đèn LED sáng, trưng bày nước nhìn rất chuyên nghiệp anh ạ."
  },
  {
    q: "Linh kiện hư có dễ thay không?",
    keywords: ["linh kiện", "phụ tùng", "thay", "sửa chữa", "thợ", "kỹ thuật"],
    a: "Dạ Sanden có kho linh kiện chính hãng tại Việt Nam rất đầy đủ. Việc bảo trì hay thay thế cực kỳ đơn giản, anh không phải lo tìm đồ không có đâu ạ."
  }
];

const DEFAULT_FALLBACK = "Dạ câu này em chưa có thông tin chính xác để trả lời ngay ạ. Anh/chị để lại thông tin bên dưới, bên em sẽ liên hệ hỗ trợ trực tiếp cho mình nhanh nhất nhé!";

function matchKeyword(input: string): string | null {
  const normalized = input.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (const faq of FAQS) {
    for (const kw of faq.keywords) {
      const kwNorm = kw.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (normalized.includes(kwNorm)) {
        return faq.a;
      }
    }
  }
  return null;
}

type Message = { type: 'bot' | 'user'; text: string; showCta?: boolean };

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && history.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setHistory([{
          type: 'bot',
          text: "Dạ, Sanden Intercool xin chào anh/chị ạ! Không biết mình đang tìm tủ mát hay tủ đông cho quán mình thế nào để em hỗ trợ tư vấn dòng phù hợp nhất cho mình nhé?"
        }]);
        setIsTyping(false);
      }, 800);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 400);
    }
  }, [isOpen]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setHistory(prev => [...prev, { type: 'user', text: trimmed }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const matched = matchKeyword(trimmed);
      if (matched) {
        setHistory(prev => [...prev, { type: 'bot', text: matched }]);
      } else {
        setHistory(prev => [...prev, { type: 'bot', text: DEFAULT_FALLBACK, showCta: true }]);
      }
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickReply = (q: string, a: string) => {
    setHistory(prev => [...prev, { type: 'user', text: q }]);
    setIsTyping(true);
    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'bot', text: a }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage(inputValue);
  };

  const closeChat = () => setIsOpen(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`chatbot-fab ${isOpen ? 'active' : ''}`}
        aria-label="Liên hệ tư vấn"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window glass-panel ${isOpen ? 'open' : ''}`}>

        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-header__info">
            <div className="chatbot-avatar">S</div>
            <div>
              <h4 className="chatbot-title">Sanden Assistant</h4>
              <span className="chatbot-status"><span className="status-dot"></span> Đang trực tuyến</span>
            </div>
          </div>
          <button onClick={closeChat} className="chatbot-header__close" aria-label="Đóng chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>

        {/* Message Feed */}
        <div className="chatbot-body" ref={scrollRef}>
          {history.map((msg, idx) => (
            <div key={idx} className={`message ${msg.type}`}>
              <div className="message-bubble">{msg.text}</div>
              {msg.showCta && (
                <a href="#contact" onClick={closeChat} className="inline-cta-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  Để lại thông tin để được tư vấn
                </a>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="message bot">
              <div className="message-bubble typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="chatbot-footer">
          {/* Quick Replies */}
          <div className="quick-replies">
            <p className="quick-replies__label">Câu hỏi thường gặp:</p>
            <div className="quick-replies__grid">
              {FAQS.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(faq.q, faq.a)}
                  className="quick-reply-btn"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>

          {/* Text Input */}
          <div className="chat-input-row">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Nhập câu hỏi của bạn..."
              className="chat-input"
              disabled={isTyping}
            />
            <button
              onClick={() => sendMessage(inputValue)}
              className="chat-send-btn"
              disabled={isTyping || !inputValue.trim()}
              aria-label="Gửi"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>

          {/* CTA */}
          <a href="#contact" onClick={closeChat} className="btn btn--primary chatbot-cta-btn">
            Nhận báo giá ngay 2026
          </a>
        </div>
      </div>

      <style jsx>{`
        .chatbot-fab {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: var(--radius-full);
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1000;
          border: none;
          box-shadow: var(--shadow-lift);
          transition: var(--transition-bounce);
        }
        .chatbot-fab:hover { transform: scale(1.1) rotate(5deg); }
        .chatbot-fab.active { background: var(--on-surface); }

        .chatbot-window {
          position: fixed;
          bottom: 6.5rem;
          right: 2rem;
          width: 380px;
          height: 640px;
          max-height: calc(100vh - 10rem);
          z-index: 999;
          display: flex;
          flex-direction: column;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: var(--shadow-lift);
          opacity: 0;
          visibility: hidden;
          transform: translateY(20px) scale(0.95);
          transition: var(--transition-bounce);
        }
        .chatbot-window.open {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .chatbot-header {
          padding: 1.25rem 1.5rem;
          background: var(--primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }
        .chatbot-header__info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .chatbot-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.25rem;
          flex-shrink: 0;
        }
        .chatbot-title {
          font-weight: 800;
          margin: 0;
          font-size: 0.9375rem;
          letter-spacing: -0.01em;
        }
        .chatbot-status {
          font-size: 0.75rem;
          opacity: 0.8;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          background: #4ade80;
          border-radius: 50%;
          display: inline-block;
          box-shadow: 0 0 10px #4ade80;
        }
        .chatbot-header__close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          opacity: 0.6;
          transition: opacity 0.2s;
          padding: 0.25rem;
        }
        .chatbot-header__close:hover { opacity: 1; }

        .chatbot-body {
          flex: 1;
          padding: 1.25rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
          background: rgba(255,255,255,0.5);
          backdrop-filter: blur(12px);
        }

        .message {
          display: flex;
          flex-direction: column;
          max-width: 85%;
          gap: 0.5rem;
        }
        .message.bot { align-items: flex-start; }
        .message.user { align-items: flex-end; align-self: flex-end; }

        .message-bubble {
          padding: 0.875rem 1.125rem;
          border-radius: 1.25rem;
          font-size: 0.9rem;
          font-weight: 500;
          line-height: 1.55;
        }
        .bot .message-bubble {
          background: white;
          color: var(--on-surface);
          border-bottom-left-radius: 0.25rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        }
        .user .message-bubble {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .inline-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.6rem 1rem;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%);
          color: white;
          border-radius: 0.875rem;
          font-size: 0.8125rem;
          font-weight: 700;
          text-decoration: none;
          transition: var(--transition-bounce);
          box-shadow: 0 4px 12px rgba(0,95,157,0.2);
        }
        .inline-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,95,157,0.3);
        }

        .typing span {
          width: 6px;
          height: 6px;
          background: var(--primary);
          border-radius: 50%;
          display: inline-block;
          margin: 0 2px;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        .typing span:nth-child(1) { animation-delay: -0.32s; }
        .typing span:nth-child(2) { animation-delay: -0.16s; }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        .chatbot-footer {
          padding: 1rem 1.25rem 1.25rem;
          background: white;
          border-top: 1px solid var(--outline-variant);
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .quick-replies__label {
          font-size: 0.6875rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--outline);
          margin-bottom: 0.5rem;
          letter-spacing: 0.06em;
        }
        .quick-replies__grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          max-height: 90px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }
        .quick-reply-btn {
          padding: 0.4rem 0.75rem;
          background: var(--surface-container-low);
          border: 1px solid rgba(191,199,212,0.3);
          border-radius: 0.625rem;
          font-size: 0.775rem;
          font-weight: 600;
          color: var(--on-surface-variant);
          cursor: pointer;
          transition: all 0.2s;
          text-align: left;
          line-height: 1.3;
        }
        .quick-reply-btn:hover {
          background: var(--primary-fixed);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* Input Row */
        .chat-input-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--surface-container-low);
          border-radius: 0.875rem;
          padding: 0.25rem 0.25rem 0.25rem 1rem;
          border: 1.5px solid rgba(191,199,212,0.4);
          transition: border-color 0.2s;
        }
        .chat-input-row:focus-within {
          border-color: var(--primary);
          background: white;
        }
        .chat-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--on-surface);
          font-family: var(--font-pjs), sans-serif;
          outline: none;
          padding: 0.5rem 0;
        }
        .chat-input::placeholder { color: var(--outline); }
        .chat-input:disabled { opacity: 0.5; }

        .chat-send-btn {
          width: 36px;
          height: 36px;
          border-radius: 0.625rem;
          background: var(--primary);
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: var(--transition-bounce);
        }
        .chat-send-btn:hover:not(:disabled) {
          transform: scale(1.1);
          background: var(--primary-container);
        }
        .chat-send-btn:disabled {
          background: var(--surface-container-high);
          color: var(--outline);
          cursor: not-allowed;
        }

        .chatbot-cta-btn {
          width: 100%;
          font-size: 0.75rem;
          padding: 0.875rem;
          text-align: center;
        }

        @media (max-width: 480px) {
          .chatbot-window {
            width: calc(100% - 2rem);
            right: 1rem;
            bottom: 5.5rem;
            height: calc(100vh - 8rem);
            max-height: none;
            border-radius: 1.5rem;
          }
          .chatbot-fab {
            right: 1.5rem;
            bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
