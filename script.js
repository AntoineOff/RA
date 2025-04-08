document.addEventListener('DOMContentLoaded', function() {
    // Navigation toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            // Transform the hamburger to X
            const spans = this.querySelectorAll('span');
            spans[0].classList.toggle('rotate-45');
            spans[1].classList.toggle('opacity-0');
            spans[2].classList.toggle('-rotate-45');
        });
    }
    
    // Sticky navigation
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('main-nav');
        if (window.scrollY > 100) {
            nav.style.height = '60px';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            nav.style.height = '80px';
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        }
    });
    
    // Testimonials slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-testimonial');
    const nextBtn = document.querySelector('.next-testimonial');
    
    if (testimonials.length > 0) {
        let currentTestimonial = 0;
        
        // Function to show the current testimonial
        function showTestimonial(index) {
            testimonials.forEach(testimonial => {
                testimonial.classList.remove('active');
            });
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            
            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
        }
        
        // Event listeners for prev/next buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                currentTestimonial--;
                if (currentTestimonial < 0) {
                    currentTestimonial = testimonials.length - 1;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                currentTestimonial++;
                if (currentTestimonial >= testimonials.length) {
                    currentTestimonial = 0;
                }
                showTestimonial(currentTestimonial);
            });
        }
        
        // Event listeners for dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                currentTestimonial = index;
                showTestimonial(currentTestimonial);
            });
        });
        
        // Auto-rotate testimonials
        setInterval(function() {
            currentTestimonial++;
            if (currentTestimonial >= testimonials.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const consent = document.getElementById('consent').checked;
            
            if (email && consent) {
                // Here would be the code to send the form data to the server
                // For demonstration, we'll just show an alert
                
                // Create success message
                const successMessage = document.createElement('div');
                successMessage.className = 'newsletter-success';
                successMessage.innerHTML = `
                    <div class="success-icon"><i class="fas fa-check-circle"></i></div>
                    <p>Merci pour votre inscription ! Vous recevrez prochainement notre newsletter.</p>
                `;
                
                // Replace form with success message
                newsletterForm.innerHTML = '';
                newsletterForm.appendChild(successMessage);
            }
        });
    }
    
    // GSAP animations for scroll effects
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);
        
        // Key points cards animation
        gsap.utils.toArray('.card').forEach((card, i) => {
            gsap.from(card, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });
        
        // News items animation
        gsap.utils.toArray('.news-item').forEach((item, i) => {
            gsap.from(item, {
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: i * 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });
        
        // Section headers animation
        gsap.utils.toArray('.section-header').forEach(header => {
            gsap.from(header, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                    toggleActions: "play none none none",
                }
            });
        });
    }
    
    // Background parallax effect for the hero section
    window.addEventListener('scroll', function() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPosition = `50% ${50 + scrollPosition * 0.05}%`;
        }
    });
});

// Prevent closing the menu when clicking inside it
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('active');
        
        // Reset the hamburger menu
        const spans = document.querySelectorAll('.nav-toggle span');
        spans.forEach(span => {
            span.classList.remove('rotate-45', 'opacity-0', '-rotate-45');
        });
    });
});

// Add smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href !== "#") {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add animations to CTA buttons
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Create a countdown for upcoming events (if any have a future date)
function updateCountdown() {
    const countdownElements = document.querySelectorAll('[data-countdown]');
    
    countdownElements.forEach(element => {
        const targetDate = new Date(element.getAttribute('data-countdown')).getTime();
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            element.innerHTML = `
                <div class="countdown-item"><span>${days}</span> jours</div>
                <div class="countdown-item"><span>${hours}</span> heures</div>
                <div class="countdown-item"><span>${minutes}</span> min</div>
                <div class="countdown-item"><span>${seconds}</span> sec</div>
            `;
        } else {
            element.innerHTML = `<div class="event-now">En cours !</div>`;
        }
    });
}

// Run the countdown function if countdown elements exist
if (document.querySelector('[data-countdown]')) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}
