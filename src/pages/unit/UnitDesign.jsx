import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                      <ul>
                        <li className="active"><button type="button" data-type="84A">84A</button></li>
                        <li><button type="button" data-type="84B">84B</button></li>
                        <li><button type="button" data-type="74A">74A</button></li>
                        <li><button type="button" data-type="74B">74B</button></li>
                        <li><button type="button" data-type="59A">59A</button></li>
                        <li><button type="button" data-type="59B">59B</button></li>
                      </ul>
                    </div>
                    {/*  floor-plan-content는 unit.js에서 unit_mock.json을 불러와 동적 렌더링  */}
                    <div className="floor-plan-contents">
                      {/*  <div className="floor-plan-content">                                
                                <div className="floor-plan-content-nav">
                                  <h4>84A</h4>
                                  <ul>
                                    <li className="active"><button type="button" data-option="0" className="active"><span className="label">Interior</span></button></li>
                                    <li><button type="button" data-option="1"><span className="label">기본형</span></button></li>
                                    <li><button type="button" data-option="2"><span className="label">다이닝 키친</span></button></li>
                                    <li><button type="button" data-option="3"><span className="label">디럭스 키친</span></button></li>
                                    <li><button type="button" data-option="4"><span className="label">스마트 유틸리티</span></button></li>
                                    <li><button type="button" data-option="5"><span className="label">드레스룸 특화</span></button></li>
                                    <li><button type="button" data-option="6"><span className="label">플러스 스토리지</span></button></li>
                                  </ul>
                                </div>
                                <div className="floor-plan-content-body" style={{ display: 'none' }}>
                                    <div className="photo">
                                      <img src="/resource/images/design/interior-84A.jpg" alt="84A" />
                                    </div>
                                    <div className="desc">
                                        <div className="interior">
                                          <h5 className="tit">SENSIBLE BALANCE</h5>
                                          <p className="t1">센서블 밸런스</p>
                                          <p className="t2">“절제된 구성 속에서 드러나는 고요한 품격”<br  />
                                            자연의 질감을 담아낸 마감과 재료의 균형, 그 본질에서 완성되는 깊이 있는 우아함</p> 
                                        </div>
                                    </div>
                                </div>
                                <div className="floor-plan-content-body" style={{ display: 'none' }}>
                                    <div className="photo">
                                      <img src="/resource/images/design/84A-f1.png" alt="84A" />
                                    </div>
                                    <div className="desc">
                                        <div className="basic">
                                          <h5 className="tit">기본형</h5>
                                          <ul className="dot-lists">
                                            <li>레저 라이프를 위한 현관창고, 복도 팬트리</li>
                                            <li>소비자의 니즈에 맞춰 변모하는 가변형 침실</li>
                                            <li>가족 소통의 중심이 되는 대면형 주방</li>
                                            <li>편리함을 강조한 동선 최적화 다용도실</li>
                                            <li>프라이빗한 생활을 완성하는 마스터 알파존</li>
                                          </ul>                                          
                                        </div> 
                                    </div>
                                </div>
                                <div className="floor-plan-content-body">
                                    <div className="photo">
                                      <img src="/resource/images/design/84A-f2.png" alt="84A" />
                                    </div>
                                    <div className="desc">
                                        <div className="basic">
                                          <h5 className="tit">다이닝 키친</h5>
                                          <p className="t1">주방+팬트리 특화+다용도실 특화</p>
                                          <ul className="dot-lists">
                                            <li>독립형 아일랜드와 와이드 주방</li>
                                          </ul>                                          
                                        </div> 
                                    </div>
                                </div>
                              </div>  */}
                    </div>
                  </div>

                  {/*  mo  */}
                  <div className="floor-plan-mo mo-only">
                    <div className="floor-plan-mo-nav n-motion n-bottom">
                      <ul>
                        <li className="active"><button type="button" data-type="84A">84A</button></li>
                        <li><button type="button" data-type="84B">84B</button></li>
                        <li><button type="button" data-type="74A">74A</button></li>
                        <li><button type="button" data-type="74B">74B</button></li>
                        <li><button type="button" data-type="59A">59A</button></li>
                        <li><button type="button" data-type="59B">59B</button></li>
                      </ul>
                    </div>
                    <div className="floor-plan-mo-contents n-motion n-bottom">
                      {/*  <div className="floor-plan-mo-content">
                                <div className="top">
                                  <h4>84A</h4>                                    
                                  <div className="nav">
                                      <button type="button" data-option="0"><span className="label">Interior</span></button>
                                      <button type="button" data-option="1"><span className="label">기본형</span></button>
                                  </div>
                                </div>                                  
                                <div className="photo">
                                  <img src="/resource/images/design/interior-84A-mo.png" alt="84A" />
                                </div>
                                <div className="nav">
                                  <button type="button" data-option="2"><span className="label">다이닝 키친</span></button>
                                  <button type="button" data-option="3"><span className="label">디럭스 키친</span></button>
                                  <button type="button" data-option="4"><span className="label">스마트 유틸리티</span></button>
                                  <button type="button" data-option="5"><span className="label">드레스룸 특화</span></button>
                                  <button type="button" data-option="6"><span className="label">플러스 스토리지</span></button>
                                </div>
                                <div className="desc">
                                    <div className="interior">
                                      <h5 className="tit">SENSIBLE BALANCE</h5>
                                      <p className="t1">센서블 밸런스</p>
                                      <p className="t2">“절제된 구성 속에서 드러나는 고요한 품격”<br  />
                                        자연의 질감을 담아낸 마감과 재료의 균형, 그 본질에서 완성되는 깊이 있는 우아함</p> 
                                    </div>
                                </div>
                              </div>
                              <div className="floor-plan-mo-content">
                                <div className="top">
                                  <h4>84A</h4>                                    
                                  <div className="nav">
                                      <button type="button" data-option="0"><span className="label">Interior</span></button>
                                      <button type="button" data-option="1"><span className="label">기본형</span></button>
                                  </div>
                                </div>                                  
                                <div className="photo">
                                  <img src="/resource/images/design/84A-f1-mo.png" alt="84A" />
                                </div>
                                <div className="nav">
                                  <button type="button" data-option="2"><span className="label">다이닝 키친</span></button>
                                  <button type="button" data-option="3"><span className="label">디럭스 키친</span></button>
                                  <button type="button" data-option="4"><span className="label">스마트 유틸리티</span></button>
                                  <button type="button" data-option="5"><span className="label">드레스룸 특화</span></button>
                                  <button type="button" data-option="6"><span className="label">플러스 스토리지</span></button>
                                </div>
                                <div className="desc">
                                    <div className="desc">
                                      <h5 className="tit">기본형</h5>
                                      <ul className="dot-lists">
                                        <li>레저 라이프를 위한 현관창고, 복도 팬트리</li>
                                        <li>가족 소통의 중심이 되는 대면형 주방</li>
                                        <li>프라이빗한 생활을 완성하는 마스터 알파존</li>
                                        <li>소비자의 니즈에 맞춰 변모하는 가변형 침실</li>
                                        <li>편리함을 강조한 동선 최적화 다용도실</li> </li>
                                      </ul>
                                    </div>
                                </div>
                              </div>
                              <div className="floor-plan-mo-content">
                                <div className="top">
                                  <h4>84A</h4>                                    
                                  <div className="nav">
                                      <button type="button" data-option="0"><span className="label">Interior</span></button>
                                      <button type="button" data-option="1"><span className="label">기본형</span></button>
                                  </div>
                                </div>                                  
                                <div className="photo">
                                  <img src="/resource/images/design/84A-f2-mo.png" alt="84A" />
                                </div>
                                <div className="nav">
                                  <button type="button" data-option="2"><span className="label">다이닝 키친</span></button>
                                  <button type="button" data-option="3"><span className="label">디럭스 키친</span></button>
                                  <button type="button" data-option="4"><span className="label">스마트 유틸리티</span></button>
                                  <button type="button" data-option="5"><span className="label">드레스룸 특화</span></button>
                                  <button type="button" data-option="6"><span className="label">플러스 스토리지</span></button>
                                </div>
                                <div className="desc">
                                    <div className="desc">
                                      <h5 className="tit">다이닝 키친</h5>
                                      <p className="t1">주방+팬트리 특화+다용도실 특화</p>
                                      <ul className="dot-lists">
                                        <li>독립형 아일랜드와 와이드 주방</li> 
                                      </ul>
                                    </div>
                                </div>
                              </div>  */}
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
