import React, { useEffect } from 'react';

const vrList = [
  { id: 1, url: '2aec6539d5c14a929dd7973fd733da7b/4', title: 'SK VIEW 보행자 출입구 VR', name: '보행자 출입구', nameHtml: <>보행자<br />출입구</>, ico: 'ico1' },
  { id: 2, url: '2aec6539d5c14a929dd7973fd733da7b/1', title: 'SK VIEW 중앙광장 VR', name: '중앙광장', nameHtml: '중앙광장', ico: 'ico2' },
  { id: 3, url: '2aec6539d5c14a929dd7973fd733da7b/3', title: 'SK VIEW 어린이 놀이터 VR', name: '어린이 놀이터', nameHtml: <>어린이<br />놀이터</>, ico: 'ico3' },
  { id: 4, url: '2aec6539d5c14a929dd7973fd733da7b/2', title: 'SK VIEW 단지정문 VR', name: '정문', nameHtml: '정문', ico: 'ico5' },
  { id: 5, url: 'eb0d93bf7a9a4452ad0b95319deeda10/3', title: 'SK VIEW 커뮤니티 VR', name: '커뮤니티', nameHtml: '커뮤니티', ico: 'ico6' },
  { id: 6, url: 'eb0d93bf7a9a4452ad0b95319deeda10/5', title: 'SK VIEW 스카이 라운지 VR', name: '스카이라운지', nameHtml: <>스카이<br />라운지</>, ico: 'ico4' }
];

const vrNavOrder = [1, 2, 3, 6, 4, 5];

const Index = () => {
  useEffect(() => {
    let ctx;
    let timer;

    timer = setTimeout(() => {
      if (window.gsap) {
        ctx = window.gsap.context(() => {
          if (window.initMain) window.initMain();
          if (window.initVr) window.initVr();
        });
      } else {
        if (window.initMain) window.initMain();
        if (window.initVr) window.initVr();
      }
    }, 50);

    return () => {
      clearTimeout(timer);
      if (ctx) {
        ctx.revert();
      } else if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
        window.ScrollTrigger.clearScrollMemory?.();
      }
      if (window.destroyMain) window.destroyMain();
    };
  }, []);

  return (
    <>
      <p id="accessibility"><a href="#contents" className="skip-link">본문바로가기</a></p>
      <button type="button" className="scroll">SCROLL</button>
      <div id="container">
        <div id="contents" className="main">
        <div className="main-visual-wrap">
          <div className="main-intro">
            <div className="scene-logo">
              <div className="scene-logo-inner">
                <div className="scene-logo-wrap">
                  <div className="logo-intro">
                    <span className="logo-intro-s"><em className="blind">S</em></span>
                    <span className="logo-intro-k"><em className="blind">K</em></span>
                    <span className="logo-intro-v"><em className="blind">V</em></span>
                    <span className="logo-intro-i"><em className="blind">I</em></span>
                    <span className="logo-intro-e"><em className="blind">E</em></span>
                    <span className="logo-intro-w"><em className="blind">W</em></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="scene-slide">
              <div className="scene-slide-inner">
                <div className="swiper-visual-wrap mask" id="trigger">
                  <div className="swiper-visual" id="slide">
                    <div className="swiper-wrapper">

                      <div className="swiper-slide" data-type="video">
                        <div className="video-frame bg1">
                          <video className="responsive-video" muted autoPlay playsInline loop preload="metadata" aria-label="매인 배너 첫번째 동영상">
                            <source src="/resource/images/video/Main1.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="text text1">
                          <div className="text-1">
                            <p>SK VIEW AVENUE PARK</p>
                          </div>
                          <div className="text-2">
                            <p>단 하나의 명작, 애비뉴 파크</p>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide" data-type="video">
                        <div className="video-frame bg2">
                          <video className="responsive-video video-clip-style" muted autoPlay playsInline loop preload="none" aria-label="매인 배너 두번째 동영상">
                            <source src="/resource/images/video/Main2.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="text">
                          <div className="text-1">
                            <p>THE HEART OF <br className="mo-only" />THE PARK</p>
                          </div>
                          <div className="text-2">
                            <p>화려한 애비뉴가 채워준 것이 도시의 에너지라면, <br className="pc-only" />파크가 완성하는 것은 삶의 여백입니다.</p>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide" data-type="video">
                        <div className="video-frame bg3">
                          <video className="responsive-video" muted autoPlay playsInline loop preload="none">
                            <source src="/resource/images/video/Main3.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="text">
                          <div className="text-1 kor">
                            <p>수지의 새로운 역사를 여는 위대한 문</p>
                          </div>
                          <div className="text-2">
                            <p>수지의 새로운 천 년을 여는 이 거대한 문 뒤에서, <br className="pc-only" />당신의 삶은 비로소 완전한 안식과 자부심으로 피어납니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-nav">
                      <div className="swiper-controls">
                        <button type="button" className="swiper-button-prev">
                          <i className="ico-prev"><span className="blind">이전</span></i>
                        </button>
                        <div className="swiper-pagination"></div>
                        <button type="button" className="swiper-button-next">
                          <i className="ico-next"><span className="blind">다음</span></i>
                        </button>
                        <button className="btn-pause" type="button">
                          <i className="ico-pause"><span className="blind">정지</span></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-section-wrap">
          <div className="main-vr-section">
            <div className="vr-section">
              <div className="vr-section-content">
                <div className="vr-enter">
                  <div className="vr-enter-image">
                    <picture>
                      <source srcSet="/resource/images/main/main-vr-bg-mo.jpg" media="(max-width: 1024px) and (orientation: portrait), (max-width: 768px)" />
                      <img src="/resource/images/main/main-vr-bg.jpg" alt="입장이미지" />
                    </picture>
                  </div>
                  <h3>VR 단지 투어</h3>
                  {vrList.map((vr) => (
                    <button key={vr.id} type="button" className={`vr-btn vr-btn${vr.id}`} data-url={vr.url} data-title={vr.title}>
                      <span className="vr-pin"><span className="txt">{vr.nameHtml}</span></span>
                      <span className="shadow"></span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* vr popup */}
        <div className="popup-vr">
          <div className="popup-vr-inner">
            <button type="button" className="popup-vr-close"><i className="ico-bigX"></i><span className="blind">팝업 닫기</span></button>
            <div className="popup-vr-content">
              <div className="popup-vr-content-inner">
                <div className="vr-content-wrap">
                  <div className="vr-content-frame">
                    <iframe title="SK VIEW VR 영상" frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="vr-content-nav">
              {vrNavOrder.map((id) => {
                const vr = vrList.find(v => v.id === id);
                return (
                  <button key={vr.id} type="button" className="vr-nav-btn" data-url={vr.url} data-title={vr.title}>
                    <span>{vr.name}</span><i className={vr.ico}></i>
                  </button>
                );
              })}
            </div>
            <p className="popup-vr-ment">※ 해당 이미지는 조합원님의 이해를 돕기위한 것으로 실제 인허가 등 사업추진 과정에 따라 다소 차이가 발생할 수 있습니다</p>
            <button type="button" className="vr-mo-toggle"><i className="ico">오픈</i></button>
          </div>
        </div>
        {/* //vr popup */}

      </div>
      <div className="intro"></div>
    </div>
    </>
  );
};

export default Index;
