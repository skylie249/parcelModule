import React from 'react';
import { Link } from 'react-router-dom';

const storyData = [
  {
    id: 1,
    img: 'statement-p1.jpg',
    layout: 'photo-left',
    desc: (
      <>
        가치를 보는 <strong>안목</strong> <br />
        본질을 보는 <strong>혜안</strong> <br />
        보여지는 것 너머 <br />
        보이지 않는 삶을 보는 <strong>섬세함</strong>
      </>
    )
  },
  {
    id: 2,
    img: 'statement-p2.jpg',
    layout: 'photo-right',
    desc: (
      <>
        세상과 <br />삶을 바라보는 <strong>관점</strong> <br />집의 본질은
        <strong>‘뷰’</strong>에서 <br />시작됩니다
      </>
    )
  },
  {
    id: 3,
    img: 'statement-p3.jpg',
    layout: 'photo-left',
    desc: (
      <>
        그 관점을 담은 <br />
        공간 경험으로의 <strong>진화</strong> <br />
        우리는 VIEW에 <br />
        <strong>당신의 VIEW</strong>를 담습니다 <br />
        VIEW, Perspective of Life
      </>
    )
  }
];

const Story = () => {
  return (
    <div id="container">
      <section id="contents" className="sub story">
        <div className="sub-top-visual">
          <div className="visual vs-brand-story"></div>
          <div className="title"><h2>Brand Story</h2></div>
        </div>
        <div className="sub-contents-wrap">
          <div className="sub-top">
            <ol className="breadcrumb white static">
              <li><Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link></li>
              <li>Theme</li>
              <li aria-label="현재 위치">Brand Story</li>
            </ol>
          </div>
          <div className="sub-contents">
            <div className="story-section">
              <div className="statement-visual">
                <div className="story-title brand-title">
                  <h3 className="n-motion n-bottom">Brand Statement</h3>
                  <p className="n-motion n-bottom">시선이 삶을 결정합니다</p>
                </div>
              </div>
              <div className="statement-con">
                <div className="static">
                  {storyData.map(item => (
                    <div className="statement-con-item" key={item.id}>
                      {item.layout === 'photo-left' ? (
                        <>
                          <div className="photo n-motion n-left">
                            <img src={`/resource/images/sub/${item.img}`} alt="" />
                          </div>
                          <div className="desc n-motion n-right">
                            <p>{item.desc}</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="desc n-motion n-left">
                            <p>{item.desc}</p>
                          </div>
                          <div className="photo n-motion n-right">
                            <img src={`/resource/images/sub/${item.img}`} alt="" />
                          </div>
                        </>
                      )}
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

export default Story;
