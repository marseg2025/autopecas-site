// Navegação suave
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para links internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu mobile toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }
    
    // Highlight do menu ativo
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksAll.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    
    // Animações ao scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.categoria-card, .vantagem-item, .guia-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Função para tracking de cliques (para analytics)
function trackClick(categoria) {
    // Aqui você pode adicionar código para Google Analytics ou outro sistema de tracking
    console.log(`Clique na categoria: ${categoria}`);
    
    // Exemplo de como redirecionar para links de afiliados
    const affiliateLinks = {
        'lampadas': 'https://amzn.to/lampadas-led-automotivas',
        'fusiveis': 'https://amzn.to/fusiveis-automotivos',
        'lentes': 'https://amzn.to/lentes-farol-carro',
        'botoes': 'https://amzn.to/botoes-vidro-eletrico'
    };
    
    // Simular redirecionamento (substitua pelos links reais)
    if (affiliateLinks[categoria]) {
        window.open(affiliateLinks[categoria], 
'_blank');
        // alert(`Redirecionando para produtos de ${categoria}...\nEm um site real, isso abriria o link de afiliado.`);
    }
}

// Função para busca por modelo de veículo (funcionalidade futura)
function buscarPorModelo() {
    const modelo = document.getElementById('modelo-veiculo')?.value;
    if (modelo) {
        console.log(`Buscando peças para: ${modelo}`);
        // Implementar lógica de busca
    }
}

// Lazy loading para imagens
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Função para newsletter (se implementada)
function subscribeNewsletter(email) {
    if (email && email.includes('@')) {
        console.log(`Email cadastrado: ${email}`);
        alert('Obrigado por se inscrever! Você receberá nossas melhores ofertas.');
        return true;
    }
    alert('Por favor, insira um email válido.');
    return false;
}

// Adicionar CSS para menu mobile ativo
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1rem;
            gap: 1rem;
        }
        
        .nav-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .nav-link.active {
            color: #ff6b35;
        }
    }
`;
document.head.appendChild(style);

