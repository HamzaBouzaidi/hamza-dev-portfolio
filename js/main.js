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
