$(function(){

// ---------- 개별메뉴 ----------
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
    var z = 0;
    $(".slideList").find(".slideImg").hide(); // 모든 슬라이드 숨기기
    $(".slideList").find(".slideImg").eq(0).show(); // 첫 번째 슬라이드만 보이게 하기
    
    setInterval(function() {
        var next = (z + 1) % 5; // 슬라이드 개수가 5개일 때, 다음 슬라이드 인덱스 계산
        $(".slideList").find(".slideImg").eq(z).fadeOut(); // 현재 슬라이드 사라지기
        $(".slideList").find(".slideImg").eq(next).fadeIn(); // 다음 슬라이드 나타나기
        z = next; // x값을 다음 인덱스로 업데이트
    }, 3000);
    
    
    // 모바일 슬라이드
         var x = 0;
         setInterval(function(){
             var next = (x + 1) % 5;     // 나머지 연산자 사용 2를 넘어가려고 할때 0으로
                 $(".mb_slideList").find(".mb_slide").eq(x).fadeOut();    // x번째(0) 요소 사라짐
                 $(".mb_slideList").find(".mb_slide").eq(next).fadeIn();  // next번째 요소 나타남
             x = next;                   // x값을 next로 업데이트
         }, 3000);

});

// ---------- 슬릭 ----------
$(document).ready(function(){
    $('.sec1_slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        prevArrow: $('.btnPrev'),
        nextArrow: $('.btnNext'),
        // adaptiveHeight: true,  // 슬라이드 높이에 맞게 컨테이너 높이 조정
        // variableWidth: true    // 슬라이드 아이템의 너비를 고정하지 않음
    });
  });

  // ---------- 탭 ----------
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-item');
    const slickList = document.querySelector('.slickList');
    let currentIndex = 0;

    const setActiveTab = (index) => {
        tabs.forEach((tab, i) => {
            if (i === index) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        const offset = -index * 100;
        slickList.style.transform = `translateX(${offset}%)`;
    };

    // Initialize the first tab and slide as active
    setActiveTab(currentIndex);

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            currentIndex = index;
            setActiveTab(currentIndex);
        });
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