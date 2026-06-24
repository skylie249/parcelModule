import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
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
                    <strong>랜드마크 단지</strong>를 위한 <br className="mo-only"  /><strong
                      >핵심 특화 15</strong
                    >
                  </h3>
                </div>
                <div className="grid-gallery">
                  <div className="grid-sizer"></div>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_1.jpg"
                      alt="랜드마크 외관 디자인"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>랜드마크 외관 디자인</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_2.jpg"
                      alt="오픈스페이스 최대화"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>오픈스페이스 최대화</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_3.jpg"
                      alt="주동수 축소"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>주동수 축소</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_4.jpg"
                      alt="스카이 커뮤니티"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>스카이 커뮤니티</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_6.jpg"
                      alt="전세대 광장/공원 조망"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>전세대 광장/공원 조망</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_7.jpg"
                      alt="조망형 유리난간 창고"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>조망형 유리난간 창고</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_5.jpg"
                      alt="대형 문주"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>대형 문주</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_8.jpg"
                      alt="남향 배치/통경축 확보"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>남향 배치/통경축 확보</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_10.jpg"
                      alt="필로티 개방감 극대화"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>필로티 개방감 극대화</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_9.jpg"
                      alt="판상형 위주 단위세대"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>판상형 위주 단위세대</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_11.jpg"
                      alt="자연과 예술이 흐르는 조경 프로그램"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>자연과 예술이 흐르는 조경 프로그램</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_12.jpg"
                      alt="하이엔드 커뮤니티"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>하이엔드 커뮤니티</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_15.jpg"
                      alt="SKAI 2.0"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>SKAI 2.0</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_13.jpg"
                      alt="드롭오프존"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>드롭오프존</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/highlight/gallery_list_tumb_14.jpg"
                      alt="주차장 편의성 극대화"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>주차장 편의성 극대화</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
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
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_1_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_1_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_2_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo ph-full">
                            <img
                              src="/resource/images/highlight/viewer_gallery_2_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_3_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_3_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_4_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_4_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_5_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_5_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_6_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_6_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_7_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_7_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_8_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_8_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_9_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_9_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_10_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_10_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_11_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_11_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_12_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_12_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_13_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_13_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_14_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_14_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_15_1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="gallery-slide-item-photo">
                            <img
                              src="/resource/images/highlight/viewer_gallery_15_2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-button-prev" aria-label="이전 보기" tabIndex="0"></div>
                    <div className="swiper-button-next" aria-label="다음 보기" tabIndex="0"></div>
                    <div className="swiper-pagination"></div>
                  </div>
                  <div className="gallery-thumbs">
                    <h3>랜드마크 단지를 위한 핵심 특화 15</h3>
                    <div className="swiper-wrapper">
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_1.jpg"
                          alt="랜드마크 외관 디자인"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_2.jpg"
                          alt="오픈스페이스 최대화"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_3.jpg"
                          alt="주동수 축소"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_4.jpg"
                          alt="스카이 커뮤니티"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_5.jpg"
                          alt="대형 문주"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_6.jpg"
                          alt="전세대 광장/공원 조망"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_7.jpg"
                          alt="조망형 유리난간 창고"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_8.jpg"
                          alt="남향 배치/통경축 확보"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_9.jpg"
                          alt="판상형 위주 단위세대"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_10.jpg"
                          alt="필로티 개방감 극대화"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_11.jpg"
                          alt="자연과 예술이 흐르는 조경 프로그램"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_12.jpg"
                          alt="하이엔드 커뮤니티"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_13.jpg"
                          alt="드롭오프존"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_14.jpg"
                          alt="주차장 편의성 극대화"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/highlight/gallery_list_tumb_15.jpg"
                          alt="SKAI 2.0"
                        />
                      </button>
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
