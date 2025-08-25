// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll-based animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections and grid items
    const elementsToObserve = document.querySelectorAll('section, .method-item, .result-item, .analysis-item, .sota-item, .innovation-item');
    elementsToObserve.forEach(el => {
        observer.observe(el);
    });

    // Add fade-in animation styles
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        section, .method-item, .result-item, .analysis-item, .sota-item, .innovation-item {
            opacity: 0;
            transform: translateY(30px);
        }
    `;
    document.head.appendChild(style);

    // PDF loading enhancement
    const pdfEmbeds = document.querySelectorAll('embed[type="application/pdf"]');
    
    pdfEmbeds.forEach(embed => {
        const container = embed.closest('.pdf-viewer');
        
        embed.addEventListener('load', function() {
            if (container) {
                container.style.position = 'relative';
            }
        });

        // Add error handling for PDF loading
        embed.addEventListener('error', function() {
            const errorMsg = document.createElement('div');
            errorMsg.innerHTML = `
                <p style="color: #e74c3c; padding: 2rem; text-align: center;">
                    Unable to load PDF. <a href="${this.src}" target="_blank" style="color: #667eea;">Click here to view directly</a>
                </p>
            `;
            this.parentNode.replaceChild(errorMsg, this);
        });
    });

    // Add header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add loading state for the page
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Add loaded styles
        const loadedStyle = document.createElement('style');
        loadedStyle.textContent = `
            body:not(.loaded) {
                overflow: hidden;
            }
            
            body:not(.loaded)::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: white;
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            body:not(.loaded)::after {
                content: 'Loading TopoBDA...';
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                z-index: 10000;
                font-size: 1.2rem;
                color: #667eea;
                font-weight: 600;
            }
        `;
        document.head.appendChild(loadedStyle);
    });

    // Add click tracking for analytics (placeholder)
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href$=".pdf"]')) {
            console.log('PDF download/view:', e.target.href);
            // Add analytics tracking here if needed
        }
    });

    // Enhanced mobile navigation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu if exists (for future mobile menu implementation)
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Add keyboard shortcuts for navigation
        if (e.altKey) {
            switch(e.key) {
                case '1':
                    e.preventDefault();
                    document.querySelector('#abstract').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '2':
                    e.preventDefault();
                    document.querySelector('#method').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '3':
                    e.preventDefault();
                    document.querySelector('#results').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '4':
                    e.preventDefault();
                    document.querySelector('#comparison').scrollIntoView({ behavior: 'smooth' });
                    break;
                case '5':
                    e.preventDefault();
                    document.querySelector('#paper').scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    });

    // Add print styles
    const printStyle = document.createElement('style');
    printStyle.media = 'print';
    printStyle.textContent = `
        @media print {
            header nav, .buttons, .pdf-viewer embed, .copy-btn {
                display: none;
            }
            
            body {
                font-size: 12pt;
                line-height: 1.4;
            }
            
            h1, h2, h3 {
                page-break-after: avoid;
            }
            
            .method-item, .result-item, .analysis-item, .sota-item {
                page-break-inside: avoid;
                margin-bottom: 1rem;
            }
            
            .results-table {
                font-size: 10pt;
            }
            
            .citation-box {
                background: #f8f9fa !important;
                border: 1px solid #dee2e6;
            }
            
            .citation-box code {
                color: #333 !important;
            }
        }
    `;
    document.head.appendChild(printStyle);
});

// Copy citation to clipboard
function copyToClipboard() {
    const citationText = `@article{kalfaoglu2025topobda,
    title={TopoBDA: Towards Bezier Deformable Attention for Road Topology Understanding},
    author={Kalfaoglu, Muhammet Esat and Ozturk, Halil Ibrahim and Kilinc, Ozsel and Temizel, Alptekin},
    journal={Neurocomputing},
    year={2025},
    publisher={Elsevier}
}`;

    // Try using the modern Clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(citationText).then(function() {
            showCopyFeedback('Citation copied to clipboard!');
        }).catch(function(err) {
            // Fallback to older method
            fallbackCopyTextToClipboard(citationText);
        });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(citationText);
    }
}

// Fallback copy method for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyFeedback('Citation copied to clipboard!');
        } else {
            showCopyFeedback('Failed to copy citation');
        }
    } catch (err) {
        showCopyFeedback('Failed to copy citation');
    }
    
    document.body.removeChild(textArea);
}

// Show feedback when copying
function showCopyFeedback(message) {
    const feedback = document.createElement('div');
    feedback.textContent = message;
    feedback.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(feedback);
    
    // Remove after 3 seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        feedback.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 3000);
}
