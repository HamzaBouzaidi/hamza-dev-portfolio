let circle = document.querySelector('.cursorFollower');
let circleSize = 700;
let cursorx= 0;
let cursory = 0;
let speed = 0.5;

document.addEventListener('mousemove', (e) => {
  cursorx = e.clientX ;
  cursory = e.clientY ;
    circle.style.left = cursorx - circleSize / 2 + 'px';
    circle.style.top = cursory - circleSize / 2 + 'px';
});

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

function scrollToTopRightPart() {
  const rightPart = document.querySelector('.Rightpart');
  rightPart.scrollTo({ top: 0, behavior: 'smooth' });
}
const leftPart = document.querySelector('.Leftpart');
const rightPart = document.querySelector('.Rightpart');


