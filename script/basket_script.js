$(function(){
    // 스크롤 시 헤더 올라가다 메뉴에서 고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#wrap header .logo').stop().hide(); // 로고 영역을 즉시 숨김
            $('#wrap header').css('height', '0px'); // 헤더 높이 줄이기
            $('#wrap header nav').css('top', '0px'); // 메뉴를 최상단으로 이동
        } else {
            $('#wrap header .logo').stop().show(); // 로고 영역을 즉시 표시
            $('#wrap header').css('height', '298px'); // 헤더 높이를 원래대로 복구
            $('#wrap header nav').css('top', 'auto'); // 메뉴 위치 원래대로 복구
        }
    });

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

    //top버튼

    document.getElementById("top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});