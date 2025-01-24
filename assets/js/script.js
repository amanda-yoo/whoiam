const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

let mouseX = 0; // 마우스의 목표 X 위치
let mouseY = 0; // 마우스의 목표 Y 위치
let roundedX = 0; // cursorRounded의 현재 X 위치
let roundedY = 0; // cursorRounded의 현재 Y 위치

const speed = 0.15; // 느리게 따라오는 정도 (0.1은 느림, 1에 가까울수록 빠름)

const moveCursor = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`; // cursorPointed는 즉시 이동
};

const animate = () => {
  // 현재 위치와 목표 위치 사이에 보간
  roundedX += (mouseX - roundedX) * speed;
  roundedY += (mouseY - roundedY) * speed;

  cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;

  requestAnimationFrame(animate); // 애니메이션 프레임 업데이트
};

window.addEventListener('mousemove', moveCursor);
animate(); // 애니메이션 시작
