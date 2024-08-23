$(function(){
    // 스크롤 시 헤더 올라가다 메뉴에서 고정
    window.onscroll = function() {stickyHeader()};

    var header = document.getElementById("header");
    var nav = document.getElementById("nav");
    var sticky = nav.offsetTop;

    function stickyHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    

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

  $(document).ready(function () {
      $('.tab-tit').click(function () {
          // 아코디언 기능: 클릭 시 해당 내용을 표시/숨김
          var content = $(this).next('.cboth_prdInfo_text');
          content.slideToggle(300);

          // 화살표 회전 기능: 화살표 이미지 회전
          var arrow = $(this).find('.arrow-icon'); // 새로운 클래스 지정
          var isRotated = arrow.hasClass('rotated');

          if (isRotated) {
              arrow.removeClass('rotated');
              arrow.css('transform', 'rotate(0deg)');
          } else {
              arrow.addClass('rotated');
              arrow.css('transform', 'rotate(180deg)');
          }
      });
  });

    //top버튼

    document.getElementById("top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});