 const images = document.querySelectorAll("#skills .row img");

  window.addEventListener("scroll", () => {
    images.forEach(img => {
      const imgPosition = img.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imgPosition < windowHeight - 100) { 
        img.classList.add("show");
      }
    });
  });



document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate2");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, { threshold: 0.2 }); // يبدأ عند ما 20% من العنصر يظهر

  elements.forEach(el => observer.observe(el));
});



const elements = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill-per');

  if (!('IntersectionObserver' in window)) {
    skills.forEach(el => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');  
        obs.unobserve(entry.target);        
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0.2
  });

  skills.forEach(el => observer.observe(el));
});


document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill-per');

  if (!('IntersectionObserver' in window)) {
    skills.forEach(el => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');  
        obs.unobserve(entry.target);        
      }
    });
  }, {
    root: null,
    rootMargin: '0px 0px -10% 0px', 
    threshold: 0.2
  });

  skills.forEach(el => observer.observe(el));
});




const animates = document.querySelectorAll(".animate1");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

animates.forEach((el) => observer.observe(el));
















const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function createParticles() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: (Math.random() - 0.5) * 0.5,
      dy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.5
    });
  }
}
createParticles();

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(41, 117, 120, 1)";
    ctx.shadowColor = "rgba(28, 200, 212, 1)";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.restore();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }
  requestAnimationFrame(drawParticles);
}
drawParticles();









// ...existing code...

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  setTimeout(() => {
    sidebar.classList.add('open');
  }, 10); // allow display to apply before transition
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('open');
  setTimeout(() => {
    sidebar.style.display = 'none';
  }, 800); // match the transition duration
}
// ...existing code...