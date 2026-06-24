import React from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
const LandscapeDesign = () => {
  return (
    <div id="container">
      <section id="contents" className="sub sub-landscape">
          <div className="sub-top-visual">
            <div className="visual vs-complex-landscape"></div>
            <div className="title"><h2>Landscape design</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>단지안내</li>
                <li aria-label="현재 위치">Landscape design</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="sub-top-video static">
                <div className="video-area">
                  <div className="video__frame">
                    <video muted autoPlay playsInline loop>
                      <source src="/resource/images/video/Landscape.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>  
                </div>
              </div>

              <div className="landscape-sect1">
                <div className="static">
                  <div className="complex-title">
                    <div className="cate n-motion n-bottom">Aether Park</div>
                    <h3 className="tx-tit n-motion n-bottom">
                      에이테르:<br  />“고대 그리스에서 신들이 <br className="mo-only"  />숨 쉬는 맑은
                      공기”
                    </h3>
                    <p className="tx-lg n-motion n-bottom">
                      수지의 자연을 이어 담아 가장 쾌적하고 품격 있게 조성한 단지로,<br className="pc-only"
                       />
                      단순한 조경을 넘어 도심의 소음과 분주함으로부터 한걸음 벗어나<br className="pc-only"
                       />
                      오직 수지삼성2차에서만 누릴 수 있는 천상의 휴식을 완성합니다.
                    </p>
                  </div>
                  <div className="sect1 n-motion n-bottom">
                    <picture>
                      <source
                        media="(max-width: 768px)"
                        srcSet="/resource/images/complex/land-map-mo.jpg"
                      />
                      <img src="/resource/images/complex/land-map.jpg" alt="" />
                    </picture>
                  </div>
                  <div className="sect2">
                    <h4 className="n-motion n-bottom">AETHER PARK MASTER PLAN</h4>
                    <div className="blocks">
                      <div className="block blue n-motion n-bottom">
                        <div className="bx">ARTISTIC PLAZA</div>
                        <h5>물과 자연이 어우러진 예술적 광장</h5>
                        <ul>
                          <li>
                            <span className="num">1</span>
                            <span className="tx">시그니처 플라자</span>
                          </li>
                          <li>
                            <span className="num">2</span>
                            <span className="tx">브릴리언트 플라자</span>
                          </li>
                        </ul>
                      </div>
                      <div className="block green n-motion n-bottom">
                        <div className="bx">BREEZE GARDEN</div>
                        <h5>자연의 여유를 담은 테마공간</h5>
                        <ul>
                          <li>
                            <span className="num">3</span>
                            <span className="tx">네이처 플레이 가든</span>
                          </li>
                          <li>
                            <span className="num">4</span>
                            <span className="tx">아쿠아 플레이 가든</span>
                          </li>
                          <li>
                            <span className="num">5</span>
                            <span className="tx">리틀 플레이 가든</span>
                          </li>
                          <li>
                            <span className="num">6</span>
                            <span className="tx">아트리움 가든</span>
                          </li>
                          <li>
                            <span className="num">7</span>
                            <span className="tx">코지 가든</span>
                          </li>
                          <li>
                            <span className="num">8</span>
                            <span className="tx">갤러리 가든</span>
                          </li>
                          <li>
                            <span className="num">9</span>
                            <span className="tx">헬시 가든</span>
                          </li>
                          <li>
                            <span className="num">10</span>
                            <span className="tx">클라우드 가든</span>
                          </li>
                        </ul>
                      </div>
                      <div className="block orange n-motion n-bottom">
                        <div className="bx">FLOW WALK</div>
                        <h5>단지 내부를 연결하는 산책로</h5>
                        <ul>
                          <li>
                            <span className="num">11</span>
                            <span className="tx">웰니스 웨이</span>
                          </li>
                          <li>
                            <span className="num">12</span>
                            <span className="tx">커뮤니티 웨이</span>
                          </li>
                          <li>
                            <span className="num">13</span>
                            <span className="tx">스카이 웨이</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landscape-sect2">
                <div className="full-blocks-pin">
                  <div className="full-blocks">
                    <div className="full-block">
                      <div className="bg land-bg1"></div>
                      <div className="desc">
                        <div className="desc-item land-tx1">
                          <p className="bx">ARTISTIC PLAZA</p>
                          <h4>시그니처 플라자</h4>
                          <p className="tx-lg">
                            넓은 잔디마당과 시원한 수공간이 조화를 이루며<br  />
                            단지 중심에 예술적이고 품격 있는 경관을 만들어내고<br  />
                            단지를 대표하는 상징적 중앙광장으로 완성합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg land-bg2"></div>
                      <div className="desc">
                        <div className="desc-item land-tx2">
                          <p className="bx">ARTISTIC PLAZA</p>
                          <h4>브릴리언트 플라자</h4>
                          <p className="tx-lg">
                            시원한 수경시설과 개방감 있는 티하우스가 어우러져<br  />
                            가벼운 휴식과 소통이 이루어지는 공간으로<br  />
                            일상 속 특별한 머무름을 선사하는 정원으로 완성합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg land-bg3"></div>
                      <div className="desc">
                        <div className="desc-item land-tx3">
                          <p className="bx green">BREEZE GARDEN</p>
                          <h4>아쿠아 플레이가든</h4>
                          <p className="tx-lg">
                            물과 놀이가 자연스럽게 결합된 공간으로<br  />
                            조형미를 갖춘 놀이시설이 아이들의 흥미를 높여주며,<br  />
                            계절의 즐거움을 누릴 수 있는 물놀이터를 완성합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landscape-sect3">
                <div className="static">
                  <div className="sect1">
                    <div className="bx n-motion n-bottom">FLOW WALK</div>
                    <h3 className="n-motion n-bottom">일상이 여행이 되는 1.2km의 순환산책로</h3>
                    <p className="n-motion n-bottom">
                      테마를 담아 계획한 단지 내 산책로는 일상에 건강한 활력과 여유로운 쉼을
                      더하고,<br className="pc-only"  />
                      입주민들이 함께 어우러져 교류하는 소통의 보행공간으로 완성합니다.
                    </p>
                  </div>
                  <div className="sect23">
                    <ul className="sect2">
                      <li className="n-motion n-bottom">
                        <div className="item">
                          <div className="item-photo">
                            <img src="/resource/images/complex/land-n1.jpg" alt="" />
                          </div>
                          <div className="item-desc">
                            <p className="cate">
                              <img
                                src="/resource/images/complex/land-ico1.png"
                                alt=""
                              />WELLNESS WAY 600m
                            </p>
                            <h4>웰니스 웨이</h4>
                            <p className="tx">
                              단지 외곽을 순환하며 초록 자연을 만나는 건강한 길입니다.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="n-motion n-bottom">
                        <div className="item">
                          <div className="item-photo">
                            <img src="/resource/images/complex/land-n2.jpg" alt="" />
                          </div>
                          <div className="item-desc">
                            <p className="cate">
                              <img
                                src="/resource/images/complex/land-ico2.png"
                                alt=""
                              />COMMUNITY WAY 450m
                            </p>
                            <h4>커뮤니티 웨이</h4>
                            <p className="tx">
                              단지 내 주요 공간을 이어 일상의 교류를 이어주는 길입니다.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="n-motion n-bottom">
                        <div className="item">
                          <div className="item-photo">
                            <img src="/resource/images/complex/land-n3.jpg" alt="" />
                          </div>
                          <div className="item-desc">
                            <p className="cate">
                              <img src="/resource/images/complex/land-ico3.png" alt="" />SKY
                              WAY 150m
                            </p>
                            <h4>스카이 웨이</h4>
                            <p className="tx">
                              탁 트인 풍경과 함께 특별한 여유를 누릴수 있는 입체적 길입니다.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="sect3 n-motion n-bottom">
                      <img src="/resource/images/complex/land-n-map.png" alt="" />
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

export default LandscapeDesign;
