let text = document.getElementById('text');
let left = document.getElementById('left');
let right = document.getElementById('right');
let kite1 = document.getElementById('kite1');
let kite2 = document.getElementById('kite2');

// Get all new Navratri elements
let diyas = document.querySelectorAll('.diya');
let lotuses = document.querySelectorAll('.lotus');
let dandiyaSticks = document.querySelectorAll('.dandiya-stick');
let peacockFeathers = document.querySelectorAll('.peacock-feather');
let dancingFigures = document.querySelectorAll('.dancing-figure');
let musicNotes = document.querySelectorAll('.music-note');
let rangolis = document.querySelectorAll('.rangoli');
let kalash = document.getElementById('kalash1');
let garlands = document.querySelectorAll('.garland');
let sparkles = document.querySelectorAll('.sparkle');

// Scroll counter for advanced effects
let scrollCounter = 0;

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    scrollCounter += 0.1;
    
    // Original parallax effects
    text.style.marginTop = value * 2.5 + 'px';
    left.style.left = value * 1.5 + 'px';
    right.style.left = value * -1.5 + 'px';
    kite1.style.top = value * -1.5 + 'px';
    kite2.style.top = value * -1.5 + 'px';
    kite1.style.left = value * 1.5 + 'px';
    kite2.style.left = value * -1.5 + 'px';
    
    // Enhanced parallax for diyas
    diyas.forEach((diya, index) => {
        let speed = (index + 1) * 0.5;
        let direction = index % 2 === 0 ? 1 : -1;
        diya.style.transform = `translateY(${value * speed * direction}px) translateX(${Math.sin(scrollCounter + index) * 10}px)`;
    });
    
    // Lotus floating effect
    lotuses.forEach((lotus, index) => {
        let speed = (index + 1) * 0.3;
        lotus.style.transform = `translateY(${value * speed}px) rotate(${value * 0.1}deg)`;
    });
    
    // Dandiya sticks with enhanced rotation
    dandiyaSticks.forEach((stick, index) => {
        let rotationSpeed = (index + 1) * 2;
        stick.style.transform = `translateY(${value * 0.8}px) rotate(${value * rotationSpeed + scrollCounter * 50}deg)`;
    });
    
    // Peacock feathers swaying
    peacockFeathers.forEach((feather, index) => {
        let sway = Math.sin(scrollCounter + index * 2) * 15;
        feather.style.transform = `translateY(${value * 0.4}px) rotate(${sway}deg)`;
    });
    
    // Dancing figures with enhanced movement
    dancingFigures.forEach((figure, index) => {
        let dance = Math.sin(scrollCounter * 2 + index) * 20;
        figure.style.transform = `translateY(${value * 0.6}px) translateX(${dance}px) rotate(${dance * 0.5}deg)`;
    });
    
    // Musical notes floating up
    musicNotes.forEach((note, index) => {
        let float = Math.sin(scrollCounter + index * 1.5) * 25;
        note.style.transform = `translateY(${value * -0.8 + float}px) translateX(${Math.cos(scrollCounter + index) * 15}px)`;
    });
    
    // Rangoli spinning with parallax
    rangolis.forEach((rangoli, index) => {
        rangoli.style.transform = `translateY(${value * 0.5}px) rotate(${scrollCounter * 30 + index * 180}deg) scale(${1 + Math.sin(scrollCounter + index) * 0.1})`;
    });
    
    // Kalash gentle movement
    if (kalash) {
        kalash.style.transform = `translateY(${value * 0.3}px) translateX(${Math.sin(scrollCounter) * 8}px)`;
    }
    
    // Garlands swaying
    garlands.forEach((garland, index) => {
        let sway = Math.sin(scrollCounter * 1.5 + index * 3) * 10;
        garland.style.transform = `translateY(${value * 0.4}px) rotate(${sway}deg)`;
    });
    
    // Sparkles twinkling movement
    sparkles.forEach((sparkle, index) => {
        let twinkle = Math.sin(scrollCounter * 3 + index * 2) * 20;
        sparkle.style.transform = `translateY(${value * -0.9}px) translateX(${twinkle}px) scale(${1 + Math.sin(scrollCounter * 2 + index) * 0.3})`;
    });
});

// Interactive click effects
document.addEventListener('DOMContentLoaded', function() {
    // Add click interactions to various elements
    diyas.forEach(diya => {
        diya.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'diyaGlow 2s ease-in-out infinite alternate';
            }, 100);
            
            // Create sparkle effect on click
            createSparkleEffect(this);
        });
    });
    
    dancingFigures.forEach(figure => {
        figure.addEventListener('click', function() {
            this.style.animation = 'dance 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'dance 2s ease-in-out infinite';
            }, 500);
        });
    });
    
    musicNotes.forEach(note => {
        note.addEventListener('click', function() {
            this.style.fontSize = '3em';
            this.style.color = getRandomColor();
            setTimeout(() => {
                this.style.fontSize = '2em';
                this.style.color = '#FFD700';
            }, 300);
        });
    });
    
    // Add hover effects for tradition cards
    const traditionItems = document.querySelectorAll('.tradition-item');
    traditionItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255,255,255,0.2)';
            this.style.transform = 'translateY(-10px) rotateX(10deg) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255,255,255,0.1)';
            this.style.transform = 'translateY(0px) rotateX(0deg) scale(1)';
        });
    });
    
    // Add dynamic text changes to the main title
    const mainTitle = document.getElementById('text');
    const navratriGreetings = [
        'Happy Navratri',
        'नवरात्रि की शुभकामनाएं',
        'Jai Mata Di',
        'Divine Blessings',
        'Happy Navratri'
    ];
    
    let greetingIndex = 0;
    setInterval(() => {
        greetingIndex = (greetingIndex + 1) % navratriGreetings.length;
        mainTitle.style.opacity = '0';
        setTimeout(() => {
            mainTitle.textContent = navratriGreetings[greetingIndex];
            mainTitle.style.opacity = '1';
        }, 500);
    }, 4000);
});

// Helper function to create sparkle effect
function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '1.5em';
    sparkle.style.animation = 'sparkleShine 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
    sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        document.body.removeChild(sparkle);
    }, 1000);
}

// Helper function to get random colors
function getRandomColor() {
    const colors = ['#FFD700', '#FF69B4', '#32CD32', '#4D96FF', '#FF6B6B', '#9370DB'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Background music note animation
setInterval(() => {
    if (Math.random() > 0.7) {
        createFloatingNote();
    }
}, 2000);

function createFloatingNote() {
    const note = document.createElement('div');
    const notes = ['♪', '♫', '♬', '🎵', '🎶'];
    note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
    note.style.position = 'fixed';
    note.style.fontSize = '2em';
    note.style.color = getRandomColor();
    note.style.pointerEvents = 'none';
    note.style.zIndex = '999';
    note.style.left = Math.random() * window.innerWidth + 'px';
    note.style.top = window.innerHeight + 'px';
    note.style.animation = 'musicFloat 4s ease-out forwards';
    
    document.body.appendChild(note);
    
    setTimeout(() => {
        if (document.body.contains(note)) {
            document.body.removeChild(note);
        }
    }, 4000);
}

// Add CSS for floating notes animation
const style = document.createElement('style');
style.textContent = `
    @keyframes musicFloat {
        from {
            transform: translateY(0px) rotate(0deg);
            opacity: 1;
        }
        to {
            transform: translateY(-${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

