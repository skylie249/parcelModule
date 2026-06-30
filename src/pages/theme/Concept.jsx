import React from 'react';
import { Link } from 'react-router-dom';

const concept1Data = [
  { id: 1, img: 'concept-p1.jpg', alt: '세종대로의 끝, 광화문', title: '세종대로의 끝, 광화문', desc: '대한민국을 관통하는 중심의 축이자 역사의 상징' },
  { id: 2, img: 'concept-p2.jpg', alt: '문정로의 끝, 수지삼성2차', title: '문정로의 끝, 수지삼성2차', desc: '수지의 중심 축에서 완성되는 새로운 랜드마크' }
];

const concept2Data = [
  { id: 1, bgClass: 'concept-bg1', txClass: 'concept-tx1', text1: '역사가 증명한 위대한 길,', text2: '그리고 위대한 걸작' },
  { id: 2, bgClass: 'concept-bg2', txClass: 'concept-tx2', text1: '자부심으로 완성되는', text2: '위대한 주거 명작' },
  { id: 3, bgClass: 'concept-bg3', txClass: 'concept-tx3', text1: '도시의 속도를 지나', text2: '자연의 깊은 곳으로 들어서다' },
  { id: 4, bgClass: 'concept-bg4', txClass: 'concept-tx4', text1: '자연과 하나되는', text2: '그린 라이프의 주인공이 되다' }
];

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
                    {concept1Data.map(item => (
                      <div className="conbx" key={item.id}>
                          <div className="photo n-motion n-bottom">
                            <img src={`/resource/images/theme/${item.img}`} alt={item.alt} />
                          </div>
                          <div className="desc">
                            <h4 className="tx-tit2 n-motion n-bottom">{item.title}</h4>
                            <p className="tx-lg n-motion n-bottom">{item.desc}</p>
                          </div>
                      </div>
                    ))}
                  </div>
              </div>                
              <div className="concept-section2">
                <div className="full-blocks-pin">
                  <div className="full-blocks">
                    {concept2Data.map(item => (
                      <div className="full-block" key={item.id}>
                        <div className={`bg ${item.bgClass}`}></div>
                        <div className="desc">
                          <div className={`desc-item ${item.txClass}`}>
                            <span>{item.text1}</span><span>{item.text2}</span>
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

export default Concept;
