
function headerAction(){
    const header = document.querySelector('#header');
    const gnbWrap = document.querySelector('.header-gnb')
    const gnbInner = document.querySelector('.header-gnb-inner'); 
    const btnNavbar = document.querySelector('.btn-navbar');
    const body = document.querySelector('html');
    function addOpenClass() {
        header.classList.add("open");
    }
    function removeOpenClass() {
        header.classList.remove("open");
    }
    gnbInner.addEventListener('mouseover',addOpenClass);
    gnbInner.addEventListener('focusin',addOpenClass);
    gnbInner.addEventListener('mouseleave',removeOpenClass); 
    gnbWrap.addEventListener('focusout',removeOpenClass);
    btnNavbar.addEventListener('click', () => {
        const isPc = window.matchMedia("(min-width: 1025px)").matches;

        if (!header.classList.contains('on')) {
            header.classList.add('on');
            btnNavbar.classList.add('open');
            btnNavbar.setAttribute('title', '전체메뉴 닫기');
            body.classList.add('not-scroll');

            // if (isPc) {
            //     document.querySelector('aside').style.opacity = "0";
            // }

            //if (sitemapWrap) sitemapWrap.removeAttribute('inert');
        } else {
            header.classList.remove('on');
            btnNavbar.classList.remove('open');
            btnNavbar.setAttribute('title', '전체메뉴 열기');
            body.classList.remove('not-scroll');

            // if (isPc) {
            //     document.querySelector('aside').style.opacity = "1";
            // }

            //if (sitemapWrap) sitemapWrap.setAttribute('inert', '');
        }
    });
    $(".sitemap-links-last").keydown(function(e) {
        if(e.keyCode == 9 && !e.shiftKey) {
            e.preventDefault();	    
            $(".btn-navbar").focus();
        }
    });
    $(".btn-navbar").keydown(function(e) {
        if(header.classList.contains("on")) { 
            if(e.keyCode == 9 && e.shiftKey) {
                e.preventDefault();	    
                $(".sitemap-links-last").focus();
            }
        }
    });
}

function gnbMo(){  
    const depth1Buttons = document.querySelectorAll('.depth1');
    const hasButtons = document.querySelectorAll('.has');
    depth1Buttons.forEach(btn => {
      btn.addEventListener('click', function () {
        const li = btn.closest('li');        
        document.querySelectorAll('.gnb-mo-links > li').forEach(item => {
          if (item !== li) item.classList.remove('active');
        });
        li.classList.toggle('active');
      });
    });
    hasButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        const li = btn.closest('li');    
        const siblings = li.parentElement.querySelectorAll('.has');
        siblings.forEach(sib => {
          if (sib !== btn) sib.closest('li').classList.remove('active');
        });
        li.classList.toggle('active');
      });
    }); 

}

function headerFix(){
    const contents = document.querySelector('#contents')
    const subHasVs = document.querySelector('.sub-top-visual')
    const header = document.querySelector('#header');    
    const main = document.querySelector('.main'); 
    let lastScrollTop = 0;
    let delta = 15;
    
   if(contents && contents.classList.contains('sub')) {
        if (subHasVs) {
            // 초기 상태 설정
            if (getScrollTop() === 0) {
                header.classList.remove('fixed');
            }
        } else {
            header.classList.add('fixed');
        }

        window.addEventListener('scroll', function () {
            let currentScroll = getScrollTop();
            if (subHasVs && currentScroll <= 5) { // 5px 이하면 최상단으로 간주
                header.classList.remove('fixed');
                header.classList.remove('down');
                lastScrollTop = currentScroll;
                return;
            }       
            // 스크롤 방향에 따른 헤더 상태 변경
            if (Math.abs(lastScrollTop - currentScroll) <= delta) return; 
            if (currentScroll > lastScrollTop && currentScroll > delta) {
                // 내려갈 때
                header.classList.add('down');
                header.classList.add('fixed');
            } else {
                // 올릴 때
                header.classList.remove('down');
                header.classList.add('fixed');
            }
            lastScrollTop = currentScroll;
        });

        // 모바일 터치 이벤트 대응
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].clientY;
            let currentScroll = getScrollTop();
            
            // 터치 후 최상단 체크
            if (subHasVs && currentScroll <= 5) {
                header.classList.remove('fixed');
                header.classList.remove('down');
            }
        }, { passive: true });
    } 
}  

// 모바일 대응 스크롤 위치 가져오기 함수
function getScrollTop() {
    return window.pageYOffset || 
           document.documentElement.scrollTop || 
           document.body.scrollTop || 
           0;
}

function footerAct(){
    const dropdownBtn = document.querySelector('.dropdown > button');
    dropdownBtn.addEventListener('click',(e) => {
        const parent = e.currentTarget.parentNode;
        parent.classList.toggle('open');
        if(parent.classList.contains("open")) {
            parent.querySelector("i > span").textContent = "닫기";
        } else {
            parent.querySelector("i > span").textContent = "열기";
        }
    });
}

function quickAct(){
    const html = document.querySelector('html');
    const quickFirstLink = document.querySelector('.quick-ul ul li:first-child a');
    const quickLinks = document.querySelectorAll('.quick-ul > ul > li > a');
    const btnQuick = document.querySelector('.btn-quick');
    const quickWrap = document.querySelector('.quick-wrap');
    const quickClose = document.querySelector('.quick-close');
    const body = document.querySelector('body');

    function getQuickUlHeight() {
        const base = 7.5;
        const perItem = 9.5;
        const quickLinks = document.querySelectorAll('.quick-ul > ul > li > a');
        return `${base + quickLinks.length * perItem}rem`;
    }

    btnQuick.addEventListener('click',() => {
        body.classList.add('aside-dim');
        quickWrap.classList.add('open');
        btnQuick.classList.add('hide');
        html.classList.add('is-scroll');
        gsap.set(quickWrap,{display:"flex"});
        gsap.fromTo('.quick-ul',{
            y:'0',
            duration:0.3,
            autoAlpha:0,
            ease: "power1.out",
            height:0
        },{
            y:'0',
            duration:0.3,
            autoAlpha:1,
            ease: "power1.out",
            height: getQuickUlHeight(),
        });
        gsap.to('.quick-close',{display:"flex"});
        gsap.to('.quick-ul > ul',{display:"flex"});
        quickClose.focus();
        lockScroll();
    });

    quickClose.addEventListener('click',()=>{
        quickCloseAct();
    });

    if (quickFirstLink && quickClose) {
        quickFirstLink.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && e.shiftKey) {
                e.preventDefault();
                quickClose.focus();
            }
        });
        quickClose.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                quickFirstLink.focus();
            }
        });
    }

    quickLinks.forEach(link => {
        link.addEventListener('click', () => {
            quickCloseAct();
        })
    });

    function quickCloseAct(){
        body.classList.remove('aside-dim');
        quickWrap.classList.remove('open');
        btnQuick.classList.remove('hide');
        html.classList.remove('is-scroll');
        gsap.fromTo('.quick-ul',{
            y:'0',
            duration:0.3,
            autoAlpha:1,
            ease: "power1.out",
            height: getQuickUlHeight(),
        },{
            y:'0',
            duration:0.3,
            autoAlpha:0,
            ease: "power1.out",
            height:0,
            onComplete:() =>{
                gsap.set(quickWrap,{display:"none"});
                gsap.set('.quick-close',{display:"none"});
                gsap.set('.quick-ul > ul',{display:"none"});
            }
        });
        btnQuick.focus();
        unlockScroll();
    }

    function preventScroll(e) {
        e.preventDefault();
    }

    function lockScroll() {
        window.addEventListener("wheel", preventScroll, { passive: false });
        window.addEventListener("touchmove", preventScroll, { passive: false });
    }

    function unlockScroll() {
        window.removeEventListener("wheel", preventScroll, { passive: false });
        window.removeEventListener("touchmove", preventScroll, { passive: false });
    }
}


function toTopAct () {
    const toTopBtn = document.querySelector('.btn-toTop');
    if (!toTopBtn) return;

    toTopBtn.addEventListener('click', () => {
        const target = document.querySelector('.danji-lists-list');
        if (!target) return;

        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

function addTopBtn() {
    if (!document.querySelector(".top-btn-show")) return;

    const aside = document.querySelector("aside");
    if (!aside) return;

    if (aside.querySelector(".btn-toTop")) return;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn-toTop";
    btn.innerHTML = `
        <i class="ico-top" aria-hidden="true"></i>
        <span>TOP</span>
    `;

    aside.appendChild(btn);
}

function topBtnTrigger() {
    const toTopBtn = document.querySelector('.btn-toTop');
    const target = document.querySelector('.danji-lists-list');
    if (!toTopBtn || !target) return;

    const showPosition = target.offsetTop + window.innerHeight; // 대상 시작 위치 + 100vh

    function checkButtonVisibility() {
        const scrollY = (window.scrollY || document.documentElement.scrollTop); // 1px 더 높게

        if (scrollY - 1 >= showPosition) {
            toTopBtn.style.display = 'flex';
        } else {
            toTopBtn.style.display = 'none';
        }
    }

    window.addEventListener('scroll', checkButtonVisibility);
    window.addEventListener('resize', () => {
        // 화면 크기 바뀌면 showPosition 재계산
        checkButtonVisibility();
    });

    checkButtonVisibility(); // 초기 상태 체크
}

function tabSlide() {
    let tabSwiper = new Swiper('.tab-swiper',{
        spaceBetween: 0,
        slidesPerView:'auto',
        preventClicks: true,
        preventClicksPropagation: false, 
        observer: true,
        observeParents: true,  
    })
    const itemLinks = document.querySelectorAll('.tab-swiper .tab-link');
    itemLinks.forEach(item => {
        item.addEventListener('click',(e)=>{            
            itemLinks.forEach(el => {
                el.parentNode.classList.remove('active');
            });
            const currentItem = e.currentTarget;
            currentItem.parentNode.classList.add('active');         
            muCenter(currentItem.parentNode);
        })
    })
    function muCenter(target) {
        const snbwrap = document.querySelector('.swiper-wrapper');
        const box = document.querySelector('.tab-swiper');
        const boxHalf = box.offsetWidth / 2;

        const targetRect = target.getBoundingClientRect();
        const boxRect = box.getBoundingClientRect();
        const targetLeftInBox = targetRect.left - boxRect.left;
        const targetCenter = targetLeftInBox + (target.offsetWidth / 2);

        // 전체 리스트 width 계산
        const slideEls = snbwrap.querySelectorAll('.tab-swiper .swiper-slide');
        let listWidth = 0;
        slideEls.forEach(slide => {
            listWidth += slide.offsetWidth ;
            console.log(listWidth)
        });

        let pos;
        if (targetCenter <= boxHalf) {
            pos = 0;
        } else if ((listWidth - targetCenter) <= boxHalf) {
            pos = listWidth - box.offsetWidth + 40;
        } else {
            pos = targetCenter - boxHalf;
        }

        // box 영역을 넘지 않도록 제한
        const maxPos = listWidth - box.offsetWidth;
        pos = Math.max(0, Math.min(pos, maxPos));

        setTimeout(() => {
            snbwrap.style.transform = `translate3d(${-pos}px, 0, 0)`;
            snbwrap.style.transitionDuration = '500ms';
        }, 200);
    }
}

function heartBtn(){
    const btnHearts = document.querySelectorAll('.btn-fav');
    btnHearts.forEach(btnHeart =>{
        btnHeart.addEventListener('click',(e) => {        
            if(e.target.classList.contains('active')){
                e.target.classList.remove('active');
                btnHeart.querySelector('i').textContent="관심단지등록안됨"
            } else{
                e.target.classList.add('active');
                btnHeart.querySelector('i').textContent="관심단지등록됨"
            }        
        })
    })   
}

function loadmotion() {
    const slideInEls = document.querySelectorAll('.slide-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        threshold: 0.1, 
        rootMargin: '0px 0px -10% 0px'

    });

    slideInEls.forEach(el => {
        observer.observe(el);
    });
}

function searchBox(){
    const searchBtn = document.querySelector('.danji-search-box-top .btn-sh-detail');
    const searchDetail = document.querySelector('.danji-search-box-detail');
    const local = document.querySelector('#local');
    const households = document.querySelector('#households');

    const contentFocusableElements = [local, households].filter(el => el);

    searchBtn.addEventListener('click', (e) => {
        const isOpen = searchDetail.classList.toggle('open');
        e.currentTarget.querySelector('.blind').textContent = isOpen ? "닫기" : "열기";
        e.currentTarget.classList.toggle('on');

        if (isOpen && contentFocusableElements.length > 0) {
            contentFocusableElements[0].focus();
        } else {
        }
    });

    searchDetail.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !searchDetail.classList.contains('open')) return;

        const allFocusableElements = [searchBtn, ...contentFocusableElements];

        if (allFocusableElements.length === 0) return;

        const firstElement = allFocusableElements[0]; // searchBtn
        const lastElement = allFocusableElements[allFocusableElements.length - 1]; // #households
        const currentActiveElement = document.activeElement;

        if (e.shiftKey) {
            if (currentActiveElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (currentActiveElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });

    searchBtn.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' || !searchDetail.classList.contains('open')) return;

        const allFocusableElements = [searchBtn, ...contentFocusableElements].filter(el => el);
        if (allFocusableElements.length === 0) return;

        const firstElement = allFocusableElements[0];
        const lastElement = allFocusableElements[allFocusableElements.length - 1];

        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            }
        } else {
            if (currentActiveElement === firstElement) {
                e.preventDefault();
                contentFocusableElements[0].focus();
            }
        }
    });
}

function asideAct(){
    const footer = document.querySelector('#footer');
    const aside = document.querySelector('aside');
    const quickfirstLink = document.querySelector('.quick-ul ul li:first-child a');
    const quickClose = document.querySelector('.quick-close');
    const observer =  new IntersectionObserver(
        ([entry])=>{
            if(entry.isIntersecting){
                aside.classList.add('hide');   
                          
            } else{
                aside.classList.remove('hide'); 
            }
        },{
            root:null,
            threshold:0,
        }
    );
    observer.observe(footer);

    if (quickfirstLink && quickClose) {
      quickfirstLink.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && e.shiftKey) {
          e.preventDefault();
          quickClose.focus();
        }
      });
      quickClose.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && !e.shiftKey) {
          e.preventDefault();
          quickfirstLink.focus();
        }
      });
    }    
}

function resize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 웹 접근성 - 평면 정보의 우측하단버튼이 1개일 때 button tag를 span tag로 변경
function fixSingleTabAccessibility(selector = '.tab-type-list') {
    const tabLists = document.querySelectorAll(selector);

    tabLists.forEach(tabList => {
        const tabItems = tabList.querySelectorAll('li');

        if (tabItems.length === 1) {
            const li = tabItems[0];
            const button = li.querySelector('button');

            if (button) {
                const span = document.createElement('span');
                span.innerHTML = button.innerHTML;
                span.className = button.className;

                li.replaceChild(span, button);
                li.removeAttribute('aria-selected');
            }
        }
    });
}


function bgmOnOff() {
    const bgm = document.getElementById('bgm');
    const bgSoundBtn = document.querySelector('.bgSoundBtn');
    if (!bgm || !bgSoundBtn) return;

    bgSoundBtn.addEventListener('click', () => {
      if (!bgm.paused) {
        // BGM 재생 중 → 끄기
        bgm.pause();
        bgm.muted = true;
        bgSoundBtn.querySelector('i').textContent = 'SOUND ON';
        bgSoundBtn.classList.remove('on');
      } else {
        // BGM 꺼져 있음 → 켜기, 비디오 사운드는 끄기
        const video = document.querySelector('video');
        const soundBtn = document.querySelector('.tgSound');
        if (video && !video.muted) {
          video.muted = true;
          soundBtn?.classList.remove('on');
        }
        bgm.play();
        bgm.loop = true;
        bgm.muted = false;
        bgSoundBtn.querySelector('i').textContent = 'SOUND OFF';
        bgSoundBtn.classList.add('on');
      }
    });
}

window.addEventListener('resize', resize, {passive: false});
window.addEventListener('orientationchange', resize);
window.initCommon = () => {
    if (window._commonInitialized) return;
    window._commonInitialized = true;

    resize();
    addTopBtn();
    toTopAct();
    topBtnTrigger();
    fixSingleTabAccessibility();
    if (document.querySelector('#header')) {
        headerFix();
        headerAction();
        gnbMo();
    }    
    if(document.querySelector('aside')){
        asideAct();
    }
    if(document.querySelector('.dropdown')){
        footerAct();
    }
    bgmOnOff();
};

window.initCommonPage = () => {
    resize();
    if(document.querySelector('.danji-search-box-detail')){
        searchBox();
    }   
    const contents = document.querySelector('#contents');
    if(document.querySelector('aside') && contents && contents.classList.contains('sub')){
        quickAct();
    }
    loadmotion(); 
};



// 우클릭 방지
document.addEventListener('contextmenu', event => event.preventDefault());
// 키보드 단축키 방지 (Ctrl+P, PrintScreen 등)
document.addEventListener('keydown', (e) => {
    // Print Screen 키 차단 클립보드 비우기 시도
    if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
        alert('캡처가 금지된 페이지입니다.');
    }    
    // Ctrl + P (인쇄를 통한 PDF 저장 방지)
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        alert('인쇄할 수 없습니다.');
    }
});