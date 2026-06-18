(function () {
  "use strict";

  function init() {
    const pinWrap = document.querySelector(".full-blocks-pin");
    if (!pinWrap) return;

    const blocks = Array.from(pinWrap.querySelectorAll(".full-block"));
    const count = blocks.length;
    if (count < 2) return;

    const isTouch = navigator.maxTouchPoints > 0;
    const isMobile = window.innerWidth <= 768;

    blocks.forEach((block) => block.classList.toggle("isTouch", isTouch));

    if (isTouch || isMobile) {
      initMobile();
    } else {
      initPC();
    }

    // ════════════════════════════════════════════════════
    //  PC — ScrollTrigger pin + Observer 휠 (fulls.js 로직)
    // ════════════════════════════════════════════════════
    function initPC() {
      gsap.registerPlugin(ScrollTrigger, Observer);

      let currentIndex = 0;
      let animating = false;

      function initBlocks() {
        blocks.forEach((block, i) => {
          gsap.set(block, {
            yPercent: i === 0 ? 0 : 100,
            autoAlpha: i === 0 ? 1 : 0,
          });
          gsap.set(block.querySelectorAll(".desc-item > *"), { y: 60, autoAlpha: 0 });
        });
      }

      function animateText(block) {
        const items = block.querySelectorAll(".desc-item > *");
        gsap.fromTo(
          items,
          { y: 60, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" },
        );
      }

      function gotoSection(index, direction) {
        if (animating) return;
        if (index < 0 || index >= blocks.length) return;

        animating = true;
        const current = blocks[currentIndex];
        const next = blocks[index];
        const nextItems = next.querySelectorAll(".desc-item > *");

        gsap.set(next, { autoAlpha: 1, yPercent: direction > 0 ? 100 : -100 });
        gsap.set(nextItems, { y: 60, autoAlpha: 0 });

        const tl = gsap.timeline({
          onComplete() {
            currentIndex = index;
            animating = false;
          },
        });

        tl.to(
          current,
          { yPercent: direction > 0 ? -100 : 100, duration: 0.7, ease: "power2.inOut" },
          0,
        );
        tl.to(next, { yPercent: 0, duration: 0.7, ease: "power2.inOut" }, 0);
        tl.to(nextItems, { y: 0, autoAlpha: 1, stagger: 0.08, duration: 0.5, ease: "power3.out" });
      }

      initBlocks();

      let st;
      const wheelObs = Observer.create({
        type: "wheel",
        wheelSpeed: 1,
        tolerance: 10,
        preventDefault: true,
        onDown() {
          if (currentIndex + 1 >= blocks.length) {
            releaseScroll(1);
            return;
          }
          gotoSection(currentIndex + 1, 1);
        },
        onUp() {
          if (currentIndex <= 0) {
            releaseScroll(-1);
            return;
          }
          gotoSection(currentIndex - 1, -1);
        },
      });
      wheelObs.disable();

      st = ScrollTrigger.create({
        trigger: pinWrap,
        start: "top top",
        end: () => "+=" + (blocks.length - 1) * window.innerHeight,
        pin: true,
        anticipatePin: 1,
        onEnter() {
          currentIndex = 0;
          blocks.forEach((b, i) =>
            gsap.set(b, {
              yPercent: i === 0 ? 0 : 100,
              autoAlpha: i === 0 ? 1 : 0,
            }),
          );
          wheelObs.enable();
          animateText(blocks[0]);
        },
        onEnterBack() {
          const last = blocks.length - 1;
          currentIndex = last;
          blocks.forEach((b, i) =>
            gsap.set(b, {
              yPercent: i === last ? 0 : -100,
              autoAlpha: i === last ? 1 : 0,
            }),
          );
          wheelObs.enable();
          animateText(blocks[last]);
        },
        onLeave() {
          wheelObs.disable();
        },
        onLeaveBack() {
          wheelObs.disable();
        },
      });

      function releaseScroll(direction) {
        wheelObs.disable();
        const targetY = direction > 0 ? st.end + 2 : Math.max(0, st.start - 2);
        window.scrollTo({ top: targetY, behavior: "auto" });
      }

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          animating = false;
          ScrollTrigger.refresh();
        }, 200);
      });
    }

    // ════════════════════════════════════════════════════
    //  모바일 — 일반 스크롤 + 블록 80% 진입 시 텍스트 모션
    // ════════════════════════════════════════════════════
    function initMobile() {
      gsap.registerPlugin(ScrollTrigger);

      // 모바일: 고정 레이아웃 해제 → 일반 흐름으로 전환
      const fullBlocksEl = pinWrap.querySelector(".full-blocks");

      if (fullBlocksEl) {
        gsap.set(fullBlocksEl, { height: "auto", overflow: "visible" });
        
      }
      gsap.set(blocks, {
        position: "relative",
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto",
        width: "100%",
      });

      blocks.forEach((block) => {
        const items = block.querySelectorAll(".desc-item > *");
        if (!items.length) return;

        gsap.set(items, { y: 40, autoAlpha: 0 });

        ScrollTrigger.create({
          trigger: block,
          start: "top 20%",
          once: true,
          onEnter: () => {
            gsap.to(items, {
              y: 0,
              autoAlpha: 1,
              duration: 0.45,
              stagger: 0.08,
              ease: "power2.out",
              clearProps: "y",
            });
          },
        });
      });

      let resizeTimer;
      window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      });

      window.addEventListener("orientationchange", () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 250);
      });
    }
  }

  if (document.readyState === "complete") {
    init();
  } else {
    window.addEventListener("load", init);
  }
})();
