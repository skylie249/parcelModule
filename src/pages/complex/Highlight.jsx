import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const highlightData = [
  { id: 1, title: '랜드마크 외관 디자인', isPhFull: false },
  { id: 2, title: '오픈스페이스 최대화', isPhFull: true },
  { id: 3, title: '주동수 축소', isPhFull: false },
  { id: 4, title: '스카이 커뮤니티', isPhFull: false },
  { id: 5, title: '대형 문주', isPhFull: false },
  { id: 6, title: '전세대 광장/공원 조망', isPhFull: false },
  { id: 7, title: '조망형 유리난간 창고', isPhFull: false },
  { id: 8, title: '남향 배치/통경축 확보', isPhFull: false },
  { id: 9, title: '판상형 위주 단위세대', isPhFull: false },
  { id: 10, title: '필로티 개방감 극대화', isPhFull: false },
  { id: 11, title: '자연과 예술이 흐르는 조경 프로그램', isPhFull: false },
  { id: 12, title: '하이엔드 커뮤니티', isPhFull: false },
  { id: 13, title: '드롭오프존', isPhFull: false },
  { id: 14, title: '주차장 편의성 극대화', isPhFull: false },
  { id: 15, title: 'SKAI 2.0', isPhFull: false }
];

const gridOrder = [1, 2, 3, 4, 6, 7, 5, 8, 10, 9, 11, 12, 15, 13, 14];

const Highlight = () => {
  useEffect(() => {
    if (window.initGallery) setTimeout(() => window.initGallery(), 50);
  }, []);

  return (
    <div id="container">
      <section id="contents" className="sub">
          <div className="sub-top-visual">
            <div className="visual vs-complex-highlight"></div>
            <div className="title"><h2>Highlight</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>단지안내</li>
                <li aria-label="현재 위치">Highlight</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="static">
                <div className="sub-title-c">
                  <h3 className="n-motion n-bottom">
                    <strong>랜드마크 단지</strong>를 위한 <br className="mo-only"  /><strong>핵심 특화 15</strong>
                  </h3>
                </div>
                <div className="grid-gallery">
                  <div className="grid-sizer"></div>
                  {gridOrder.map(id => {
                    const item = highlightData.find(d => d.id === id);
                    return (
                      <button key={item.id} type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                        <img src={`/resource/images/highlight/gallery_list_tumb_${item.id}.jpg`} alt={item.title} />
                        <div className="grid-gallery-item-info">
                          <div className="gallery-info-text">
                            <p>{item.title}</p>
                          </div>
                          <div className="gallery-info-arrow">
                            <i className="ico-arrow-short"></i>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 갤러리 모달 */}
              <div className="highlight-gallery viewer-modal hidden">
                <button type="button" className="btnX">
                  <i className="ico-bigX"></i><span className="blind">갤러리 모달 닫기</span>
                </button>
                <div className="gallery-viewer">
                  <div className="gallery-swiper">
                    <div className="gallery-counter"></div>
                    <div className="swiper-wrapper">
                      {highlightData.map(item => (
                        <div className="swiper-slide" key={item.id}>
                          <div className="gallery-slide-item">
                            <div className="gallery-slide-item-photo">
                              <img src={`/resource/images/highlight/viewer_gallery_${item.id}_1.jpg`} alt="" />
                            </div>
                            <div className={`gallery-slide-item-photo ${item.isPhFull ? 'ph-full' : ''}`}>
                              <img src={`/resource/images/highlight/viewer_gallery_${item.id}_2.jpg`} alt="" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="swiper-button-prev" aria-label="이전 보기" tabIndex="0"></div>
                    <div className="swiper-button-next" aria-label="다음 보기" tabIndex="0"></div>
                    <div className="swiper-pagination"></div>
                  </div>
                  <div className="gallery-thumbs">
                    <h3>랜드마크 단지를 위한 핵심 특화 15</h3>
                    <div className="swiper-wrapper">
                      {highlightData.map(item => (
                        <button type="button" className="swiper-slide" key={item.id}>
                          <img src={`/resource/images/highlight/gallery_list_tumb_${item.id}.jpg`} alt={item.title} />
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

export default Highlight;
