window.initVr = function() {
  const html = document.querySelector('html');
  const vrPopup = document.querySelector('.popup-vr');
  const vrCloseBtn = vrPopup.querySelector('.popup-vr-close');
  const vrOpenBtns = document.querySelectorAll('.vr-btn');
  const vrIframe = vrPopup.querySelector('.vr-content-frame iframe');
  const vrTitle = vrPopup.querySelector('.vr-content-wrap h3');
  const BASE_URL = 'https://player.xroo.io/space/';
  const vrNavBtns = vrPopup.querySelectorAll('.vr-nav-btn');
  const vrToggle = document.querySelector('.vr-mo-toggle');
  const vrNav = vrPopup.querySelector('.vr-content-nav');
  const vrContent = vrPopup.querySelector('.popup-vr-content');

  vrNavBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      vrNavBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const url = this.dataset.url;
      const title = this.dataset.title || 'SK VIEW VR';
      if (url) {
        vrIframe.src = BASE_URL + url;
        vrIframe.title = title;
        if (vrTitle) vrTitle.textContent = title;
      }

      vrToggle.classList.remove('is-open');
      vrNav.classList.remove('is-open');
      vrContent.classList.remove('is-open');
    });
  });
  vrCloseBtn.addEventListener('click', closeVrPopup);
  vrOpenBtns.forEach(btn => {
    btn.addEventListener('click', openVrPopup);
  });

  vrToggle.addEventListener('click', () => {
    vrToggle.classList.toggle('is-open');
    vrNav.classList.toggle('is-open');    
    vrContent.classList.toggle('is-open');  
  });
 

  function openVrPopup() {
    const iframeUrl = this.dataset.url;
    const title = this.dataset.title || 'SK VIEW VR';

    if (iframeUrl) {
      vrIframe.src = BASE_URL + iframeUrl;
      vrIframe.title = title;
    }
    if (vrTitle) vrTitle.textContent = title;

    vrNavBtns.forEach(b => b.classList.remove('active'));
    const matchedNavBtn = vrPopup.querySelector(`.vr-nav-btn[data-url="${iframeUrl}"]`);
    if (matchedNavBtn) matchedNavBtn.classList.add('active');

    vrPopup.classList.add('is-open');
    vrPopup.setAttribute('aria-modal', 'true');
    html.classList.add('not-scroll');
  }

  function closeVrPopup() {
    vrPopup.classList.remove('is-open');
    vrPopup.removeAttribute('aria-modal');
    html.classList.remove('not-scroll');
    vrIframe.src = '';
    vrToggle.classList.remove('is-open');
    vrNav.classList.remove('is-open');
    vrContent.classList.remove('is-open');
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
  
  vrSection();


};