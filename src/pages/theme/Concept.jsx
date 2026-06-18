import React from 'react';
import { Link } from 'react-router-dom';

const Concept = () => {
  return (
    <div id="container">
      <section id="contents" className="sub concept">
        <div className="sub-top-visual">
          <div className="visual vs-brand-concept"></div>
          <div className="title"><h2>Concept</h2></div>
        </div>
        <div className="sub-contents-wrap">
          <div className="sub-top">
            <ol className="breadcrumb static">
              <li>
                <Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link>
              </li>
              <li>Theme</li>
              <li aria-label="현재 위치">Concept</li>
            </ol>
          </div>
          <div className="sub-contents">
              <div className="concept-section1">
                  <div className="concept-title">
                    <p className="cate n-motion n-bottom">THE HERITAGE OF AVENUE</p>
                    <h3 className="tx-tit n-motion n-bottom">도시를 관통하는 황금축, <strong>애비뉴</strong></h3>
                    <p className="tx-lg n-motion n-bottom">위대한 도시에는 그 이름을 증명하는 위대한 길이 있습니다</p>
                  </div>
                  <div className="concept-con">
                    <div className="conbx">
                        <div className="photo n-motion n-bottom">
                          <img src="/resource/images/theme/concept-p1.jpg" alt="세종대로의 끝, 광화문" />
                        </div>
                        <div className="desc">
                          <h4 className="tx-tit2 n-motion n-bottom">세종대로의 끝, 광화문</h4>
                          <p className="tx-lg n-motion n-bottom">대한민국을 관통하는 중심의 축이자 역사의 상징</p>
                        </div>
                    </div>
                    <div className="conbx">
                        <div className="photo n-motion n-bottom">
                          <img src="/resource/images/theme/concept-p2.jpg" alt="문정로의 끝, 수지삼성2차" />
                        </div>
                        <div className="desc">
                          <h4 className="tx-tit2 n-motion n-bottom">문정로의 끝, 수지삼성2차</h4>
                          <p className="tx-lg n-motion n-bottom">수지의 중심 축에서 완성되는 새로운 랜드마크</p>
                        </div>
                    </div>
                  </div>
              </div>                
              <div className="concept-section2">
                <div className="full-blocks-pin">
                  <div className="full-blocks">
                    <div className="full-block">
                      <div className="bg concept-bg1"></div>
                      <div className="desc">
                        <div className="desc-item concept-tx1">
                          <span>역사가 증명한 위대한 길,</span><span>그리고 위대한 걸작</span>
                        </div>
                      </div>  
                    </div>
                    <div className="full-block">
                      <div className="bg concept-bg2"></div>
                      <div className="desc">
                        <div className="desc-item concept-tx2">
                          <span>자부심으로 완성되는</span><span>위대한 주거 명작</span>  
                        </div>
                      </div>  
                    </div>
                    <div className="full-block">
                      <div className="bg concept-bg3"></div>
                      <div className="desc">
                        <div className="desc-item concept-tx3">
                          <span>도시의 속도를 지나</span><span>자연의 깊은 곳으로 들어서다</span>  
                        </div>
                      </div>  
                    </div>
                    <div className="full-block">
                      <div className="bg concept-bg4"></div>
                      <div className="desc">
                        <div className="desc-item concept-tx4">
                          <span>자연과 하나되는</span><span>그린 라이프의 주인공이 되다</span>  
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

export default Concept;
