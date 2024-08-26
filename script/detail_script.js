$(function(){
    
    

    

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

    $(function () {
        $(".layerPopup").on('mouseenter', function (e) {
            e.preventDefault(); // 기본 링크 동작을 방지
            $('#popup').fadeToggle(); // 팝업을 토글

            // // 1.2초 후에 팝업을 자동으로 사라지게 하기
            // setTimeout(function () {
            //     $('#popup').fadeOut(); // 팝업을 사라지게 함
            // }, 1200); // 1.2초 후 실행
        });
        $(".layerPopup").on('mouseleave', function (e) {
            e.preventDefault(); // 기본 링크 동작을 방지
            $('#popup').fadeToggle(); // 팝업을 토글
        });
    });


    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const closeButton = document.querySelector('.close');
        const overlay = document.querySelector('.overlay');
        const accordionItems = document.querySelectorAll('.accordion dt');
    
    
        // 메뉴 열기
        toggleButton.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
        });
    
        // 메뉴 닫기 (닫기 버튼 클릭 시)
        closeButton.addEventListener('click', function (e) {
            e.preventDefault();
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    
        // 메뉴 외부 클릭 시 닫기
        overlay.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    
        // 아코디언 기능
        accordionItems.forEach(item => {
            item.addEventListener('click', function () {
                const nextElement = item.nextElementSibling;
    
                if (nextElement.style.display === 'block') {
                    nextElement.style.display = 'none';
                } else {
                    // 모든 dd를 숨기고 현재 dd만 열기
                    document.querySelectorAll('.accordion dd').forEach(dd => {
                        dd.style.display = 'none';
                    });
                    nextElement.style.display = 'block';
                }
            });
        });
    });

    //top버튼

    document.getElementById("top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
