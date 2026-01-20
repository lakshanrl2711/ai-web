// Music data - Replace with your actual music files
const musicData = [
    {
        id: 1,
        title: "Neon Dreams",
        artist: "Laki Tech",
        audioUrl: "audio/neon-dreams.mp3",
        downloadUrl: "downloads/neon-dreams.mp3"
    },
    {
        id: 2,
        title: "Digital Pulse",
        artist: "Laki Tech",
        audioUrl: "audio/digital-pulse.mp3",
        downloadUrl: "downloads/digital-pulse.mp3"
    },
    {
        id: 3,
        title: "Electric Waves",
        artist: "Laki Tech",
        audioUrl: "audio/electric-waves.mp3",
        downloadUrl: "downloads/electric-waves.mp3"
    },
    {
        id: 4,
        title: "Cyber Rhythm",
        artist: "Laki Tech",
        audioUrl: "audio/cyber-rhythm.mp3",
        downloadUrl: "downloads/cyber-rhythm.mp3"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    generateMusicCards();
    setupScrollReveal();
    setupSmoothScroll();
    createParticles();
});

// Generate music cards
function generateMusicCards() {
    const musicGrid = document.getElementById('musicGrid');
    
    musicData.forEach((song, index) => {
        const card = document.createElement('div');
        card.className = 'music-card reveal';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <h3 class="song-title">${song.title}</h3>
            <p class="artist-name">${song.artist}</p>
            <audio class="audio-player" controls>
                <source src="${song.audioUrl}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <a href="${song.downloadUrl}" class="download-btn" download>
                <i class="fas fa-download"></i> Download
            </a>
        `;
        
        musicGrid.appendChild(card);
    });
}

// Scroll to music section
function scrollToMusic() {
    document.getElementById('music').scrollIntoView({ behavior: 'smooth' });
}

// Setup scroll reveal animation
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Create floating particles
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = getRandomColor();
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.boxShadow = `0 0 10px ${getRandomColor()}`;
        particle.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Get random neon color
function getRandomColor() {
    const colors = ['#00d4ff', '#ff0066', '#00ff88'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add loading state to download buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('download-btn')) {
        const originalText = e.target.innerHTML;
        e.target.innerHTML = '<span class="loading"></span> Downloading...';
        e.target.style.pointerEvents = 'none';
        
        // Simulate download delay
        setTimeout(() => {
            e.target.innerHTML = originalText;
            e.target.style.pointerEvents = 'auto';
        }, 2000);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add audio player event listeners
document.addEventListener('play', function(e) {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        if (audio !== e.target) {
            audio.pause();
        }
    });
}, true);

// WhatsApp button click tracking
document.querySelector('.whatsapp-float').addEventListener('click', function() {
    // Add analytics or tracking here if needed
    console.log('WhatsApp contact clicked');
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown') {
        window.scrollBy({ top: 100, behavior: 'smooth' });
    } else if (e.key === 'ArrowUp') {
        window.scrollBy({ top: -100, behavior: 'smooth' });
    }
});