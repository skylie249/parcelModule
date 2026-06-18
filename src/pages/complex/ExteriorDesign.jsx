import React from 'react';
import { Link } from 'react-router-dom';

const ExteriorDesign = () => {
  return (
    <div id="container">
      <section id="contents" className="sub sub-exterior">
          <div className="sub-top-visual">
            <div className="visual vs-complex-exterior"></div>
            <div className="title"><h2>Exterior design</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>단지안내</li>
                <li aria-label="현재 위치">Exterior design</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="sub-top-video static">
                <div className="video-area">
                  <div className="video__frame">
                    <video muted autoPlay playsInline loop>
                      <source src="/resource/images/video/Exterior.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>  
                </div>
              </div>
              <div className="exterior-sect1">
                <div className="static">
                  <div className="complex-title">
                    <div className="cate n-motion n-bottom">Heritage of Flow</div>
                    <h3 className="tx-tit n-motion n-bottom">흐름으로 완성되는 헤리티지</h3>
                    <p className="tx-lg n-motion n-bottom">
                      도시의 스카이라인을 따라 유려하게 흐르는 곡선과 수직적인 리듬,
                      <br className="pc-only"  />
                      그리고 밤이 되면 하나의 선율처럼 빛나는 입면 디자인을 통해 시간 속에서도 변치
                      않는 랜드마크의 가치를 완성합니다. <br  />
                      물결처럼 부드럽게 이어지는 건축의 흐름 위에 빛의 리듬과 크루즈의 우아함을 더해
                      감각적인 주거 경험을 제안합니다.
                    </p>
                  </div>
                  <div className="sect1">
                    <div className="extbock">
                      <div className="photo n-motion n-left">
                        <img src="/resource/images/complex/ext-p1.jpg" alt="" />
                      </div>
                      <div className="desc n-motion n-right">
                        <p className="tx">FLOWING WAVE</p>
                        <h4>유연하게 흐르는 <strong>건축의 리듬</strong></h4>
                        <p className="tx-lg">
                          단지 외관을 따라 이어지는 부드러운 곡선은 물결처럼 유려한 흐름을 형성하며,
                          도시의 스카이라인에 감각적이고 유기적인 실루엣을 완성합니다. <br  />
                          빛과 입면이 함께 어우러져 시간에 따라 변화하는 아름다운 표정을
                          만들어냅니다.
                        </p>
                      </div>
                    </div>
                    <div className="extbock even">
                      <div className="desc n-motion n-left">
                        <p className="tx">CRUISE PRESTIGE</p>
                        <h4>도심 위를 <strong>항해하는 품격</strong></h4>
                        <p className="tx-lg">
                          크루즈를 연상시키는 웅장한 수직 매스와 세련된 외관 디자인은 도심 속에서도
                          특별한 존재감을 드러냅니다. 마치 프라이빗 럭셔리 크루즈에 머무는 듯한
                          여유와 개방감을 통해, 일상 속에서도 새로운 차원의 주거 경험을 완성합니다.
                        </p>
                      </div>
                      <div className="photo n-motion n-right">
                        <img src="/resource/images/complex/ext-p2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="extbock">
                      <div className="photo n-motion n-left">
                        <img src="/resource/images/complex/ext-p3.jpg" alt="" />
                      </div>
                      <div className="desc n-motion n-right">
                        <p className="tx">SHIMMERING MELODY</p>
                        <h4>별빛처럼 반짝이는 <strong>빛의 선율</strong></h4>
                        <p className="tx-lg">
                          입면 곳곳에 더해진 조명 디자인과 섬세한 패턴은 밤이 되면 하나의 빛의
                          선율처럼 단지를 감싸며 감성적인 분위기를 연출합니다. 도시의 야경 속에서도
                          은은하게 빛나는 파사드는 단지의 품격과 상징성을 더욱 돋보이게 합니다.
                        </p>
                      </div>
                    </div>
                    <div className="extbock even">
                      <div className="desc n-motion n-left">
                        <p className="tx">REFLECTIVE FLOW</p>
                        <h4>도시의 풍경을 담는 <strong>빛의 프레임</strong></h4>
                        <p className="tx-lg">
                          유려하게 이어지는 커튼월룩 입면은 하늘과 도시의 풍경을 섬세하게 반사하며
                          시간에 따라 변화하는 아름다움을 완성합니다.<br  />정제된 유리 입면과
                          수직적인 디자인 리듬이 어우러져 낮에는 빛을 담아내고, 밤에는 은은한 조명과
                          함께 도시를 대표하는 랜드마크의 존재감을 드러냅니다.
                        </p>
                      </div>
                      <div className="photo n-motion n-right">
                        <img src="/resource/images/complex/ext-p4.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="exterior-sect2">
                <div className="full-blocks-pin">
                  <div className="full-blocks">
                    <div className="full-block">
                      <div className="bg ext-bg1"></div>
                      <div className="desc">
                        <div className="desc-item ext-tx1">
                          <p className="tx">URBAN CRUISE LANDMARK</p>
                          <h4>어반 크루즈 랜드마크</h4>
                          <p className="tx-lg">
                            웅장한 매스 위에 펼쳐지는 유선형의 미학은 마치 도심을 가로지르는
                            <br className="pc-only"  />크루즈의 위엄을 드러내며, 시간이 흘러도 변치 않는
                            영속하는 물결의 <br className="pc-only"  />흐름으로 도시의 스카이라인을
                            새롭게 그립니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg ext-bg2"></div>
                      <div className="desc">
                        <div className="desc-item ext-tx2">
                          <p className="tx">LUMINOUS VERTICAL</p>
                          <h4>루미너스 버티컬</h4>
                          <p className="tx-lg">
                            간결하면서도 힘있는 선의 흐름과 세련된 빛과 투명함을<br className="pc-only"
                             />
                            담은 커튼월이 조화를 이루어 수직적 랜드마크를<br className="pc-only"  />
                            완성합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg ext-bg3"></div>
                      <div className="desc">
                        <div className="desc-item ext-tx3">
                          <p className="tx">THE CRUISE SKY</p>
                          <h4>더 크루즈 스카이</h4>
                          <p className="tx-lg">
                            도심을 항해하는 럭셔리 크루즈의 파노라마 뷰와 지상의<br className="pc-only"
                             />
                            은하수를 담은 조명 특화로, 오직 이곳에서만 누릴 수 있는<br className="pc-only"
                             />
                            압도적인 랜드마크의 자부심을 완성합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg ext-bg4"></div>
                      <div className="desc">
                        <div className="desc-item ext-tx4">
                          <p className="tx">GRAND GATE</p>
                          <h4>그랜드 게이트</h4>
                          <p className="tx-lg">
                            성복천의 흐름을 형상화한 그랜드 게이트는<br className="pc-only"  />
                            유려한 곡선미와 모던한 라인으로 웅장함을 극대화하고<br className="pc-only"
                             />
                            단지를 상징하는 첫인상이 됩니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="full-block">
                      <div className="bg ext-bg5"></div>
                      <div className="desc">
                        <div className="desc-item ext-tx5">
                          <p className="tx">AVENUE GATE</p>
                          <h4>애비뉴 게이트</h4>
                          <p className="tx-lg">
                            단지의 자부심과 웅장함을 형상화한 상징적 관문이자 도시와<br className="pc-only"
                             />
                            일상을 잇는 품격 있는 통로입니다. 어린이공원에서 단지<br className="pc-only"
                             />
                            내부로 자연스럽게 이어지며 쾌적한 보행환경을 선사합니다.
                          </p>
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

export default ExteriorDesign;
