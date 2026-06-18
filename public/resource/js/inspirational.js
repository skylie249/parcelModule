window.initInspirational = function() {
// Swiper 인스턴스
let swiperInstances = [];
let swiperInstances2 = [];

function initSwipers() {
  const isMobile = window.innerWidth <= 768;
  const containers = document.querySelectorAll('.ext-photos');

  if (isMobile && swiperInstances.length === 0) {
    containers.forEach((container) => {
      const swiper = new Swiper(container, {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        // navigation: {
        //   nextEl: container.querySelector('.swiper-button-next'),
        //   prevEl: container.querySelector('.swiper-button-prev')
        // },
        pagination: {
          el: container.querySelector('.swiper-pagination'),
          clickable: true
        },        
      });
      swiperInstances.push(swiper);
    });
  } else if (!isMobile && swiperInstances.length > 0) {
    swiperInstances.forEach(instance => instance.destroy(true, true));
    swiperInstances = [];
  }
}

function interiorSwiper() {
  const isMobile = window.innerWidth <= 768;
  const intSwipers = document.querySelectorAll('.interior-swiper');

  if (isMobile && swiperInstances2.length === 0) {
    intSwipers.forEach((initSw) => {           
      const intSwiper = new Swiper(initSw, {
        slidesPerView: 1,
        pagination: {
          el: initSw.querySelector('.swiper-pagination'),
          clickable: true
        },
        on:{
          slideChange: function() {
            const pagination = this.pagination.el;
            const isLastSlide = this.activeIndex === this.slides.length - 1;
            pagination.classList.toggle('wht', isLastSlide);
          },
          init:function(){
            const pagination = this.pagination.el;
            const isLastSlide = this.activeIndex === this.slides.length - 1;
            pagination.classList.toggle('wht', isLastSlide);
          }
        }
      });
      swiperInstances2.push(intSwiper);
    });
  } else if (!isMobile && swiperInstances2.length > 0) {
    swiperInstances2.forEach(instance => instance.destroy(true, true));
    swiperInstances2 = [];
  }
}

// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
  // PC 전용
  "(min-width: 1025px)": function () {
    gsap.utils.toArray(".frame").forEach((box) => {
      gsap.fromTo(box, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          markers: false,
        }
      });
    });

    gsap.utils.toArray(".ext-photos .line").forEach((line) => {
      gsap.fromTo(line, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 60%",
          end: "bottom 50%",
          toggleActions: "play none none none",
        }
      });
    });
  },

  // Mobile 전용
  "(max-width: 768px)": function () {
    gsap.utils.toArray(".ext-photos").forEach((box) => {
      gsap.fromTo(box, {
        y: 50,
        opacity: 0,
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          markers: false,
        }
      });
    });
  },

  // 공통
  "all": function () {
       
  }
});

  // resize 대응
  window.addEventListener('resize', () => {
    initSwipers();
    interiorSwiper();
    ScrollTrigger.refresh();
  });

  initSwipers();
  interiorSwiper();  
};

