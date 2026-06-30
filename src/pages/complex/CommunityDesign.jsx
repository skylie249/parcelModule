import React from 'react';
import { Link } from 'react-router-dom';

const orangeData = {
  bx: 'CULTURE COMMUNITY',
  title: '컬쳐 커뮤니티',
  floors: [
    {
      label: 'B1F',
      list: ['갤러리 라운지', '북 라운지', '멀티룸', '스터디룸', '1인 독서실 (여)', '1인 독서실 (남)']
    },
    {
      label: '1F',
      list: ['시니어센터', '어린이집']
    }
  ]
};

const blocksData = [
  {
    id: 1,
    color: 'blue',
    bx: 'SKY COMMUNITY',
    title: '스카이 커뮤니티',
    floors: [
      {
        label: '29F',
        list: ['스카이 라운지', '스카이 가든']
      }
    ]
  },
  {
    id: 2,
    color: 'green',
    bx: 'SPORTS COMMUNITY',
    title: '스포츠 커뮤니티',
    floors: [
      {
        label: 'B1F',
        list: ['프리미어 피트니스', '퍼스널 트레이닝 룸', '스트레칭 룸', '프라임 골프', '스크린 골프', '퍼팅존', '락커룸/샤워실(남)', '락커룸/샤워실(여)']
      }
    ]
  }
];

const communDescData = [
  {
    id: 1,
    bg: 'comuty-bg1',
    tx: 'comuty-tx1',
    bxColor: 'orange',
    bx: 'CULTURE COMMUNITY',
    title: '갤러리 라운지',
    desc: <>
      입주민의 교류와 만남을 위한 공간으로, 선큰으로<br className="pc-only" />
      스며드는 햇살과 자연의 감성을 즐기며 미학적 깊이와<br className="pc-only" />
      품격을 경험할 수 있는 여유로운 공간을 제공합니다.
    </>
  },
  {
    id: 2,
    bg: 'comuty-bg2',
    tx: 'comuty-tx2',
    bxColor: '',
    bx: 'SKY COMMUNITY',
    title: '하늘 위 특별한 공간',
    desc: <>
      끝없이 펼쳐진 조망 위로 흐르는 시원한 바람, 하늘과 맞닿은 최상층의 고요한 안식처.<br className="pc-only" />
      남다른 시선이 닿는 곳마다 낭만이 고이는 공간, 오직 당신만을 위한<br className="pc-only" />
      품격 있는 휴식을 설계합니다.
    </>
  },
  {
    id: 3,
    bg: 'comuty-bg3',
    tx: 'comuty-tx3',
    bxColor: '',
    bx: 'SKY COMMUNITY',
    title: '스카이 라운지',
    desc: <>
      열린 하늘이 주는 시원한 전망과 화려한 도시의 야경을<br className="pc-only" />
      즐길 수 있는 스카이 라운지. 지인 및 가족과 함께 특별한<br className="pc-only" />
      순간을 나누는 품격 있는 공간을 선사합니다.
    </>
  },
  {
    id: 4,
    bg: 'comuty-bg4',
    tx: 'comuty-tx4',
    bxColor: 'green',
    bx: 'SPORTS COMMUNITY',
    title: '프리미어 피트니스',
    desc: <>
      선큰 가든을 통해 들어오는 햇살을 맞으며 쾌적하게<br className="pc-only" />
      운동을 즐길 수 있는 공간으로, 매일 체계적으로 운동하며<br className="pc-only" />
      건강한 삶의 가치를 누릴 수 있습니다.
    </>
  }
];

const CommunityDesign = () => {
  return (
    <div id="container">
      <section id="contents" className="sub complex">
                    <div className="sub-top-visual">
                        <div className="visual vs-complex-community"></div>
                        <div className="title"><h2>Community design</h2></div>
                    </div>
                    <div className="sub-contents-wrap">
                        <div className="sub-top">
                            <ol className="breadcrumb static">
                                <li>
                                    <Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link>
                                </li>
                                <li>단지안내</li>
                                <li aria-label="현재 위치">Community design</li>
                            </ol>
                        </div>
                        <div className="sub-contents">
                            <div className="sub-top-video static">
                                <div className="video-area">
                                    <div className="video__frame">
                                        <video muted autoPlay playsInline loop>
                                            <source src="/resource/images/video/community.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>  
                                </div>
                            </div>
                            <div className="community-top">
                                <div className="complex-title">
                                    <div className="cate n-motion n-bottom">Social Canvas</div>
                                    <h3 className="tx-tit n-motion n-bottom">일상이 어우러져<br className="mo-only" />하나의 장면이 되다</h3>
                                    <p className="tx-lg n-motion n-bottom">
                                        자연이 일상을 깨우고, 예술이 삶을 채우는 공간, 머무름과 흐름이 어우러져 완성되는 커뮤니티 사람과 공간,<br className="pc-only" />
                                        그리고 순간이 유기적으로 연결되며, 그 안에서 일상의 다양한 장면들이 자연스럽게 이어지고 축적되어<br className="pc-only" />
                                        하나의 새로운 라이프스타일을 완성해 나갑니다.
                                    </p>
                                </div>
                                <div className="community-sect1">
                                    <div className="static">
                                        <div className="mo-map mo-only">
                                            <img src="/resource/images/complex/commun-map.png" alt="" className="n-motion n-bottom" />
                                        </div>
                                        <div className="block-wrap">
                                            <div className="block orange n-motion n-bottom">
                                                <div className="bx">{orangeData.bx}</div>
                                                <h4>{orangeData.title}</h4>
                                                {orangeData.floors.map((fl, fIdx) => (
                                                  <React.Fragment key={fIdx}>
                                                    <h5 className="ff">{fl.label}</h5>
                                                    <ul>
                                                      {fl.list.map((li, lIdx) => (
                                                        <li key={lIdx}>
                                                          <span className="num">{lIdx + 1}</span>
                                                          <span className="tx">{li}</span>
                                                        </li>
                                                      ))}
                                                    </ul>
                                                  </React.Fragment>
                                                ))}
                                            </div>
                                            <div className="map pc-only">
                                                <img src="/resource/images/complex/commun-map.png" alt="" className="n-motion n-bottom" />
                                            </div>
                                            <div className="blocks n-motion n-bottom">
                                                {blocksData.map(block => (
                                                  <div className={`block ${block.color}`} key={block.id}>
                                                    <div className="bx">{block.bx}</div>
                                                    <h4>{block.title}</h4>
                                                    {block.floors.map((fl, fIdx) => (
                                                      <React.Fragment key={fIdx}>
                                                        <h5 className="ff">{fl.label}</h5>
                                                        <ul>
                                                          {fl.list.map((li, lIdx) => (
                                                            <li key={lIdx}>
                                                              <span className="num">{lIdx + 1}</span>
                                                              <span className="tx">{li}</span>
                                                            </li>
                                                          ))}
                                                        </ul>
                                                      </React.Fragment>
                                                    ))}
                                                  </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="community-sect2">
                                <div className="full-blocks-pin">
                                    <div className="full-blocks">
                                        {communDescData.map(item => (
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
                        </div>
                    </div>
                </section>
    </div>
  );
};

export default CommunityDesign;
