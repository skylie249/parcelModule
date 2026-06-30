import React from 'react';
import { Link } from 'react-router-dom';

const archData1 = [
  {
    id: 1,
    img1: 'arch-c1-1.jpg',
    img2: 'arch-c1-2.jpg',
    sub: '최고의 교통',
    title: '신분당선 수지구청역 도보권',
    list: ['신분당선 판교·정자·강남 업무권 연결', '경부고속도로, 용인서울고속도로, 간선도로 등 입체 교통망']
  },
  {
    id: 2,
    img1: 'arch-c2-1.jpg',
    img2: 'arch-c2-2.jpg',
    sub: '최대의 자연',
    title: '광교산 숨결을 누리는 입지',
    list: ['수지생태공원, 도장골어린이공원 등 다수의 공원 확보', '성복천 수변 라이프 가능']
  },
  {
    id: 3,
    img1: 'arch-c3-1.jpg',
    img2: 'arch-c3-2.jpg',
    sub: '최상의 인프라',
    title: '수지구 핵심 주거 중심지',
    list: ['수지구청, 로데오거리 상권, 편의시설 밀집, 분당 생활권 공유', '안정적인 초·중·고 학군 및 수지구청역 주변 대규모 학원가']
  }
];

const ArchitectureDesign = () => {
  return (
    <div id="container">
      <section id="contents" className="sub">
          <div className="sub-top-visual">
            <div className="visual vs-complex-architecture"></div>
            <div className="title"><h2>Architecture design</h2></div>
          </div>
          <div className="sub-contents-wrap">
            <div className="sub-top">
              <ol className="breadcrumb static">
                <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
                <li>단지안내</li>
                <li aria-label="현재 위치">Architecture design</li>
              </ol>
            </div>
            <div className="sub-contents">
              <div className="sub-top-video static">
                <div className="video-area">
                  <div className="video__frame">
                    <video muted autoPlay playsInline loop>
                      <source src="/resource/images/video/Archi.mp4" type="video/mp4" />
                    </video>
                  </div>   
                  <button type="button" className="tgSound"><span className="blind">사운드켜기</span></button>               
                </div>
              </div>

              <div className="architecture-sect1">
                <div className="static">
                  <div className="content-title">
                    <h3 className="tx-tit n-motion n-bottom">
                      수지 최고의 입지 위에<br  />최고의 랜드마크 세우다
                    </h3>
                    <p className="tx-lg n-motion n-bottom">
                      수지삼성2차는 교통, 자연, 교육 등 인프라가 완벽하게 조화를 이룬 입지로<br className="pc-only"
                       />
                      수지 최고의 입지로 수지대로의 자부심과 가치를 담은 곳입니다.
                    </p>
                  </div>
                  <div className="sect1">
                    {archData1.map(item => (
                      <div className="block" key={item.id}>
                        <div className="photo">
                          <img
                            src={`/resource/images/complex/${item.img1}`}
                            alt=""
                            className="n-motion n-bottom"
                          />
                          <img
                            src={`/resource/images/complex/${item.img2}`}
                            alt=""
                            className="n-motion n-bottom"
                          />
                        </div>
                        <div className="desc">
                          <p className="n-motion n-bottom">{item.sub}</p>
                          <h4 className="n-motion n-bottom">{item.title}</h4>
                          <ul className="n-motion n-bottom">
                            {item.list.map((li, index) => (
                              <li key={index}>{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="sect2 n-motion n-bottom">
                    <img src="/resource/images/complex/arch-map.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="architecture-sect2">
                <div className="static">
                  <div className="sect1">
                    <div className="content-title">
                      <h3 className="tx-tit n-motion n-bottom">
                        <strong>원안을 개선한 거주성 특화 단지 전략</strong>
                      </h3>
                      <p className="tx-lg n-motion n-bottom">
                        다양한 테마의 풍부한 녹지와 거주성을 고려한 주동형태로 계획하고,<br className="pc-only"
                         />
                        스카이 커뮤니티 및 외관 계획을 통해 돋보이는 랜드마크 단지를 만들겠습니다.
                      </p>
                    </div>
                    <div className="steps">
                      <div className="pc-only">
                        <img
                          src="/resource/images/complex/arch-s1.png"
                          alt=""
                          className="n-motion n-bottom"
                        />
                      </div>
                      <div className="mo-only">
                        {[1, 2, 3, 4].map(num => (
                          <img
                            key={num}
                            src={`/resource/images/complex/a_${num} 1.png`}
                            alt=""
                            className="n-motion n-bottom"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="sect2">
                    <h3 className="tx-tit n-motion n-bottom">
                      <strong>수지 최고의 랜드마크 설계 </strong>
                    </h3>
                    <div className="block">
                      <picture className="n-motion n-bottom">
                        <source
                          media="(max-width: 768px)"
                          srcSet="/resource/images/complex/arch-s2-1-mo.png"
                        />
                        <img src="/resource/images/complex/arch-s2-1.png" alt="" />
                      </picture>
                      <div className="arch-arr"></div>
                      <picture className="n-motion n-bottom">
                        <source
                          media="(max-width: 768px)"
                          srcSet="/resource/images/complex/arch-s2-2-mo.png"
                        />
                        <img src="/resource/images/complex/arch-s2-2.png" alt="" />
                      </picture>
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

export default ArchitectureDesign;
