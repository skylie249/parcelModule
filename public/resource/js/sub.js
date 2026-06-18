function subIntro() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 1025px)": function() {
            const subVisual = document.querySelector(".sub-top-visual");
            const header = document.getElementById("header");

            // null-safe 내부 요소
            const bg = subVisual?.querySelector(".visual");
            const title = subVisual?.querySelector(".title");
            //const quick = document.querySelector("aside");

            // 요소 없으면 종료
            if (!subVisual) return;

            // 페이지 로드시 스크롤 맨 위로
            if ("scrollRestoration" in history) {
                history.scrollRestoration = "manual";
            }
            window.scrollTo(0, 0);

            if (header) header.classList.add("down");

            const tl = gsap.timeline();
            tl.to({}, {
                duration: 0.2
            }); // 딜레이

            // 요소가 있는 경우만 애니메이션 실행
            if (bg) {
                tl.to(bg, {
                    duration: 1,
                    width: "100%",
                    height: "100%",
                    ease: "power2.out",
                    onComplete: () => {
                        if (header) header.classList.remove("down");
                    }
                });
            }

            if (title) {
                tl.from(title, {
                    y: "100%",
                    duration: 1,
                    ease: "power2.out",
                }, "-=0.3");
            }


            // ScrollTrigger 적용 (subVisual 존재는 위에서 체크됨)
            ScrollTrigger.create({
                trigger: subVisual,
                start: "top top",
                end: "max",
                pin: true,
                scrub: 0.5,
                pinSpacing: false,
            });
        },

        // Mobile
        "(max-width: 1024px)": function() {
            const subVisual = document.querySelector(".sub-top-visual");
            if (!subVisual) return;
            gsap.set(subVisual, {
                clearProps: "all"
            });
        },
    });

    // 반응형 리사이징 대응
    window.addEventListener("resize", ScrollTrigger.update);
} // 20250826


window.initTabs = function(tabSelector, panelSelector) {
    const tabLinks = document.querySelectorAll(tabSelector); 
    const tabPanels = document.querySelectorAll(panelSelector); 
    tabLinks.forEach((tab, index) => {
        tab.addEventListener('click', () => {           
            tabLinks.forEach((item, i) => {
                item.setAttribute('aria-selected', 'false');
                item.classList.remove('active');
                item.querySelector('button').removeAttribute('title');             
                tabPanels[i].classList.remove('active');
            });            
            tab.setAttribute('aria-selected', 'true');
            tab.classList.add('active');
            tab.querySelector('button').setAttribute('title', '현재탭');
            tabPanels[index].classList.add('active');

            if (typeof onChangeCallback === "function") {
                onChangeCallback(i);
            }
        });
    });
    if (tabLinks.length > 0) {
        tabLinks[0].setAttribute('aria-selected', 'true');
        tabLinks[0].classList.add('active');
        tabPanels[0].classList.add('active');
        tabLinks[0].querySelector('button').setAttribute('title', '현재탭');
    }
}

function loadmotionSub() {
    const observeOptions ={
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('n-active');                
            } else {
                //entry.target.classList.remove('n-active');
            }
        });
    }, observeOptions);

    const motionElements = document.querySelectorAll('.n-motion'); 
    motionElements.forEach(el => {
        observer.observe(el);
    });
}

function videoScrollPlay() {
    // .video__frame이 없는 페이지는 종료
    if (!document.querySelector('.video__frame')) return;

    const videoArea = document.querySelector('.video-area');
    const video = document.querySelector('.video__frame video');
    if (!videoArea || !video) return;

    // PC (1025px 이상)에서만 스크롤 기반 재생 적용
    const mql = window.matchMedia('(min-width: 1025px)');
    let observer = null;

    function enableScrollPlay() {
        video.removeAttribute('autoplay');
        video.pause();

        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 });

        observer.observe(videoArea);
    }

    function disableScrollPlay() {
        if (observer) {
            observer.disconnect();
            observer = null;
        }
        // 모바일 전환 시 autoplay 복원
        video.setAttribute('autoplay', '');
        video.play().catch(() => {});
    }

    if (mql.matches) {
        enableScrollPlay();
    }

    mql.addEventListener('change', (e) => {
        if (e.matches) {
            enableScrollPlay();
        } else {
            disableScrollPlay();
        }
    });
}

function videoSound() {
  const video = document.querySelector('video');
  const soundBtn = document.querySelector('.tgSound');
  if(!(video && soundBtn)) return;
  video.muted = true;
  soundBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    // 볼륨이 0이었다면 기본값 복구
    if (!video.muted && video.volume === 0) {
      video.volume = 0.7;
    }
    soundBtn.classList.toggle('on', !video.muted);
  });
}

window.initSub = () => {
    subIntro();
    loadmotionSub();
    videoScrollPlay();
    videoSound();
};

