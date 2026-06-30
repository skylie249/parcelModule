import React from 'react';
import { Link } from 'react-router-dom';

const landData1 = [
  {
    id: 1,
    color: 'blue',
    bx: 'ARTISTIC PLAZA',
    title: '물과 자연이 어우러진 예술적 광장',
    list: ['시그니처 플라자', '브릴리언트 플라자'],
    startIdx: 1
  },
  {
    id: 2,
    color: 'green',
    bx: 'BREEZE GARDEN',
    title: '자연의 여유를 담은 테마공간',
    list: ['네이처 플레이 가든', '아쿠아 플레이 가든', '리틀 플레이 가든', '아트리움 가든', '코지 가든', '갤러리 가든', '헬시 가든', '클라우드 가든'],
    startIdx: 3
  },
  {
    id: 3,
    color: 'orange',
    bx: 'FLOW WALK',
    title: '단지 내부를 연결하는 산책로',
    list: ['웰니스 웨이', '커뮤니티 웨이', '스카이 웨이'],
    startIdx: 11
  }
];

const landData2 = [
  {
    id: 1,
    bg: 'land-bg1',
    tx: 'land-tx1',
    bxColor: '',
    bx: 'ARTISTIC PLAZA',
    title: '시그니처 플라자',
    desc: <>
      넓은 잔디마당과 시원한 수공간이 조화를 이루며<br  />
      단지 중심에 예술적이고 품격 있는 경관을 만들어내고<br  />
      단지를 대표하는 상징적 중앙광장으로 완성합니다.
    </>
  },
  {
    id: 2,
    bg: 'land-bg2',
    tx: 'land-tx2',
    bxColor: '',
    bx: 'ARTISTIC PLAZA',
    title: '브릴리언트 플라자',
    desc: <>
      시원한 수경시설과 개방감 있는 티하우스가 어우러져<br  />
      가벼운 휴식과 소통이 이루어지는 공간으로<br  />
      일상 속 특별한 머무름을 선사하는 정원으로 완성합니다.
    </>
  },
  {
    id: 3,
    bg: 'land-bg3',
    tx: 'land-tx3',
    bxColor: 'green',
    bx: 'BREEZE GARDEN',
    title: '아쿠아 플레이가든',
    desc: <>
      물과 놀이가 자연스럽게 결합된 공간으로<br  />
      조형미를 갖춘 놀이시설이 아이들의 흥미를 높여주며,<br  />
      계절의 즐거움을 누릴 수 있는 물놀이터를 완성합니다.
    </>
  }
];

const landData3 = [
  {
    id: 1,
    img: 'land-n1.jpg',
    ico: 'land-ico1.png',
    cate: 'WELLNESS WAY 600m',
    title: '웰니스 웨이',
    desc: '단지 외곽을 순환하며 초록 자연을 만나는 건강한 길입니다.'
  },
  {
    id: 2,
    img: 'land-n2.jpg',
    ico: 'land-ico2.png',
    cate: 'COMMUNITY WAY 450m',
    title: '커뮤니티 웨이',
    desc: '단지 내 주요 공간을 이어 일상의 교류를 이어주는 길입니다.'
  },
  {
    id: 3,
    img: 'land-n3.jpg',
    ico: 'land-ico3.png',
    cate: 'SKY WAY 150m',
    title: '스카이 웨이',
    desc: '탁 트인 풍경과 함께 특별한 여유를 누릴수 있는 입체적 길입니다.'
  }
];

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
                      {landData1.map(item => (
                        <div className={`block ${item.color} n-motion n-bottom`} key={item.id}>
                          <div className="bx">{item.bx}</div>
                          <h5>{item.title}</h5>
                          <ul>
                            {item.list.map((li, index) => (
                              <li key={index}>
                                <span className="num">{item.startIdx + index}</span>
                                <span className="tx">{li}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="landscape-sect2">
                <div className="full-blocks-pin">
                  <div className="full-blocks">
                    {landData2.map(item => (
                      <div className="full-block" key={item.id}>
                        <div className={`bg ${item.bg}`}></div>
                        <div className="desc">
                          <div className={`desc-item ${item.tx}`}>
                            <p className={`bx ${item.bxColor}`}>{item.bx}</p>
                            <h4>{item.title}</h4>
                            <p className="tx-lg">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                      {landData3.map(item => (
                        <li className="n-motion n-bottom" key={item.id}>
                          <div className="item">
                            <div className="item-photo">
                              <img src={`/resource/images/complex/${item.img}`} alt="" />
                            </div>
                            <div className="item-desc">
                              <p className="cate">
                                <img src={`/resource/images/complex/${item.ico}`} alt="" />{item.cate}
                              </p>
                              <h4>{item.title}</h4>
                              <p className="tx">{item.desc}</p>
                            </div>
                          </div>
                        </li>
                      ))}
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
