import React from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
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
                  <div className="statement-con-item">
                    <div className="photo n-motion n-left">
                      <img src="/resource/images/sub/statement-p1.jpg" alt="" />
                    </div>
                    <div className="desc n-motion n-right">
                      <p>
                        가치를 보는 <strong>안목</strong> <br />
                        본질을 보는 <strong>혜안</strong> <br />
                        보여지는 것 너머 <br />
                        보이지 않는 삶을 보는 <strong>섬세함</strong>
                      </p>
                    </div>
                  </div>
                  <div className="statement-con-item">
                    <div className="desc n-motion n-left">
                      <p>
                        세상과 <br />삶을 바라보는 <strong>관점</strong> <br />집의 본질은
                        <strong>‘뷰’</strong>에서 <br />시작됩니다
                      </p>
                    </div>
                    <div className="photo n-motion n-right">
                      <img src="/resource/images/sub/statement-p2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="statement-con-item">
                    <div className="photo n-motion n-left">
                      <img src="/resource/images/sub/statement-p3.jpg" alt="" />
                    </div>
                    <div className="desc n-motion n-right">
                      <p>
                        그 관점을 담은 <br />
                        공간 경험으로의 <strong>진화</strong> <br />
                        우리는 VIEW에 <br />
                        <strong>당신의 VIEW</strong>를 담습니다 <br />
                        VIEW, Perspective of Life
                      </p>
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

export default Story;
