import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { itemsGridData, itemsGalleryData, itemsThumbData } from './constants';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
const Items = () => {
  useEffect(() => {
    if (window.initItemsGallery) setTimeout(() => window.initItemsGallery(), 50);
  }, []);
  return (
    <div id="container">
      <section id="contents" className="sub">
          <div className="sub-top-visual">
            <div className="visual vs-unit-items"></div>
            <div className="title"><h2>조합원 제공품목</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>세대안내</li>
                <li aria-label="현재 위치">조합원 제공품목</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="static">
                <div className="grid-gallery">
                  <div className="grid-sizer"></div>
                  {itemsGridData.map((item, index) => (
                    <button key={index} type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                      <img src={`/resource/images/unit/${item.id}.jpg`} alt={item.title} />
                      <div className="grid-gallery-item-info">
                        <div className="gallery-info-text">
                          <p>{item.title}</p>
                        </div>
                        <div className="gallery-info-arrow">
                          <i className="ico-arrow-short"></i>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 갤러리 모달 */}
              <div className="highlight-gallery hidden viewer-modal">
                <button type="button" className="btnX">
                  <i className="ico-bigX"></i><span className="blind">갤러리 모달 닫기</span>
                </button>
                <div className="items-viewer">
                  <div className="gallery-swiper">
                    <div className="gallery-counter"></div>
                    <div className="swiper-wrapper">
                      {itemsGalleryData.map((item, index) => (
                        <div key={index} className="swiper-slide">
                          <div className="gallery-slide-item">
                            <div className={`gallery-slide-item-photo${item.type === 'photo2' ? '2' : (item.type !== 'normal' ? ` ${item.type}` : '')}`}>
                              <img src={`/resource/images/unit/${item.imgName || `${item.id}.jpg`}`} alt="" />
                              {item.extraImg && <img src={`/resource/images/unit/${item.extraImg}`} alt="" />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      className="swiper-button-prev"
                      aria-label="이전 수상작 보기"
                      tabIndex="0"
                    ></div>
                    <div
                      className="swiper-button-next"
                      aria-label="다음 수상작 보기"
                      tabIndex="0"
                    ></div>
                    <div className="swiper-pagination"></div>
                  </div>
                  <div className="gallery-thumbs">
                    <h3>조합원 제공품목</h3>
                    <div className="swiper-wrapper">
                      {itemsThumbData.map((item, index) => (
                        <button key={index} type="button" className="swiper-slide">
                          <img src={`/resource/images/unit/${item.id}.jpg`} alt={item.title} />
                        </button>
                      ))}
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

export default Items;
