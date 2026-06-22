


    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    if (entry.target.classList.contains('reveal')) {
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if(counter.dataset.animated) return;
                            counter.dataset.animated = true;
                            
                            const target = +counter.getAttribute('data-target');
                            const duration = 1500;
                            const steps = 60;
                            const stepTime = Math.abs(Math.floor(duration / steps));
                            let current = 0;
                            const increment = target / steps;

                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= target) {
                                    counter.innerText = target;
                                    clearInterval(timer);
                                } else {
                                    counter.innerText = Math.floor(current);
                                }
                            }, stepTime);
                        });
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
            observer.observe(el);
        });
        
        setTimeout(() => {
            document.querySelectorAll('main > section:first-of-type .reveal, main > section:first-of-type .reveal-left, main > section:first-of-type .reveal-right').forEach(el => {
                el.classList.add('active');
            });
        }, 100);

        const nav = document.getElementById('main-nav');
        const handleScroll = () => {
            if (window.scrollY > 20) {
                nav.classList.remove('at-top');
            } else {
                nav.classList.add('at-top');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        let isMenuOpen = false;

        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                if (isMenuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                    menuIcon.textContent = 'close';
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                    menuIcon.textContent = 'menu';
                    document.body.style.overflow = '';
                }
            });
        }
    });



    // Theme toggle logic
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleDarkIcon && themeToggleLightIcon) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            themeToggleLightIcon.classList.remove('hidden');
        } else {
            themeToggleDarkIcon.classList.remove('hidden');
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');

            if (localStorage.theme) {
                if (localStorage.theme === 'light') {
                    document.documentElement.classList.add('dark');
                    localStorage.theme = 'dark';
                } else {
                    document.documentElement.classList.remove('dark');
                    localStorage.theme = 'light';
                }
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.theme = 'light';
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.theme = 'dark';
                }
            }
        });
    }


