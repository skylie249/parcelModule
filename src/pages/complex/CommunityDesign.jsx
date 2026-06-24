import React from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
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
                                            <source
                                                src="/resource/images/video/community.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                    </div>
                                    <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>  
                                </div>
                            </div>
                            <div className="community-top">
                                <div className="complex-title">
                                    <div className="cate n-motion n-bottom">
                                        Social Canvas
                                    </div>
                                    <h3 className="tx-tit n-motion n-bottom">
                                        일상이 어우러져
                                        <br className="mo-only"  />하나의 장면이 되다
                                    </h3>
                                    <p className="tx-lg n-motion n-bottom">
                                        자연이 일상을 깨우고, 예술이 삶을 채우는
                                        공간, 머무름과 흐름이 어우러져 완성되는
                                        커뮤니티 사람과 공간,<br className="pc-only"
                                         />
                                        그리고 순간이 유기적으로 연결되며, 그
                                        안에서 일상의 다양한 장면들이 자연스럽게
                                        이어지고 축적되어<br className="pc-only"  />
                                        하나의 새로운 라이프스타일을 완성해
                                        나갑니다.
                                    </p>
                                </div>
                                <div className="community-sect1">
                                    <div className="static">
                                        <div className="mo-map mo-only">
                                            <img
                                                src="/resource/images/complex/commun-map.png"
                                                alt=""
                                                className="n-motion n-bottom"
                                            />
                                        </div>
                                        <div className="block-wrap">
                                            <div
                                                className="block orange n-motion n-bottom"
                                            >
                                                <div className="bx">
                                                    CULTURE COMMUNITY
                                                </div>
                                                <h4>컬쳐 커뮤니티</h4>
                                                <h5 className="ff">B1F</h5>
                                                <ul>
                                                    <li>
                                                        <span className="num"
                                                            >1</span
                                                        >
                                                        <span className="tx"
                                                            >갤러리 라운지</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >2</span
                                                        >
                                                        <span className="tx"
                                                            >북 라운지</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >3</span
                                                        >
                                                        <span className="tx"
                                                            >멀티룸</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >4</span
                                                        >
                                                        <span className="tx"
                                                            >스터디룸</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >5</span
                                                        >
                                                        <span className="tx"
                                                            >1인 독서실
                                                            (여)</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >6</span
                                                        >
                                                        <span className="tx"
                                                            >1인 독서실
                                                            (남)</span
                                                        >
                                                    </li>
                                                </ul>
                                                <h5 className="ff">1F</h5>
                                                <ul>
                                                    <li>
                                                        <span className="num"
                                                            >1</span
                                                        >
                                                        <span className="tx"
                                                            >시니어센터</span
                                                        >
                                                    </li>
                                                    <li>
                                                        <span className="num"
                                                            >2</span
                                                        >
                                                        <span className="tx"
                                                            >어린이집</span
                                                        >
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="map pc-only">
                                                <img
                                                    src="/resource/images/complex/commun-map.png"
                                                    alt=""
                                                    className="n-motion n-bottom"
                                                />
                                            </div>
                                            <div
                                                className="blocks n-motion n-bottom"
                                            >
                                                <div className="block blue">
                                                    <div className="bx">
                                                        SKY COMMUNITY
                                                    </div>
                                                    <h4>스카이 커뮤니티</h4>
                                                    <h5 className="ff">29F</h5>
                                                    <ul>
                                                        <li>
                                                            <span className="num"
                                                                >1</span
                                                            >
                                                            <span className="tx"
                                                                >스카이
                                                                라운지</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >2</span
                                                            >
                                                            <span className="tx"
                                                                >스카이
                                                                가든</span
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="block green">
                                                    <div className="bx">
                                                        SPORTS COMMUNITY
                                                    </div>
                                                    <h4>스포츠 커뮤니티</h4>
                                                    <h5 className="ff">B1F</h5>
                                                    <ul>
                                                        <li>
                                                            <span className="num"
                                                                >1</span
                                                            >
                                                            <span className="tx"
                                                                >프리미어
                                                                피트니스</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >2</span
                                                            >
                                                            <span className="tx"
                                                                >퍼스널 트레이닝
                                                                룸</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >3</span
                                                            >
                                                            <span className="tx"
                                                                >스트레칭
                                                                룸</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >4</span
                                                            >
                                                            <span className="tx"
                                                                >프라임
                                                                골프</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >5</span
                                                            >
                                                            <span className="tx"
                                                                >스크린
                                                                골프</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >6</span
                                                            >
                                                            <span className="tx"
                                                                >퍼팅존</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >7</span
                                                            >
                                                            <span className="tx"
                                                                >락커룸/샤워실(남)</span
                                                            >
                                                        </li>
                                                        <li>
                                                            <span className="num"
                                                                >8</span
                                                            >
                                                            <span className="tx"
                                                                >락커룸/샤워실(여)</span
                                                            >
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="community-sect2">
                                <div className="full-blocks-pin">
                                    <div className="full-blocks">
                                        <div className="full-block">
                                            <div className="bg comuty-bg1"></div>
                                            <div className="desc">
                                                <div
                                                    className="desc-item comuty-tx1"
                                                >
                                                    <p className="bx orange">
                                                        CULTURE COMMUNITY
                                                    </p>
                                                    <h4>갤러리 라운지</h4>
                                                    <p className="tx-lg">
                                                        입주민의 교류와 만남을
                                                        위한 공간으로,
                                                        선큰으로<br className="pc-only"
                                                         />
                                                        스며드는 햇살과 자연의
                                                        감성을 즐기며 미학적
                                                        깊이와<br className="pc-only"
                                                         />
                                                        품격을 경험할 수 있는
                                                        여유로운 공간을
                                                        제공합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full-block">
                                            <div className="bg comuty-bg2"></div>
                                            <div className="desc">
                                                <div
                                                    className="desc-item comuty-tx2"
                                                >
                                                    <p className="bx">
                                                        SKY COMMUNITY
                                                    </p>
                                                    <h4>하늘 위 특별한 공간</h4>
                                                    <p className="tx-lg">
                                                        끝없이 펼쳐진 조망 위로
                                                        흐르는 시원한 바람,
                                                        하늘과 맞닿은 최상층의
                                                        고요한 안식처.<br className="pc-only"
                                                         />
                                                        남다른 시선이 닿는
                                                        곳마다 낭만이 고이는
                                                        공간, 오직 당신만을
                                                        위한<br className="pc-only"
                                                         />
                                                        품격 있는 휴식을
                                                        설계합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full-block">
                                            <div className="bg comuty-bg3"></div>
                                            <div className="desc">
                                                <div
                                                    className="desc-item comuty-tx3"
                                                >
                                                    <p className="bx">
                                                        SKY COMMUNITY
                                                    </p>
                                                    <h4>스카이 라운지</h4>
                                                    <p className="tx-lg">
                                                        열린 하늘이 주는 시원한
                                                        전망과 화려한 도시의
                                                        야경을<br className="pc-only"
                                                         />
                                                        즐길 수 있는 스카이
                                                        라운지. 지인 및 가족과
                                                        함께 특별한<br className="pc-only"
                                                         />
                                                        순간을 나누는 품격 있는
                                                        공간을 선사합니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="full-block">
                                            <div className="bg comuty-bg4"></div>
                                            <div className="desc">
                                                <div
                                                    className="desc-item comuty-tx4"
                                                >
                                                    <p className="bx green">
                                                        SPORTS COMMUNITY
                                                    </p>
                                                    <h4>프리미어 피트니스</h4>
                                                    <p className="tx-lg">
                                                        선큰 가든을 통해
                                                        들어오는 햇살을 맞으며
                                                        쾌적하게<br className="pc-only"
                                                         />
                                                        운동을 즐길 수 있는
                                                        공간으로, 매일
                                                        체계적으로 운동하며<br className="pc-only"
                                                         />
                                                        건강한 삶의 가치를 누릴
                                                        수 있습니다.
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

export default CommunityDesign;
