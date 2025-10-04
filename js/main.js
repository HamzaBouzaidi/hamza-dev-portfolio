// ============================
// Cursor Follower
// ============================
let circle = document.querySelector('.cursorFollower');
let circleSize = 700;

// mouse position
let mouseX = 0, mouseY = 0;

// follower position
let followerX = 0, followerY = 0;

// smoothing speed
const speed = 0.1;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  followerX += (mouseX - followerX) * speed;
  followerY += (mouseY - followerY) * speed;

  circle.style.left = followerX - circleSize / 2 + 'px';
  circle.style.top = followerY - circleSize / 2 + 'px';

  requestAnimationFrame(animate);
}
animate();


// ============================
// Scroll Functions (inside .Rightpart)
// ============================

// helper: scroll inside Rightpart to an element
function scrollInsideRightpart(targetId) {
  const rightPart = document.querySelector('.Rightpart');
  const target = document.querySelector(targetId);
  if (rightPart && target) {
    rightPart.scrollTo({
      top: target.offsetTop - rightPart.offsetTop,
      behavior: 'smooth'
    });
  }
}

// Scroll to "ABOUT"
function scrollToAbout() {
  scrollInsideRightpart('#aboutmedescription');
}

// Scroll to "PROJECTS"
function scrollToProjects() {
  scrollInsideRightpart('#firstProject');
}

// Scroll to Top (EXPERIENCE button)
function scrollToTopPage() {
  const rightPart = document.querySelector('.Rightpart');
  if (rightPart) {
    rightPart.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
function scrollToProjects() {
  const rightPart = document.querySelector('.Rightpart');
  const target = rightPart.querySelector('#scrollIntoView'); // your project section inside Rightpart
  if (target) {
    rightPart.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth'
    });
  }
}
