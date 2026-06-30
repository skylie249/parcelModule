
gsap.registerPlugin(ScrollTrigger);  
let lenis;
let lenisRafId;
window.destroyMain = () => {
  if (lenisRafId) cancelAnimationFrame(lenisRafId);
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
};

function initLenis() {
  // 1. Lenis 초기화
  if (lenisRafId) cancelAnimationFrame(lenisRafId);
  if (lenis) lenis.destroy();
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });
  // 2. 애니메이션 루프
  function raf(time) {
    lenis.raf(time);
    ScrollTrigger.update();
    lenisRafId = requestAnimationFrame(raf);
  }
  lenisRafId = requestAnimationFrame(raf);
  //ScrollTrigger에 Lenis의 scroll 값을 전달
  ScrollTrigger.scrollerProxy(document.html, {
    scrollTop(value) {
      return arguments.length
        ? lenis.scrollTo(value)
        : lenis.scroll.instance.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    fixedMarkers: true,
  });
  //스크롤 이벤트 동기화
  lenis.on("scroll", ScrollTrigger.update);
}
function mainVisual() { 
  let isPC = window.matchMedia("(min-width: 1025px)").matches;
  const autoplayDelay = 14000;
  const btnPause = document.querySelector(".btn-pause");
  const nav = document.querySelector(".swiper-nav");
  const swiperOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: autoplayDelay,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
            <button type="button" class="${className}">
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <path d="M 50,50 m 0,-48 a 48,48 0 1 1 0,96 a 48,48 0 1 1 0,-96" stroke="#FFF" stroke-width="2" fill-opacity="0" class="progress"></path>
                </svg>
                <span>${index + 1}</span>
            </button>`;
      },
    },
    on: {
      init: function () {
        if (!isPC) {
          const activeSlide = this.slides[this.activeIndex];
          gsap.fromTo(
            activeSlide.querySelector(".text-1"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 1 }
          );
          gsap.fromTo(
            activeSlide.querySelector(".text-2"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 1.2 }
          );
        }
      },
      slideChange: function (swiper) {
        const bullets = document.querySelectorAll(".swiper-pagination .swiper-pagination-bullet");
        bullets.forEach((bullet, i) => {
          if (i === swiper.realIndex) {
            bullet.setAttribute("title", "현재 슬라이드");
          } else {
            bullet.removeAttribute("title");
          }
        });
      },
      slideChangeTransitionStart: function () {
        swiperVideoPause(this);
        swiperVideoPlay(this, { is_first: true });
        btnPause.classList.remove("on");
        btnPause.querySelector(".blind").textContent = "정지";
        document.querySelector(".swiper-pagination-bullet-active").classList.remove("stop");
        //if (isPC) {
        const activeSlide = this.slides[this.activeIndex];
        gsap.fromTo(
            activeSlide.querySelector(".text-1"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 1 }
        );
        gsap.fromTo(
            activeSlide.querySelector(".text-2"),
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 1.2 }
        );
      },
    },
  }

  const mobileOptions = {
    ...swiperOptions,
    speed: 500,    
    touchRatio: 1,
    touchAngle: 45,
    resistanceRatio: 0.5,
    breakpoints: { 
      768: {
        speed: 600, 
      }
    },
  }

  let visualSwiper;
  try {
    if (isPC) {
      visualSwiper = new Swiper(".swiper-visual", swiperOptions);
    } else {
      visualSwiper = new Swiper(".swiper-visual", mobileOptions);
    }
  } catch (error) {
    console.warn("Swiper 초기화 실패:", error);
    return;
  }

  document.querySelector(".swiper-pagination .swiper-pagination-bullet-active").setAttribute("title","현재 슬라이드");

  // 리사이즈 시 Swiper 재설정
  window.addEventListener("resize", () => {
    isPC = window.matchMedia("(min-width: 1025px)").matches;    
    if (visualSwiper) {
      try {
        visualSwiper.destroy(true, true);
        if (isPC) {
          visualSwiper = new Swiper(".swiper-visual", swiperOptions);
        } else {
          visualSwiper = new Swiper(".swiper-visual", mobileOptions);
        }
      } catch (error) {
        console.warn("Swiper 재설정 실패:", error);
      }
    }
  });

  // swiper 모든 slide video 일시정지
  const swiperVideoPause = async (swiper) => {
    if (!swiper || !swiper.el) return;
    swiper.el.querySelectorAll("video").forEach((video) => video.pause());
  };
  // swiper 현재 slide video 재생
  const swiperVideoPlay = async (swiper, opt = { is_first: false }) => {
    const slide = swiper.slides[swiper.activeIndex];
    if (!slide) return;
    slide.querySelectorAll("video").forEach(async (video) => {
      try {
        if (opt.is_first && video.currentTime) video.currentTime = 0;

        if (video.readyState >= 3) {
          await video.play();
        } else {
          video.addEventListener(
            "canplay",
            () => {
              video.play();
            },
            { once: true }
          );
        }
      } catch (err) {
        console.warn("비디오 재생 실패:", err);
      }
    });
  };
  // swiper 일시정지 버튼
  if (btnPause) {
    btnPause.addEventListener("click", function (e) {
      const el = this;
      const text = el.querySelector(".blind");
      const bullet = document.querySelector(".swiper-pagination-bullet-active");      
      if (visualSwiper && visualSwiper.autoplay) {
        if (visualSwiper.autoplay.paused) {
          // 재생
          visualSwiper.autoplay.resume();
          swiperVideoPlay(visualSwiper);
          el.classList.remove("on");
          if (bullet) bullet.classList.remove("stop");
          if (text) text.textContent = "정지";
        } else {
          // 일시정지
          visualSwiper.autoplay.pause();
          swiperVideoPause(visualSwiper);
          el.classList.add("on");
          if (bullet) bullet.classList.add("stop");
          if (text) text.textContent = "재생";
        }
      }
    });
  }

  function resetSwiper(swiper) {
    // 모든 영상 멈춤
    document.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
      swiper.slideToLoop(0, 0, false);
      swiper.autoplay.start();
    }
    if (swiper) swiper.update();
    ScrollTrigger.refresh();
  }

  function destroyPCMotion() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    ScrollTrigger.clearScrollMemory?.();  
    document.querySelector("#header")?.classList.remove("fixed", "down", "up");
    document.querySelectorAll(".motion.active").forEach(el => el.classList.remove("active"));
    //document.querySelector("aside").style.display = "";
  }

  function destroyMOMotion() {
    const header = document.querySelector("#header");  
    header.classList.remove("fixed", "down"); 
    window.removeEventListener("scroll", handleMobileHeaderScroll);
  }

  function initPCMotion() {
    const header = document.querySelector('#header');
    let scrollHandler = null;
    document.querySelector("#header").classList.remove("fixed", "down","up");
    const text1 = document.querySelectorAll(".swiper-visual .text-1");
    const text2 = document.querySelectorAll(".swiper-visual .text-2");
    const intro = document.querySelector(".intro");
    document.querySelector('.scroll').classList.remove('wht')
    gsap.to(intro, {
      opacity: 0, 
      duration: 0.3, 
      onComplete: () => {        
        gsap.set(intro, { display: "none" });
      }
    });
    visualSwiper.autoplay.stop();
    swiperVideoPause(visualSwiper);
    document.querySelector(".swiper-pagination-bullet-active").classList.add("stop");

    gsap.set("#header", {
      autoAlpha: 0,
    });
    gsap.set(nav, {
      autoAlpha: 0,
      y: "10rem",
    });

    // gsap.set("aside", {
    //   alpha: 0,
    //   display: "none",
    // });

    //Scene1 - intro
    const logoTxts = document.querySelectorAll(".logo-intro span");
    gsap.fromTo(
      logoTxts,
      {
        y: "100%",
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      }
    );
    gsap.fromTo(
      ".scroll",
      {
        y: "10rem",
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.9,
        ease: 'power4.out',
      }
    );
    //Scene - scroll -logo    
    gsap.to(".logo-intro", {
      fontSize: "1rem",
      ease: "none",
      scrollTrigger: {
        trigger: ".logo-intro",
        start: "top 60%",
        end: "top -30%",
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1
      },
    });
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".logo-intro",
        start: "top 0",
        end: "bottom 0",
        scrub: 0.1,
        invalidateOnRefresh: true,
        anticipatePin: 1
      },
    });
    tl.to(".logo-intro", {
      y:'0' ,
      ease: "none",
        position: "sticky",
        top: "22px",
    });  
    tl.fromTo([".logo-intro-s", ".logo-intro-k"],{
        autoAlpha: 0,
        y: "10rem",
      }, {
        display: "block",
        autoAlpha: 1,
        duration: 0.5,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".logo-intro",
          start: "top 10%",
          end: "top top",
          scrub: 0.1,
          invalidateOnRefresh: true,
        },        
    },">");

    //Scene - scroll - slide
    const main = document.querySelector(".scene-slide-inner");
    ScrollTrigger.create({
      trigger: ".scene-slide",
      start: "top top",
      end: () => `+=${main.clientHeight * 1.4}`,
      pin: true,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onEnter: () => {
        const tl = gsap.timeline();
        gsap.fromTo(
          ".mask",{
            clipPath: "polygon(10% 18%, 90% 18%, 90% 80%, 10% 80%)",
          },{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".scene-slide",
              start: "top top",
              end: "top 70%",
              scrub: true,
              invalidateOnRefresh: true,
            },                   
          }
        );

        tl.to(".logo-intro", {
          autoAlpha: 0,
          zIndex: -1,          
        });
        tl.fromTo(
          header,{
            autoAlpha: 0,
        },{
            autoAlpha: 1,
            duration: 0.3,                  
        },"-=0.3");

        document.querySelector('.scroll').classList.add('wht')
          
        swiperVideoPlay(visualSwiper);
        document.querySelector(".swiper-pagination-bullet-active").classList.remove("stop");
        const textin1 = document.querySelector(".swiper-visual .text-1");
        const textin2 = document.querySelector(".swiper-visual .text-2");
        gsap.fromTo(
          textin1,{
            y: 100,
            opacity: 0,
          },{ y: 0, opacity: 1, duration: 0.5, delay: 1 }
        );
        gsap.fromTo(
          textin2,{
            y: 100,
            opacity: 0,
          },{ y: 0, opacity: 1, duration: 0.5, delay: 1.2 }
        );
        gsap.fromTo(
          nav,{
            autoAlpha: 0,
            y: "10rem",
          }, {
            delay: 1.5,
            autoAlpha: 1,
            y: 0,
          }
        );
        // gsap.fromTo(
        //   "aside",{
        //     y: "10rem",
        //     alpha: 0,
        //     display: "none",
        //   },{
        //     y: 0,
        //     delay: 1,
        //     autoAlpha: 1,
        //     duration: 0.5,
        //     display: "",
        //   }
        // );
        

        setTimeout(() => {
          visualSwiper.autoplay.start();
        }, 1000);
      },
      onLeaveBack: () => {
        // 다시 숨김 처리
        gsap.set(header, { autoAlpha: 0 });
        gsap.set(".mask", {
          clipPath: "polygon(10% 18%, 90% 18%, 90% 80%, 10% 80%)",
        });
        gsap.set(".logo-intro", {
          autoAlpha: 1,
        });

        document.querySelector('.scroll').classList.remove('wht')

        resetSwiper(visualSwiper);
        visualSwiper.autoplay.stop();
        swiperVideoPause(visualSwiper);
        gsap.set(nav, {
          opacity: 0,
          y: "10rem",
        });
        // gsap.set("aside", {
        //   y: "10rem",
        //   alpha: 0,
        //   display: "none",
        // });
        gsap.set([text1, text2], {
          y: "10rem",
          opacity: 0,
        });
      },
    });

    //header motion
    const mainSectWrap = document.querySelector(".main-section-wrap");
    gsap.to(mainSectWrap, {
      scrollTrigger: {
        trigger: mainSectWrap,
        start: "top 50%",
        end: "max",
        invalidateOnRefresh: true,        
        onEnter: () => {
          startHeaderScrollHandler();             
        },
        onLeave: () => {
          stopHeaderScrollHandler();
        },
        onEnterBack: () => {
          startHeaderScrollHandler();
        },
        onLeaveBack: () => {
          stopHeaderScrollHandler();
          
        },
      },
    });

    gsap.to('.scroll',{
      scrollTrigger:{
        trigger: mainSectWrap,
        start:'top 100%',
        end:"max",
        invalidateOnRefresh: true, 
        onEnter: () => {
          gsap.set(".scroll", {
            y: "10rem",
            autoAlpha: 0,
          });
        },
        onLeaveBack: () => {
          gsap.set(".scroll", {
            y: "0",
            autoAlpha: 1,
          });
        }
      }
    })


    function startHeaderScrollHandler() {
        let lastScrollTop = window.scrollY;
        const delta = 15;
        const visualEndY = document.querySelector(".main-intro").offsetHeight / 2; // 비주얼 영역 높이
        scrollHandler = function () {
            let currentScroll = window.scrollY;
            if (currentScroll <= 0) {
                header.classList.remove("up", "down");
                lastScrollTop = 0;
                return;
            }
            // 비주얼 영역 내에 있을 때는 header 동작 안 함
            if (currentScroll < visualEndY) {
              header.classList.remove("down","up");
              return;
            }

            if (Math.abs(currentScroll - lastScrollTop) <= delta) return;
            
            if (currentScroll > lastScrollTop) {
                header.classList.add("down");
                header.classList.remove("up");
            } else {
                header.classList.remove("down");
                header.classList.add("up");
            }
            lastScrollTop = currentScroll;
        };
        window.addEventListener("scroll", scrollHandler);         
    }

    function stopHeaderScrollHandler() {
      if (scrollHandler) {
        window.removeEventListener("scroll", scrollHandler);
        scrollHandler = null;
        header.classList.remove("up"); // 상태 초기화
      }
    }


    //본문바로가기 focus Scroll클릭
    document.querySelector('.skip-link').addEventListener('click', (e) => {
      e.preventDefault();

      const scrollTarget = document.querySelector('#slide'); // 슬라이더 wrapper
      const focusTarget = document.querySelector('.swiper-button-prev'); // 포커스 줄 요소

      if (!scrollTarget || !focusTarget) return;

      // 우선 tabindex 강제 지정
      focusTarget.setAttribute("tabindex", "-1");

      // Lenis로 스크롤
      lenis.scrollTo(scrollTarget, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // 스크롤 완료 시점 이후에 포커스
      setTimeout(() => {
        // 포커스가 먹히도록 display 상태 체크
        const style = window.getComputedStyle(focusTarget);
        if (style.display !== "none" && style.visibility !== "hidden") {
          focusTarget.focus();
        } else {
          console.warn("⚠ 포커스 대상이 숨겨져 있어 focus() 적용되지 않음");
        }
      }, 3000); // Lenis duration보다 조금 더 여유 있게
    });
    //scroll focus
    const scrollBtn = document.querySelector(".scroll");
    const targetEl = document.querySelector("#target");
    const logoLink = document.querySelector(".logo-link");
    function scrollAndFocus(e) {
      e.preventDefault();
      lenis.scrollTo(targetEl);
      setTimeout(() => {
        logoLink.setAttribute("tabindex", "-1");
        logoLink.focus();
      }, 600);
    }
    scrollBtn.addEventListener("click", scrollAndFocus);
    scrollBtn.addEventListener("keydown", (e) => {
      if (e.key === "Tab" && !e.shiftKey) {
        scrollAndFocus(e);
      }
    });

  }

  let handleMobileHeaderScroll; 
  function initMOMotion() {
    const header = document.querySelector('#header');
    const intro = document.querySelector('.intro');
    gsap.to(intro, {
      opacity: 0, 
      duration: 0.5, 
      onComplete: () => {        
        gsap.set(intro, { display: "none" });
      }
    });
    document.querySelector("#header").classList.remove("up");
    document.querySelector('.scroll').classList.add('wht')
    gsap.utils.toArray(".motion").forEach((item) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
        invalidateOnRefresh: true,
        //scrub:1,
        //markers:true,
        onEnter: () => {
          item.classList.add("active");
        },
        onEnterBack: () => {
          //item.classList.remove("active")
        },
        onLeaveBack: () => item.classList.remove("active"),
      });
    });
    //gsap.to("aside", {display: "none",});


    gsap.to('.scroll',{
      scrollTrigger:{
        trigger: '.main-section-wrap',
        start:'top 100%',
        end:"max",
        invalidateOnRefresh: true,
        onEnter: () => {
          gsap.set(".scroll", {
            y: "10rem",
            autoAlpha: 0,
          });
        },
        onLeaveBack: () => {
          gsap.set(".scroll", {
            y: "0",
            autoAlpha: 1,
          });
        }
      }
    })


    //메인 해더
    let lastScrollTop = 0;
    let delta = 15;   
    handleMobileHeaderScroll = function () {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          currentScroll > delta ? header.classList.add("fixed") : header.classList.remove("fixed");

          if (Math.abs(lastScrollTop - currentScroll) <= delta) return;
          if (currentScroll > lastScrollTop && currentScroll > delta) {
            //내릴때
            header.classList.add("down");
          } else {
            //올릴때
            header.classList.remove("down");
          }
          lastScrollTop = currentScroll;
    }
    window.addEventListener("scroll", handleMobileHeaderScroll);
  }
  if (isPC) {
    destroyPCMotion()
    initPCMotion();
  } else {    
    destroyMOMotion()
    initMOMotion();
  }
  window.addEventListener("resize", () => {
    const nowIsPC = window.matchMedia("(min-width: 1025px)").matches;
    if (nowIsPC !== isPC) {
      isPC = nowIsPC;
      if (isPC) {
        destroyMOMotion();
        destroyPCMotion();
        initPCMotion();
      } else {
        destroyPCMotion();
        initMOMotion();
      }
      vrSection();
    }
    visualSwiper.update();
    ScrollTrigger.refresh();
  });
}

function getDeviceType() {
  const ua = navigator.userAgent;
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua);
  const isTouch = navigator.maxTouchPoints > 0;
  if (isMobile || isTouch) return "mobile";
  return "desktop";
}

function vrSection() {
    const vrSectionEl = document.querySelector('.vr-section');
    if (!vrSectionEl) return;

    const isPC = window.matchMedia("(min-width: 1440px)").matches;
    const vrBtns = vrSectionEl.querySelectorAll('.vr-btn');

    gsap.killTweensOf(vrBtns);
    gsap.set(vrBtns, { clearProps: 'all' });

    if (isPC) {
        vrSectionPC(vrSectionEl, vrBtns);
    } else {
        vrSectionMO(vrSectionEl, vrBtns);
    }
}

function vrSectionPC(vrSectionEl, vrBtns) {
    gsap.set(vrBtns, { y: 50, autoAlpha: 0 });

    function showBtns() {
        gsap.killTweensOf(vrBtns);
        gsap.fromTo(vrBtns,
            { y: 50, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.15, ease: 'power2.out' }
        );
    }

    function hideBtns() {
        gsap.killTweensOf(vrBtns);
        gsap.set(vrBtns, { y: 50, autoAlpha: 0 });
    }

    ScrollTrigger.create({
        trigger: vrSectionEl,
        start: 'top top',
        end: 'bottom center',
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onEnter: showBtns,
        onEnterBack: showBtns,
        onLeave: hideBtns,
        onLeaveBack: hideBtns,
    });
}

function vrSectionMO(vrSectionEl, vrBtns) {
    gsap.set(vrBtns, { y: 30, autoAlpha: 0 });

    ScrollTrigger.create({
        trigger: vrSectionEl,
        start: 'top 50%',
        onEnter: () => {
            gsap.to(vrBtns, {
                y: 0,
                autoAlpha: 1,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out',
            });
        },
    });
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
window.addEventListener("DOMContentLoaded", () => {  
  window.scrollTo(0, 0);  
  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
  }
  
});
window.initMain = () => {
  try {
    const deviceType = getDeviceType();
    if (deviceType === "desktop") {    
      initLenis();
      /* window.addEventListener("resize", () => {
        location.reload();
      }); */
    }  
    mainVisual();
    window.addEventListener("resize", ScrollTrigger.update);
    vrSection()  
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    
  } catch (error) {
    console.error("초기화 중 오류 발생:", error);
  }
};
window.addEventListener("orientationchange", function () {
  setTimeout(() => {
    location.reload();
  }, 500);
});