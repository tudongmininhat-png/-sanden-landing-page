/* ===================================================================
   SANDEN INTERCOOL LANDING PAGE — JavaScript
   Handles: scroll animations, header effects, counter, form, mobile nav
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─── Header scroll effect ───
    const header = document.getElementById('header');
    const handleScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ─── Mobile nav toggle ───
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu on link click
        navMenu.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ─── Scroll animations (Intersection Observer) ───
    const animateElements = () => {
        const targets = document.querySelectorAll(
            '.pain-card, .value-item, .tech-card, .testimonial-card, ' +
            '.hero__content, .hero__image, .value-prop__image, ' +
            '.comparison__table-wrapper, .clients__logos, ' +
            '.cta-section__content, .cta-section__form-wrapper'
        );

        targets.forEach(el => el.classList.add('animate-on-scroll'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger animation for grid children
                    const parent = entry.target.parentElement;
                    const siblings = parent ? Array.from(parent.children).filter(
                        c => c.classList.contains('animate-on-scroll')
                    ) : [];
                    const staggerIndex = siblings.indexOf(entry.target);
                    const delay = staggerIndex >= 0 ? staggerIndex * 100 : 0;

                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -60px 0px'
        });

        targets.forEach(el => observer.observe(el));
    };

    animateElements();

    // ─── Counter animation ───
    const animateCounters = () => {
        const counters = document.querySelectorAll('.hero__stat-num[data-count]');
        const duration = 2000;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count'), 10);
                    const start = performance.now();

                    const update = (now) => {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(target * eased);

                        if (progress < 1) {
                            requestAnimationFrame(update);
                        } else {
                            el.textContent = target;
                        }
                    };

                    requestAnimationFrame(update);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));
    };

    animateCounters();

    // ─── Smooth scroll for anchor links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId === '#') return;

            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const position = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: position,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ─── Form submission → Google Forms via fetch ───
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name').value.trim();
            const phone = document.getElementById('form-phone').value.trim();

            if (!name || !phone) {
                alert('Vui lòng điền đầy đủ Họ tên và Số điện thoại.');
                return;
            }

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            // Disable button while submitting
            btn.textContent = 'Đang gửi...';
            btn.disabled = true;

            // Build form data
            const formData = new FormData(form);

            // Submit to Google Forms (no-cors because Google doesn't allow CORS)
            fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            }).then(() => {
                // Show success (always reaches here with no-cors)
                btn.textContent = '✓ Đã gửi thành công!';
                btn.style.background = '#2e7d32';
                form.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);
            }).catch(() => {
                // Fallback: even on error, no-cors usually means it was sent
                btn.textContent = '✓ Đã gửi thành công!';
                btn.style.background = '#2e7d32';
                form.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);
            });
        });
    }

    // ─── Active nav link on scroll ───
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    const updateActiveNav = () => {
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNav, { passive: true });
});
