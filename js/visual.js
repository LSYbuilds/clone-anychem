window.addEventListener("load", function (event) {
  const swVisualWrap = document.querySelector(".sw-visual .swiper-wrapper");

  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      let data = JSON.parse(req.response);
      console.log(data);
      makeVisualHtml(data);
    }
  });
  //   이제 알겠다
  xhr.open("GET", "data/visualdata.json");
  xhr.send();

  function makeVisualHtml(_data) {
    let html = ``;
    _data.img.forEach((item) => {
      let temp = `
        <div class="swiper-slide" style="background-image: url(images/${item})"></div>
        `;
      html += temp;
    });

    swVisualWrap.innerHTML = html;

    // 여기에 넣는 이유는 아래쪽에 스와이퍼를 넣다간 스와이퍼가 먼저 실행되어버린다
    // 때문에 위의 html이 다 적용되고 나서 스와이퍼를 실행시켜야 하기 때문에 makeVisualHtml 안에  기재한다.
    const swVisual = new Swiper(".sw-visual", {
      loop: true,
      effect: "fade",
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });
  }
});
