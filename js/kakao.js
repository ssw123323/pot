$(document).ready(function () {
  // 메인 슬라이드
  var swiper1 = new Swiper(".swiper1", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // 슬라이드 영역에 마우스 오버시 슬라이드 멈춤 슬라이드 영역 마우스 아웃시 다시 슬라이드 자동 실행
  $(".swiper1").mouseenter(function () {
    swiper1.autoplay.stop();
  });
  $(".swiper1").mouseleave(function () {
    swiper1.autoplay.start();
  });
  // today slide
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 2.5,
    spaceBetween: 50,
    freeMode: true,
  });
  var swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2.5,
    spaceBetween: 50,
    freeMode: true,
  });

  // 스크롤 이벤트에 따른 투명도 애니메이션
  // greensock 플러그인
  //첫번째 애니메이션
  ScrollTrigger.matchMedia({
    // pc버전
    "(min-width:1024px)": function () {
      //product
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product",
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".product .banner_img1", { duration: 3, opacity: 1 })
        .to(".product .banner_img1", { duration: 3, opacity: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".product .banner_img2", { duration: 3, opacity: 0 })
        .to(".product .banner_img2", { duration: 3, opacity: 1 });
    },
    // 태블릿 버전
    "(min-width:768px)": function () {
      //product
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product",
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .to(".product .banner_img1", { duration: 3, opacity: 0 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".product",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .to(".product .banner_img2", { duration: 3, opacity: 1 });
    },
    // 모바일 버전
    "(min-width:360px)": function () {},
  });
  //두번째 애니메이션
  ScrollTrigger.matchMedia({
    // pc버전
    "(min-width:1024px)": function () {
      //bed
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .to(".bed .banner_img1", { duration: 3, opacity: 0 })
        .to(".bed .banner_img1", { duration: 3, scale: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .to(".bed .banner_img2", { duration: 3, opacity: 1 })
        .from(".bed .banner_img2", { duration: 3, scale: 1 })
        .to(".bed .banner_img2", { duration: 3, scale: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".bed .banner_img3", { duration: 3, top: "100vh" })
        .to(".bed .banner_img3", { duration: 3, top: "25vh" });
    },
    // 태블릿 버전
    "(min-width:768px)": function () {
      //bed
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            pin: true,
            start: "top top",
            end: "+=1000",
            // end:"bottom top",
            scrub: 1,
          },
        })
        .to(".bed .banner_img1", { duration: 3, opacity: 0 })
        .to(".bed .banner_img1", { duration: 3, scale: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            // pin:true,
            start: "top top",
            end: "+=1000",
            scrub: 1,
          },
        })
        .to(".bed .banner_img2", { duration: 3, opacity: 1 })
        .from(".bed .banner_img2", { duration: 3, scale: 1 })
        .to(".bed .banner_img2", { duration: 3, scale: 0 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".bed",
            // pin:true,
            start: "top top",
            end: "+=1000",
            scrub: 1,
          },
        })
        .from(".bed .banner_img3", { duration: 3, top: "100vh" })
        .to(".bed .banner_img3", { duration: 3, top: "25vh" });
    },
    // 모바일 버전
    "(min-width:360px)": function () {},
  });

  //세번째 애니메이션
  ScrollTrigger.matchMedia({
    // pc버전
    "(min-width:1024px)": function () {
      //.b_03 영역 스크롤 이벤트에 따른 위치 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shopping",
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".shopping .banner_img2", { scale: 1.2, top: "1vw" }) //초기값
        .to(".shopping .banner_img2", { duration: 3, scale: 1, top: "60vw" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shopping",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".shopping .banner_img1", { duration: 3, top: "100vw" })
        .from(".shopping .banner_img3", { duration: 3, top: "100vw" })
        .from(".shopping .banner_img4", { duration: 3, top: "100vw" })
        .to(".shopping .banner_img1", { duration: 3, top: "10vw" })
        .to(".shopping .banner_img3", { duration: 3, top: "-10vw" })
        .to(".shopping .banner_img4", { duration: 3, top: "30vw" });
    },
    // 태블릿 버전
    "(min-width:768px)": function () {
      //.b_03 영역 스크롤 이벤트에 따른 위치 애니메이션
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shopping",
            pin: true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".shopping .banner_img2", { scale: 1.2, top: "1vw" }) //초기값
        .to(".shopping .banner_img2", { duration: 3, scale: 1, top: "80vw" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".shopping",
            // pin:true,
            start: "top top",
            end: "+=100%",
            scrub: 1,
          },
        })
        .from(".shopping .banner_img1", { duration: 3, top: "100vw" })
        .from(".shopping .banner_img3", { duration: 3, top: "100vw" })
        .from(".shopping .banner_img4", { duration: 3, top: "100vw" })
        .to(".shopping .banner_img1", { duration: 3, top: "10vw" })
        .to(".shopping .banner_img3", { duration: 3, top: "-20vw" })
        .to(".shopping .banner_img4", { duration: 3, top: "50vw" });
    },
    // 모바일 버전
    "(min-width:360px)": function () {},
  });

  // 팝업 갤러리
  $(".goods_photo ul li").click(function (e) {
    e.preventDefault();
    // 클릭한 li의 인덱스 번호 가져와 변수 저장
    var idx = $(this).index() + 1;
    $(".container").empty();
    $(".container").append('<img src="img/20-' + idx + '.jpg">');
    $(".popup").fadeIn();
  });
  // 팝업 갤러리 안 닫기 버튼
  $(".popup .close_btn").click(function (e) {
    e.preventDefault();
    // 컨테이너 영역 비우기
    $(".container").empty();
    $(".popup").hide();
  });
  // 햄버거 메뉴 클릭시 애니메이션 효과
  let sw = false;
  $(".ham_menu").click(function () {
    if (sw == false) {
      sw = true;
      $(this).addClass("active");
      $(".menu_area").animate({ right: 0 });
    } else {
      sw = false;
      $(this).removeClass("active");
      $(".menu_area").animate({ right: "-100vw" });
    }
  });
  //태블릿(가로길이가 768이상, 1024 미만일 때)
  let winWidth = $(window).width();
  if (winWidth >= 768 && winWidth < 1024) {
    var swiper2 = new Swiper(".swiper2", {
      slidesPerView: 2.7,
      spaceBetween: 0,
      freeMode: true,
    });
    let direction = "ltr";
    swiper2.changeLanguageDirection(direction);
  }

  // 탑버튼
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $("#MOVE_TOP_BTN").fadeIn();
      } else {
        $("#MOVE_TOP_BTN").fadeOut();
      }
    });
    $("#MOVE_TOP_BTN").click(function () {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });
});
