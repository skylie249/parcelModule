import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { unitDesignTypes } from './constants';

const DesignTypeNav = () => (
  <ul>
    {unitDesignTypes.map((type, index) => (
      <li key={index} className={index === 0 ? 'active' : ''}>
        <button type="button" data-type={type}>{type}</button>
      </li>
    ))}
  </ul>
);

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
const UnitDesign = () => {
  useEffect(() => {
    if (window.initUnit) setTimeout(() => window.initUnit(), 50);
  }, []);
  return (
    <div id="container">
      <section id="contents" className="sub sub-design">
          <div className="sub-top-visual">
            <div className="visual vs-unit-design"></div>
            <div className="title"><h2>Unit design</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>세대안내</li>
                <li aria-label="현재 위치">Unit design</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="sub-top-video static">
                <div className="video-area">
                  <div className="video__frame">
                    <video muted autoPlay playsInline loop>
                      <source src="/resource/images/video/Unit.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>  
                </div>
              </div>
              <div className="design-sect1">
                <div className="bg">
                  <picture>
                    <source
                      srcSet="/resource/images/unit/design-top-bg-mo.jpg"
                      media="(max-width: 768px)"
                    />
                    <img src="/resource/images/unit/design-top-bg.jpg" />
                  </picture>
                </div>
                <div className="desc">
                  <div className="content-title">
                    <span className="cate n-motion n-bottom">Re:Space</span>
                    <h3 className="tx-tit n-motion n-bottom">
                      정해진 공간이 아닌, <br className="mo-only" />변화하고 확장되는 집
                    </h3>
                    <p className="tx-lg n-motion n-bottom">
                      나만의 취향을 자유롭게 그려내고, 지친 일상을 온전한 휴식으로 채워주는 삶의
                      공간<br  />
                      삶의 변화에 따라 유연하게 진화하는 집을 그려나갑니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="floor-plan-wrap">
                <h3 className="tx-tit n-motion n-bottom"><strong>단위세대 디자인</strong></h3>
                <div className="static">
                  {/*  pc  */}
                  <div className="floor-plan pc-only n-motion n-bottom">
                    <div className="floor-plan-nav">
                      <DesignTypeNav />
                    </div>
                    {/*  floor-plan-content는 unit.js에서 unit_mock.json을 불러와 동적 렌더링  */}
                    <div className="floor-plan-contents">
                    </div>
                  </div>

                  {/*  mo  */}
                  <div className="floor-plan-mo mo-only">
                    <div className="floor-plan-mo-nav n-motion n-bottom">
                      <DesignTypeNav />
                    </div>
                    <div className="floor-plan-mo-contents n-motion n-bottom">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default UnitDesign;
