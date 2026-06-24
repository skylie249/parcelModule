import React, { useEffect } from 'react';

/**
 * [Code Review]
 * 메인 페이지 컴포넌트입니다.
 * 개선 권장 사항:
 * 1. 전역 ScrollTrigger 객체 관리 방식 개선 (GSAP 사용 시 React의 useLayoutEffect와 gsap.context 활용 권장)
 * 2. 반복되는 슬라이드, VR 버튼 요소를 배열 매핑으로 리팩토링
 */
const Index = () => {
  useEffect(() => {
    if (window.initMain) setTimeout(() => window.initMain(), 50);
    if (window.initVr) setTimeout(() => window.initVr(), 50);
    return () => {
      // [Code Review] ScrollTrigger 등 전역 플러그인을 정리할 때는, 
      // React 18의 StrictMode에서 두 번 호출되는 문제를 방지하기 위해 
      // gsap.context()를 사용하는 최신 GSAP-React 패턴 적용을 권장합니다.
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
        window.ScrollTrigger.clearScrollMemory?.();
      }
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
                  {/* [Code Review] 아래 VR 버튼들은 구조가 동일하므로, 데이터 배열(예: vrList)을 선언한 뒤 map() 함수로 렌더링하면 코드가 훨씬 깔끔해집니다. */}
                  <button type="button" className="vr-btn vr-btn1" data-url="2aec6539d5c14a929dd7973fd733da7b/4" data-title="SK VIEW 보행자 출입구 VR"><span className="vr-pin"><span className="txt">보행자<br />출입구</span></span><span className="shadow"></span></button>
                  <button type="button" className="vr-btn vr-btn2" data-url="2aec6539d5c14a929dd7973fd733da7b/1" data-title="SK VIEW 중앙광장 VR"><span className="vr-pin"><span className="txt">중앙광장</span></span><span className="shadow"></span></button>
                  <button type="button" className="vr-btn vr-btn3" data-url="2aec6539d5c14a929dd7973fd733da7b/3" data-title="SK VIEW 어린이 놀이터 VR"><span className="vr-pin"><span className="txt">어린이<br />놀이터</span></span><span className="shadow"></span></button>
                  <button type="button" className="vr-btn vr-btn4" data-url="2aec6539d5c14a929dd7973fd733da7b/2" data-title="SK VIEW 단지정문 VR"><span className="vr-pin"><span className="txt">정문</span></span><span className="shadow"></span></button>
                  <button type="button" className="vr-btn vr-btn5" data-url="eb0d93bf7a9a4452ad0b95319deeda10/3" data-title="SK VIEW 커뮤니티 VR"><span className="vr-pin"><span className="txt">커뮤니티</span></span><span className="shadow"></span></button>
                  <button type="button" className="vr-btn vr-btn6" data-url="eb0d93bf7a9a4452ad0b95319deeda10/5" data-title="SK VIEW 스카이 라운지 VR"><span className="vr-pin"><span className="txt">스카이<br />라운지</span></span><span className="shadow"></span></button>
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
              <button type="button" className="vr-nav-btn" data-url="2aec6539d5c14a929dd7973fd733da7b/4" data-title="SK VIEW 보행자 출입구 VR"><span>보행자 출입구</span><i className="ico1"></i></button>
              <button type="button" className="vr-nav-btn" data-url="2aec6539d5c14a929dd7973fd733da7b/1" data-title="SK VIEW 중앙광장 VR"><span>중앙광장</span><i className="ico2"></i></button>
              <button type="button" className="vr-nav-btn" data-url="2aec6539d5c14a929dd7973fd733da7b/3" data-title="SK VIEW 어린이 놀이터 VR"><span>어린이 놀이터</span><i className="ico3"></i></button>
              <button type="button" className="vr-nav-btn" data-url="eb0d93bf7a9a4452ad0b95319deeda10/5" data-title="SK VIEW 스카이 라운지 VR"><span>스카이라운지</span><i className="ico4"></i></button>
              <button type="button" className="vr-nav-btn" data-url="2aec6539d5c14a929dd7973fd733da7b/2" data-title="SK VIEW 단지정문 VR"><span>정문</span><i className="ico5"></i></button>
              <button type="button" className="vr-nav-btn" data-url="eb0d93bf7a9a4452ad0b95319deeda10/3" data-title="SK VIEW 커뮤니티 VR"><span>커뮤니티</span><i className="ico6"></i></button>
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
