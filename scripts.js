const pages = document.querySelectorAll('.page');
const mainHeader = document.querySelector('.header');
const floatingCta = document.getElementById('floating-cta');

function navigateTo(pageId) {
    pages.forEach(page => {
        page.style.opacity = '0';
        setTimeout(() => {
            page.classList.add('hidden');
        }, 200);
    });
    setTimeout(() => {
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            setTimeout(() => {
                targetPage.style.opacity = '1';
            }, 50);
            mainHeader.style.display = (pageId === 'homepage') ? 'flex' : 'none';
            if (pageId === 'homepage') {
                setTimeout(() => floatingCta.classList.add('show'), 1000);
            } else {
                floatingCta.classList.remove('show');
            }
        }
        window.scrollTo(0, 0);
    }, 250);
}

function scrollToSection(sectionId) {
    const currentPage = document.querySelector('.page:not(.hidden)');
    if (currentPage.id !== 'homepage') {
        navigateTo('homepage');
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }
        }, 500);
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
}

function updateCountdown() {
    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 2);
    eventDate.setHours(9, 0, 0, 0);
    const now = new Date().getTime();
    const timeLeft = eventDate.getTime() - now;
    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.getElementById('countdown-timer').innerHTML = '<h3 style="color: var(--success-green); text-align: center;">🎉 Event is Live Now! 🎉</h3>';
    }
}
setInterval(updateCountdown, 1000);

function initializeTrackSelection() {
    const trackCards = document.querySelectorAll('.track-card');
    const radioButtons = document.querySelectorAll('input[name="track"]');
    trackCards.forEach(card => {
        card.addEventListener('click', function() {
            const trackValue = this.getAttribute('data-track');
            const radioButton = document.getElementById(trackValue);
            trackCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            radioButton.checked = true;
        });
    });
}

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function initializeSocialMedia() {
    const socialLinks = document.querySelectorAll('footer a[href*="instagram"], footer a[href*="linkedin"], footer a[href*="discord"]');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * -0.5;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
    const header = document.querySelector('.header');
    if (scrolled > 100) {
        header.style.backdropFilter = 'blur(25px) saturate(200%)';
        header.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        header.style.backdropFilter = 'blur(20px) saturate(180%)';
        header.style.background = 'rgba(255, 255, 255, 0.85)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => navigateTo('homepage'), 100);
    initializeTrackSelection();
    initializeFAQ();
    initializeSocialMedia();
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
        });
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });
});

// Razorpay Payment Integration
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const payButton = document.getElementById('pay-button');
    const originalText = payButton.innerHTML;
    payButton.innerHTML = "<span class='loading'>Processing...</span>";
    payButton.disabled = true;
    payButton.classList.add('loading');
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    var options = {
        "key": "rzp_test_pEtewbLyitMbOF",
        "amount": "102400",
        "currency": "INR",
        "name": "IEEE TEMS: Pitch Perfect 2.0",
        "description": "Student Registration - Early Bird Special",
        "image": "https://via.placeholder.com/150/00629B/FFFFFF?text=IEEE",
        "handler": function (response){
            document.getElementById('paymentIdDisplay').innerHTML = `
                <strong>Payment ID:</strong> ${response.razorpay_payment_id}<br>
                <strong>Registration ID:</strong> PP2025-${Math.random().toString(36).substr(2, 8).toUpperCase()}
            `;
            setTimeout(() => navigateTo('confirmation'), 500);
        },
        "prefill": {
            "name": fullName,
            "email": email,
        },
        "theme": {
            "color": "#00629B",
            "backdrop_color": "rgba(0,98,155,0.1)"
        },
        "modal": {
            "ondismiss": function(){
                payButton.innerHTML = originalText;
                payButton.disabled = false;
                payButton.classList.remove('loading');
            }
        },
        "retry": {
            "enabled": true,
            "max_count": 3
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
});

document.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.style.borderColor = '#e74c3c';
            this.style.boxShadow = '0 0 0 4px rgba(231, 76, 60, 0.1)';
        } else {
            this.style.borderColor = '#2ecc71';
            this.style.boxShadow = '0 0 0 4px rgba(46, 204, 113, 0.1)';
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .timeline-item, .section-title').forEach(el => {
    observer.observe(el);
});
