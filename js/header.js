window.onload = function () {
  // 웹브라우저가 모든 렌더링 준비가 끝나면 실행하라
  // nav에 마우스 오버하면 높이 변화주기 260
  // nav에 마우스 아웃하면 높이 변화주기 100
  // header 를 변수정의
  // nav 를 변수정의

  let header = document.querySelector(".header");
  let nav = document.querySelector(".nav");
  console.log(header);
  console.log(nav);

  //   nav 마우스 이벤트 처리
  //    addEventListener 이란 모든 이벤트를 처리한다는 말
  // 화살표 함수를 사용했다.
  nav.addEventListener("mouseenter", () => {
    header.style.height = "260px";
    // header.classList.add("%*@");
  });
  nav.addEventListener("mouseleave", () => {
    header.style.height = "100px";
  });
};
