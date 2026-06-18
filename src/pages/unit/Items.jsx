import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_1.jpg" alt="조망형 유리난간 창호" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>조망형 유리난간 창호</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/A_2.jpg"
                      alt="주방가구 (국산 프리미엄급)"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>주방가구 (국산 프리미엄급)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/A_3.jpg"
                      alt="외산 세라믹 타일 주방 벽체"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 세라믹 타일 주방 벽체</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/A_4.jpg"
                      alt="외산 세라믹 타일 주방 상판"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 세라믹 타일 주방 상판</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/A_5.jpg"
                      alt="외산 세라믹 타일 거실 아트월"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 세라믹 타일 거실 아트월</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_6.jpg" alt="외산 비데 일체형 양변기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 비데 일체형 양변기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_7.jpg" alt="외산 벽걸이 세면기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 벽걸이 세면기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_8.jpg" alt="외산 싱크 수전" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 싱크 수전</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_9.jpg" alt="외산 샤워기 & 욕실 수전" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 샤워기 & 욕실 수전</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_10.jpg" alt="외산 욕조 & 욕조 수전" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 욕조 & 욕조 수전</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/A_11.jpg" alt="외산 세면기 수전" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>외산 세면기 수전</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>

                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_12.jpg" alt="시스템 에어컨 (4개소)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>시스템 에어컨 (4개소)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_13.jpg" alt="UHD TV (75인치)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>UHD TV (75인치)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_16.jpg" alt="건조기 (20kg)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>건조기 (20kg)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_17.jpg" alt="의류관리기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>의류관리기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_14.jpg" alt="냉동/냉장/김치 냉장고" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>냉동/냉장/김치 냉장고</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_15.jpg" alt="드럼세탁기 (24kg)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>드럼세탁기 (24kg)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_20.jpg" alt="식기세척기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>식기세척기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/B_18.jpg"
                      alt="하이브리드 쿡탑 (인덕션 2구 / 하이라이트 1구)"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>하이브리드 쿡탑 (인덕션 2구 / 하이라이트 1구)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_19.jpg" alt="광파오븐" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>광파오븐</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_21.jpg" alt="무선청소기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>무선청소기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/C_24.jpg"
                      alt="거실 우물천장 (간접 조명)"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>거실 우물천장 (간접 조명)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/B_22.jpg" alt="음식물처리기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>음식물처리기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>

                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_23.jpg" alt="발코니 확장 (안방 제외)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>발코니 확장 (안방 제외)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_25.jpg" alt="팬트리 (해당 평형)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>팬트리 (해당 평형)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_28.jpg" alt="3연동 현관 중문" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>3연동 현관 중문</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_27.jpg" alt="붙박이장 (2개소)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>붙박이장 (2개소)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_26.jpg" alt="원목마루 (국산)" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>원목마루 (국산)</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_29.jpg" alt="욕실 복합환풍기" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>욕실 복합환풍기</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img
                      src="/resource/images/unit/C_32.jpg"
                      alt="지문인식 푸쉬앤풀 디지털도어록"
                    />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>지문인식 푸쉬앤풀 디지털도어록</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_31.jpg" alt="현관 블랙박스 카메라" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>현관 블랙박스 카메라</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
                  <button type="button" className="grid-gallery-item" title="레이어 팝업 열림">
                    <img src="/resource/images/unit/C_30.jpg" alt="침니형 후드" />
                    <div className="grid-gallery-item-info">
                      <div className="gallery-info-text">
                        <p>침니형 후드</p>
                      </div>
                      <div className="gallery-info-arrow">
                        <i className="ico-arrow-short"></i>
                      </div>
                    </div>
                  </button>
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
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo2">
                            <img src="/resource/images/unit/A_1.jpg" alt="" />
                            <img src="/resource/images/unit/A_1_2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo2">
                            <img src="/resource/images/unit/A_2.jpg" alt="" />
                            <img src="/resource/images/unit/A_2_2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo2">
                            <img src="/resource/images/unit/A_3.jpg" alt="" />
                            <img src="/resource/images/unit/A_3_2.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/A_4.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/A_5.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_6.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_7.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_8.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_9.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_10.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/A_11.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/B_12.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/B_13.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/B_14.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong2">
                            <img src="/resource/images/unit/B_15.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong2">
                            <img src="/resource/images/unit/B_16.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_17.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_18.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_19.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_20.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_21.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/B_22.jpg" alt="" />
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo oblong">
                            <img src="/resource/images/unit/C_23.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_24.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_25.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_26.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_27.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_28.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_29_2.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo square">
                            <img src="/resource/images/unit/C_30.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img src="/resource/images/unit/C_31.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="gallery-slide-item">
                          <div className="gallery-slide-item-photo">
                            <img src="/resource/images/unit/C_32.jpg" alt="" />
                          </div>
                        </div>
                      </div>
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
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/A_1.jpg" alt="조망형 유리난간 창호" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_2.jpg"
                          alt="주방가구 (국산 프리미엄급)"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_3.jpg"
                          alt="외산 세라믹 타일 주방 벽체"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_4.jpg"
                          alt="외산 세라믹 타일 주방 상판"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_5.jpg"
                          alt="외산 세라믹 타일 거실 아트월"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_6.jpg"
                          alt="외산 비데 일체형 양변기"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/A_7.jpg" alt="외산 벽걸이 세면기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/A_8.jpg" alt="외산 싱크 수전" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_9.jpg"
                          alt="외산 샤워기 & 욕실 수전"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/A_10.jpg"
                          alt="외산 욕조 & 욕조 수전"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/A_11.jpg" alt="외산 세면기 수전" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/B_12.jpg"
                          alt="시스템 에어컨 (4개소)"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_13.jpg" alt="UHD TV (75인치)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/B_14.jpg"
                          alt="냉동/냉장/김치 냉장고"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_15.jpg" alt="드럼세탁기 (24kg)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_16.jpg" alt="건조기 (20kg)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_17.jpg" alt="의류관리기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/B_18.jpg"
                          alt="하이브리드 쿡탑 (인덕션 2구 / 하이라이트 1구)"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_19.jpg" alt="광파오븐" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_20.jpg" alt="식기세척기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_21.jpg" alt="무선청소기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/B_22.jpg" alt="음식물처리기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/C_23.jpg"
                          alt="발코니 확장 (안방 제외)"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/C_24.jpg"
                          alt="거실 우물천장 (간접 조명)"
                        />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_25.jpg" alt="팬트리 (해당 평형)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_26.jpg" alt="원목마루 (국산)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_27.jpg" alt="붙박이장 (2개소)" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_28.jpg" alt="3연동 현관 중문" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_29.jpg" alt="욕실 복합환풍기" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_30.jpg" alt="침니형 후드" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img src="/resource/images/unit/C_31.jpg" alt="현관 블랙박스 카메라" />
                      </button>
                      <button type="button" className="swiper-slide">
                        <img
                          src="/resource/images/unit/C_32.jpg"
                          alt="지문인식 푸쉬앤풀 디지털도어록"
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

export default Items;
