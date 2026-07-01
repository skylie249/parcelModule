import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { unitCreateSocietyData, unitCreateTabs } from './constants';

const SocietyItem = ({ item }) => (
  <div className="cont">
    <div className="photo n-motion n-bottom">
      <img src={`/resource/images/unit/${item.image}`} alt="주방" />
    </div>
    <div className="desc">
      <p className="t1 n-motion n-bottom">{item.category}</p>
      <h4 className="n-motion n-bottom">{item.title}</h4>
      <p className="t2 n-motion n-bottom">
        {item.desc.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            {i === 0 && <br className="pc-only" />}
          </React.Fragment>
        ))}
      </p>
    </div>
  </div>
);

const TabButton = ({ tab, index }) => (
  <li>
    {index === 0 && <h4>{tab.category}</h4>}
    {index === 3 && <h4 className="even">{tab.category}</h4>}
    <button type="button">
      <span className="tit">{tab.title}</span>
    </button>
  </li>
);

const TabContent = ({ tab }) => (
  <div>
    <h5 className="blind">{tab.title}</h5>
    <div className="ins-tab-cont">
      <div className="ins-tab-cont-lf alone" tabIndex="0">
        <div className="inner">
          <div className="hty6">
            <h6>평면정보</h6>
          </div>
          <div className="floor">
            <div className="photo-f1">
              <div className={`thumb thumb-floor${tab.extraClass ? ` ${tab.extraClass}` : ''}`}>
                <img
                  src={`/resource/images/unit/${tab.fImg}`}
                  alt={`${tab.title} 평면도`}
                />
              </div>
              <div className="desc">
                <p className="t1">{tab.title}</p>
                <p className="t2">
                  {tab.fDesc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
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
              src={`/resource/images/unit/${tab.insImg}`}
              alt={`${tab.title} Interior`}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MobileTabContent = ({ tab }) => (
  <div className="interior-swiper-wrap">
    <div className="interior-title n-motion n-bottom">
      <p>{tab.category}</p>
      <h5>{tab.title}</h5>
    </div>
    <div className="interior-swiper n-motion n-bottom">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="interior-switem">
            <h6>평면정보</h6>
            <div className="plane">
              <div className="thumb">
                <img
                  src={`/resource/images/unit/${tab.fImgMo}`}
                  alt={`${tab.title} 평면도`}
                />
              </div>
              <div className="desc">
                <p className="t1">{tab.title}</p>
                <p className="t2">
                  {tab.fDesc.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
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
                src={`/resource/images/unit/${tab.insImg}`}
                alt={`${tab.title} Interior`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </div>
  </div>
);

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
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
                    {unitCreateSocietyData.map((item, index) => (
                      <SocietyItem key={index} item={item} />
                    ))}
                  </div>
                </div>
                <div className="ins-sect2">
                  <div className="static">
                    {/*  pc  */}
                    <div className="ins-interior n-motion n-bottom">
                      <div className="ins-tab-wrap">
                        <ul className="ins-tab">
                          {unitCreateTabs.map((tab, index) => (
                            <TabButton key={index} tab={tab} index={index} />
                          ))}
                        </ul>
                      </div>
                      <div className="ins-tab-container">
                        {unitCreateTabs.map((tab, index) => (
                          <TabContent key={index} tab={tab} />
                        ))}
                      </div>
                    </div>

                    {/*  mo  */}
                    <div className="ins-interior-mo mo-only">
                      {unitCreateTabs.map((tab, index) => (
                        <MobileTabContent key={index} tab={tab} />
                      ))}
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
