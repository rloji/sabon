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
          const submenu = item.querySelector('.mainmenu');
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

// ---------- 페이드인아웃슬라이드 ----------
    //  var x = 0;
    //  setInterval(function(){
    //      var next = (x + 1) % 5;     // 나머지 연산자 사용 2를 넘어가려고 할때 0으로
    //          $(".slideList").find("div").eq(x).fadeOut();    // x번째(0) 요소 사라짐
    //          $(".slideList").find("div").eq(next).fadeIn();  // next번째 요소 나타남
    //      x = next;                   // x값을 next로 업데이트
    //  }, 3000);
    
});

const slides = document.querySelectorAll('.slideImg');
const indicators = document.querySelectorAll('.button');
let currentIndex = 0;
const slideInterval = 3000; // 3초마다 슬라이드 전환

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
};

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

let autoSlide = setInterval(nextSlide, slideInterval);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        clearInterval(autoSlide); // 사용자가 클릭할 경우 자동 슬라이드를 멈춤
        showSlide(index);
        currentIndex = index; // 현재 인덱스를 업데이트
        autoSlide = setInterval(nextSlide, slideInterval); // 다시 자동 슬라이드 시작
    });
});

// 슬라이드로 전환 시 fade-in-out 애니메이션을 적용
slides.forEach(slide => {
    slide.style.transition = 'opacity 0.5s ease-in-out';
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mb_slide");
    let dots = document.querySelectorAll(".button");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    
    setTimeout(showSlides, 3000); // 3초마다 슬라이드 변경
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}


// let slideIndex = 0;
// showSlides(slideIndex);

// function showSlides(index) {
//     let slides = document.querySelectorAll('.slideLImg');
//     let dots = document.querySelectorAll('.button');
    
//     if (index >= slides.length) { slideIndex = 0 }
//     if (index < 0) { slideIndex = slides.length - 1 }
    
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }

//     slides[slideIndex].style.display = "block";  
//     dots[slideIndex].className += " active";
// }

// function currentSlide(index) {
//     slideIndex = index;
//     showSlides(slideIndex);
// }

// 자동 슬라이드
setInterval(function() {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);

// 인디케이터 클릭 이벤트
document.querySelectorAll('.button').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide(index);
    });

    // if (window.innerWidth <= 768) {
    //     // 새로운 요소를 생성합니다.
    //     var newElement = document.createElement("div");
    //     newElement.className = "mobile-specific-element";
    //     newElement.innerHTML = "This is only for mobile!";
    
    //     // 원하는 위치에 요소를 추가합니다.
    //     document.body.appendChild(newElement);
    // }
    
});



// ---------- 슬릭 ----------
$(document).ready(function(){
  $('.slick-slider').slick({
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
