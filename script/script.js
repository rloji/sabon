$(function(){
    // // // 풀메뉴 - 대메뉴 호버시 서브메뉴 노출시키기
    // $(".mainmenu>li>h4").mouseenter(function(){
    //     $(".submenuText, .submenuImg").stop().slideDown();
    // });
    // $(".mainmenu>li>h4").mouseleave(function(){
    //     $(".submenuText, .submenuImg").stop().slideUp();
    // });

    // 개별메뉴
    // $(".mainmenu").mouseenter(function() {
    //   $(this).find(".submenuText, .submenuImg").stop().slideDown(300);
    // });
    // $(".mainmenu").mouseleave(function() {
    //   $(this).find(".submenuText, .submenuImg").stop().slideUp(0);
    // });

    

    $(".menu-item").mouseenter(function() {
      // 모든 서브메뉴를 닫음
      $(".submenuImg").stop().slideUp(300);
    
      // 현재 마우스를 올린 메뉴의 서브메뉴를 열음
      $(this).find(".submenuText, .submenuImg").stop().slideDown(300);
    });
    
    $(".menu-item").mouseleave(function() {
      // 마우스를 뗐을 때 해당 서브메뉴만 닫음
      $(this).find(".submenuText").stop().slideUp(0);
      $(this).find(".submenuImg").stop().slideUp(300);
    });
    
    document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('mouseenter', function () {
          const images = item.querySelectorAll('.submenuImg img');
          images.forEach(img => img.classList.remove('active'));

          const firstImage = images[0];
          if (firstImage) firstImage.classList.add('active');
      });

      item.addEventListener('mouseleave', function () {
          const submenu = item.querySelector('.submenu');
          submenu.style.height = '0px';
      });

      item.querySelectorAll('.submenuText a').forEach(link => {
          link.addEventListener('mouseenter', function () {
              const images = item.querySelectorAll('.submenuImg img');
              images.forEach(img => img.classList.remove('active'));

              const correspondingImage = images[Array.from(link.parentNode.children).indexOf(link)];
              if (correspondingImage) correspondingImage.classList.add('active');
          });
      });
  });

    // 페이드인아웃슬라이드
     var x = 0;
     setInterval(function(){
         var next = (x + 1) % 5;     // 나머지 연산자 사용 2를 넘어가려고 할때 0으로
             $(".slideList").find("div").eq(x).fadeOut();    // x번째(0) 요소 사라짐
             $(".slideList").find("div").eq(next).fadeIn();  // next번째 요소 나타남
         x = next;                   // x값을 next로 업데이트
     }, 3000);
    
});

// $(document).ready(function() {
//   var menu = $('.menu');
//   var content = $('');
//   var headerHeight = $('.logo').outerHeight();
//   var menuHeight = menu.outerHeight();
//   var fixedPosition = 50;

//   $(window).scroll(function() {
//       var scrollTop = $(window).scrollTop();

//       if (scrollTop > fixedPosition) {
//           if (!menu.hasClass('fixed')) {
//               menu.addClass('fixed');
//               content.addClass('adjusted');
//           }
//       } else {
//           if (menu.hasClass('fixed')) {
//               menu.removeClass('fixed');
//               content.removeClass('adjusted');
//           }
//       }
//   });
// });

$(document).ready(function(){
    $(".sec1_slide").slick({
        autoplay: false, 
        infinite: true,
        slidesToShow: 4, 
        dots: false,
        arrows: true, 
        speed: 500,
        focusOnSelect: true,
        prevArrow: $("#sec1Prev"),
        nextArrow: $("#sec1Next")
    });

    //top버튼

    document.getElementById("top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});