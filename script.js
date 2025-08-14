// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Initialize Vanilla Tilt for 3D tilt effect on project cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// AOS Init
AOS.init({
  duration: 1000,
  once: true
});

// Vanilla Tilt for project cards
VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.3
});

// Skill Circular Charts
const circles = document.querySelectorAll('circle[data-percent]');

function animateCircle(circle) {
  const percent = circle.getAttribute('data-percent');
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  let offset = circumference - (percent / 100) * circumference;
  let current = circumference;
  let step = (current - offset) / 60; // animate in 60 frames

  function animate() {
    if(current > offset){
      current -= step;
      circle.style.strokeDashoffset = current;
      requestAnimationFrame(animate);
    } else {
      circle.style.strokeDashoffset = offset;
    }
  }
  animate();
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom >= 0;
}

function checkAnimation() {
  circles.forEach(circle => {
    if(isInViewport(circle) && !circle.classList.contains('animated')){
      animateCircle(circle);
      circle.classList.add('animated');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);
