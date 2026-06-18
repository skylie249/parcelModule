window.initGallery = function() {
    const galleryModal = document.querySelector('.highlight-gallery');
    const btnX = document.querySelector('.btnX');
    const galleryGrid = document.querySelector('.grid-gallery');
    const galleryWrapper = document.querySelector('.gallery-swiper .swiper-wrapper');
    const thumbWrapper = document.querySelector('.gallery-thumbs .swiper-wrapper');
    const html = document.documentElement;

    let thumbSwiper = null;
    let galleryLists = null;
    let msnry = null;
    let previousFocus = null;
    let resizeTimer = null;

    function handleModalKeydown(e) {
        if (e.key === "Escape") {
            closeModal();
        } else if (e.key === "Tab") {
            trapFocus(e);
        }
    }

    function handleThumbKeydown(e) {
        const slide = e.target.closest('.swiper-slide');
        if (slide && e.key === 'Enter') {
            e.preventDefault();
            const index = Array.from(thumbWrapper.children).indexOf(slide);
            if (index > -1 && galleryLists) {
                galleryLists.slideTo(index);
            }
        }
    }


    function updateH3Title(index) {
        const h3 = document.querySelector('.gallery-thumbs h3');
        const thumbImgs = thumbWrapper.querySelectorAll('.swiper-slide img');
        if (thumbImgs[index]) {
            h3.textContent = thumbImgs[index].getAttribute('alt');
        }
    }

    function initSwipers() {
        if (thumbSwiper || galleryLists) return;

        thumbSwiper = new Swiper(".gallery-viewer .gallery-thumbs", {
            slidesPerView: "auto",
            freeMode: true,
            spaceBetween: 10,
            mousewheel: true,
            observer: true,
            observeParents: true,   
            watchSlidesProgress: true,
            slidesOffsetAfter: 32
        });

        galleryLists = new Swiper(".gallery-viewer .gallery-swiper", {
            slidesPerView: 1,
            spaceBetween: 80,
            speed: 800,
            loop: false,
            effect: "fade",
            fadeEffect: { crossFade: true },
            pagination: { el: ".gallery-counter", type: "fraction" },
            thumbs: { swiper: thumbSwiper },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
            observer: true,
            observeParents: true,
            on: {
                slideChange: function() {
                    updateH3Title(this.realIndex);
                }
            }
        });

        thumbWrapper.addEventListener('keydown', handleThumbKeydown);
    }

    function openModal(index,title) {      
        galleryModal.classList.remove("hidden");
        galleryModal.classList.add("open");
        html.classList.add("not-scroll");
        galleryLists.slideTo(index - 1);
        previousFocus = document.activeElement;  
        updateH3Title(index - 1);     
    }

    function closeModal() {
        galleryModal.classList.add("hidden");
        galleryModal.classList.remove("open");
        html.classList.remove("not-scroll");

        document.removeEventListener("keydown", handleModalKeydown);
        thumbWrapper.removeEventListener('keydown', handleThumbKeydown);
 
        if (previousFocus) previousFocus.focus();
        previousFocus = null;

    }


    function trapFocus(e) {
        const focusable = galleryModal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (focusable.length === 0) return;

        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }

    function initGalleryModal() {
        galleryGrid.addEventListener('click', e => {
            const btn = e.target.closest('.grid-gallery-item');
            if (!btn) return;
            e.preventDefault();
            //const index = btn.getAttribute('data-index');   
            let number;          
            const imgElement = btn.querySelector('img');      
            const imgPath = imgElement ? imgElement.getAttribute('src') : '';
            const matches = imgPath.match(/_(\d+)\./);
            const title = btn.querySelector('img').getAttribute('alt');

            if (matches) {
              number = matches[1];              
            } else {
              console.log("숫자를 찾을 수 없습니다.");
            }
            openModal(number,title);
        });

        btnX.addEventListener("click", closeModal);
    }

    function initScrollAnimation() {
        const items = document.querySelectorAll('.grid-gallery-item');        
        items.forEach(item => {
            gsap.fromTo(item,{
              opacity: 0, 
              y: 50
            },{
              y:0,
              opacity:1,
              duration: 0.6, 
              stagger: 0.1, // 0.1초 간격으로 순차적 실행
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
              }
            })
        })        
    }

    function initMasonry() {
        const getGutter = () => (window.innerWidth <= 768 ? 10 : 20);
        let prevWidth = window.innerWidth;

        const layoutMasonry = (isFirst = false) => {
            if (msnry) {
                msnry.options.gutter = getGutter();
                msnry.layout();
            } else {
                msnry = new Masonry(galleryGrid, {
                    itemSelector: ".grid-gallery-item",
                    columnWidth: ".grid-sizer",
                    gutter: getGutter(),
                    percentPosition: true,
                });
            }
            if (isFirst) {
                initScrollAnimation();
            }
        };

        imagesLoaded(galleryGrid, () => layoutMasonry(true));

        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const currentWidth = window.innerWidth;
                // 모바일 주소창 토글은 height만 변경되므로 width 변화 없으면 무시
                if (currentWidth === prevWidth) return;
                prevWidth = currentWidth;
                layoutMasonry();
                ScrollTrigger.refresh();
            }, 200);
        });
    }

    function init() {
        initGalleryModal();
        initMasonry();
        initSwipers()
    }

    init();
};
