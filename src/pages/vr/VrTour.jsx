import React, { useEffect } from 'react';

/**
 * [Code Review]
 * VR 단지 투어 페이지입니다.
 * 개선 권장 사항:
 * Index.jsx의 VR 영역과 중복되는 코드가 많습니다. 
 * VR 영역 전체를 독립적인 <VrViewer /> 컴포넌트로 분리하여 재사용성을 높이는 것을 권장합니다.
 */
const VrTour = () => {
  useEffect(() => {
    if (window.initVr) {
      setTimeout(() => window.initVr(), 50);
    }
  }, []);

  return (
    <div id="container">
      <section id="contents" className="sub sub-vr">          
        <div className="sub-contents-wrap">
          <div className="sub-contents">
            <div className="sub-vr-section">                  
              <div className="vr-section">             
                <div className="vr-section-content">
                  <div className="vr-enter">
                    <div className="vr-enter-image">
                      <picture>
                        <source srcSet="/resource/images/main/main-vr-bg-mo.jpg" media="(max-width: 1024px) and (orientation: portrait), (max-width: 768px)" />
                        <img src="/resource/images/main/main-vr-bg.jpg" alt="입장이미지" />
                      </picture>
                    </div>
                    <h3 className="tx-tit">VR 단지 투어</h3>  
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
            {/* vr popup */}
            <div className="popup-vr">
              <div className="popup-vr-inner">
                <button type="button" className="popup-vr-close"><i className="ico-bigX"></i><span className="blind">팝업 닫기</span></button>
                <div className="popup-vr-content">
                  <div className="popup-vr-content-inner">
                    <div className="vr-content-wrap">
                      <div className="vr-content-frame">
                        <iframe title="SK VIEW 스카이 라운지 VR 영상" frameBorder="0" allowFullScreen></iframe>
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
        </div>
      </section>
    </div>
  );
};

export default VrTour;
