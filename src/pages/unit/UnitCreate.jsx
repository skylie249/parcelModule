import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UnitCreate = () => {
  useEffect(() => {
    if (window.initInspirational) setTimeout(() => window.initInspirational(), 50);
    if (window.initTabs) setTimeout(() => window.initTabs(".ins-tab>li", ".ins-tab-container>div"), 50);
  }, []);

  return (
    <div id="container">
      <section id="contents" className="sub sub-create">
          <div className="sub-top-visual">
            <div className="visual vs-unit-create"></div>
            <div className="title"><h2>Create of Life</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>세대안내</li>
                <li aria-label="현재 위치">Create of Life</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="create-of-life">
                <div className="content-title">
                  <span className="cate n-motion n-bottom">Option Choice</span>
                  <h3 className="tx-tit n-motion n-bottom">
                    정해진 공간이 아닌, <br className="mo-only"  />변화하고 확장되는 집
                  </h3>
                  <p className="tx-lg n-motion n-bottom">
                    나만의 취향을 자유롭게 그려내고, 지친 일상을 온전한 휴식으로 채워주는 삶의
                    공간<br className="pc-only"  />
                    삶의 변화에 따라 유연하게 진화하는 집을 그려나갑니다.
                  </p>
                </div>

                <div className="ins-sect1">
                  <div className="static">
                    <div className="cont">
                      <div className="photo n-motion n-bottom">
                        <img src="/resource/images/unit/create-p1.jpg" alt="주방" />
                      </div>
                      <div className="desc">
                        <p className="t1 n-motion n-bottom">CREATE OF SOCIETY</p>
                        <h4 className="n-motion n-bottom">LIFE in HUB</h4>
                        <p className="t2 n-motion n-bottom">
                          주방을 중심으로 생활 활동이 자연스럽게 이어지며
                          <br className="pc-only"  />가족의 일상이 연결되는 공간
                        </p>
                      </div>
                    </div>
                    <div className="cont">
                      <div className="photo n-motion n-bottom">
                        <img src="/resource/images/unit/create-p2.jpg" alt="주방" />
                      </div>
                      <div className="desc">
                        <p className="t1 n-motion n-bottom">CREATE OF IDENTITY</p>
                        <h4 className="n-motion n-bottom">LIFE in FOCUS</h4>
                        <p className="t2 n-motion n-bottom">
                          취향과 생활 패턴에 맞게 <br className="pc-only"  />자유롭게 변화하는 맞춤 공간
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ins-sect2">
                  <div className="static">
                    {/*  pc  */}
                    <div className="ins-interior n-motion n-bottom">
                      <div className="ins-tab-wrap">
                        <ul className="ins-tab">
                          <li>
                            <h4>Life in HUB</h4>
                            <button type="button">
                              <span className="tit">다이닝 키친</span>
                            </button>
                          </li>
                          <li>
                            <button type="button">
                              <span className="tit">디럭스 키친</span>
                            </button>
                          </li>
                          <li>
                            <button type="button">
                              <span className="tit">히든 키친</span>
                            </button>
                          </li>
                          <li>
                            <h4 className="even">Life in FOCUS</h4>
                            <button type="button">
                              <span className="tit">스마트 유틸리티</span>
                            </button>
                          </li>
                          <li>
                            <button type="button">
                              <span className="tit">마스터 디럭스 드레스룸</span>
                            </button>
                          </li>
                          <li>
                            <button type="button">
                              <span className="tit">플러스 스토리지</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div className="ins-tab-container">
                        <div>
                          <h5 className="blind">다이닝 키친</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor">
                                      <img
                                        src="/resource/images/unit/create-f1.png"
                                        alt="다이닝 키친  평면도"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">다이닝 키친</p>
                                      <p className="t2">
                                        주방 공간에서 편안한 생활 기능들이 조화롭게 어우러져, <br  />
                                        일상 속 소통과 생활 편의를 동시에 제공하는 통합형 라이프
                                        공간
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins1.jpg"
                                    alt="다이닝키친 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="blind">디럭스 키친</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor">
                                      <img
                                        src="/resource/images/unit/create-f2.png"
                                        alt="디럭스 키친 평면도"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">디럭스 키친</p>
                                      <p className="t2">
                                        드레스룸 공간 일부를 활용한 본주방과 구성과<br  />
                                        대형 아일랜드 주방 배치로 대면형 라이프 공간
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins2.jpg"
                                    alt="디럭스 키친 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="blind">히든 키친</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor">
                                      <img
                                        src="/resource/images/unit/create-f3.png"
                                        alt="히든 키친 평면도"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">히든 키친</p>
                                      <p className="t2">
                                        요리, 세탁 공간을 숨기고, 거실과 연계된 허브공간으로<br  />
                                        일상의 여유와 품격을 더하는 공간
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins3.jpg"
                                    alt="히든 키친 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="blind">스마트 유틸리티</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor">
                                      <img
                                        src="/resource/images/unit/create-f4.png"
                                        alt="스마트 유틸리티 평면도"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">스마트 유틸리티</p>
                                      <p className="t2">
                                        주방 공간에서 편안한 생활 기능들이 조화롭게 어우러져,<br  />
                                        일상 속 소통과 생활 편의를 동시에 제공하는 통합형 라이프
                                        공간
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins4.jpg"
                                    alt="스마트 유틸리티 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="blind">마스터 디럭스 드레스룸</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor f5">
                                      <img
                                        src="/resource/images/unit/create-f5.png"
                                        alt="마스터 디럭스 드레스룸 평면도"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">마스터 디럭스 드레스룸</p>
                                      <p className="t2">
                                        유리 붙박이장과 대형 드레스룸으로 구성된<br  />
                                        안방 전용 수납, 의류 특화공간
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins5.jpg"
                                    alt="마스터 디럭스 드레스룸 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="blind">플러스 스토리지</h5>
                          <div className="ins-tab-cont">
                            <div className="ins-tab-cont-lf alone" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>평면정보</h6>
                                </div>
                                <div className="floor">
                                  <div className="photo-f1">
                                    <div className="thumb thumb-floor">
                                      <img
                                        src="/resource/images/unit/create-f6.png"
                                        alt="플러스 스토리지"
                                      />
                                    </div>
                                    <div className="desc">
                                      <p className="t1">플러스 스토리지</p>
                                      <p className="t2">
                                        서브마스터룸 + 드레스룸, 복도 팬트리를 결합해<br  />자녀
                                        공간의 독립성과 수납 효율 강화
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="ins-tab-cont-rt" tabIndex="0">
                              <div className="inner">
                                <div className="hty6">
                                  <h6>Interior</h6>
                                </div>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins6.jpg"
                                    alt="플러스 스토리지 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  mo  */}
                    <div className="ins-interior-mo mo-only">
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in HUB</p>
                          <h5>다이닝 키친</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f1-mo.png"
                                      alt="다이닝 키친 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">다이닝 키친</p>
                                    <p className="t2">
                                      주방 공간에서 편안한 생활 기능들이 조화롭게 어우러져,<br  />
                                      일상 속 소통과 생활 편의를 동시에 제공하는 통합형 라이프 공간
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins1.jpg"
                                    alt="다이닝 키친 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in HUB</p>
                          <h5>디럭스 키친</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f2-mo.png"
                                      alt="디럭스 키친 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">디럭스 키친</p>
                                    <p className="t2">
                                      드레스룸 공간 일부를 활용한 본주방과 구성과<br  />
                                      대형 아일랜드 주방 배치로 대면형 라이프 공간
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins2.jpg"
                                    alt="디럭스 키친지 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in HUB</p>
                          <h5>히든 키친</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f3-mo.png"
                                      alt="히든 키친 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">히든 키친</p>
                                    <p className="t2">
                                      요리, 세탁 공간을 숨기고, 거실과 연계된 허브공간으로 <br  />
                                      일상의 여유와 품격을 더하는 공간
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins3.jpg"
                                    alt="히든 키친 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in FOCUS</p>
                          <h5>스마트 유틸리티</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f4-mo.png"
                                      alt="스마트 유틸리티 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">스마트 유틸리티</p>
                                    <p className="t2">
                                      건식 세탁과 가족 공용 드레스룸을 결합해, 의류 관리와 수납을 한
                                      공간에서 효율적으로 해결하는 올인원 공간
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins4.jpg"
                                    alt="스마트 유틸리티 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in FOCUS</p>
                          <h5>마스터 디럭스 드레스룸</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f5-mo.png"
                                      alt="마스터 디럭스 드레스룸 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">마스터 디럭스 드레스룸</p>
                                    <p className="t2">
                                      유리 붙박이장과 대형 드레스룸으로 구성된<br  />
                                      안방 전용 수납, 의류 특화공간
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins5.jpg"
                                    alt="마스터 디럭스 드레스룸 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
                      <div className="interior-swiper-wrap">
                        <div className="interior-title n-motion n-bottom">
                          <p>LIFE in FOCUS</p>
                          <h5>플러스 스토리지</h5>
                        </div>
                        <div className="interior-swiper n-motion n-bottom">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>평면정보</h6>
                                <div className="plane">
                                  <div className="thumb">
                                    <img
                                      src="/resource/images/unit/create-f6-mo.png"
                                      alt="플러스 스토리지 평면도"
                                    />
                                  </div>
                                  <div className="desc">
                                    <p className="t1">플러스 스토리지</p>
                                    <p className="t2">
                                      서브마스터룸 + 드레스룸, 복도 팬트리를 결합해 <br  />자녀
                                      공간의 독립성과 수납 효율 강화
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="interior-switem">
                                <h6>Interior</h6>
                                <div className="photo">
                                  <img
                                    src="/resource/images/unit/create-ins6.jpg"
                                    alt="플러스 스토리지 Interior"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination"></div>
                        </div>
                      </div>
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

export default UnitCreate;
