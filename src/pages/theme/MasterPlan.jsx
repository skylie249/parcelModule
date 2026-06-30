import React from 'react';
import { Link } from 'react-router-dom';

const masterPlanData = [
  { label: '사업명', value: '수지 삼성2차 재건축' },
  { label: '대지위치', value: '경기도 용인시 수지구 수풍로 38' },
  { label: '지역지구', value: '제3종 일반주거지역' },
  { label: '구역개요', value: '16,739.30㎡' },
  { label: '건축면적', value: '2,814.76㎡' },
  { label: '건폐율', value: '16.82%' },
  { label: '연면적', value: '86,252.68㎡' },
  { label: '용적률', value: '289.99%' },
  { label: '건축규모', value: '지상29층, 지하3층' },
  { label: '주차대수', value: '977대(가족형 주차 포함)' },
  { label: '세대수', value: '479세대' }
];

const MasterPlan = () => {
  return (
    <div id="container">
      <section id="contents" className="sub masterplan">
        <div className="sub-top-visual">
          <div className="visual vs-brand-masterplan"></div>
          <div className="title"><h2>Master Plan</h2></div>
        </div>
        <div className="sub-contents-wrap">
          <div className="sub-top">
            <ol className="breadcrumb static">
              <li>
                <Link to="/main"><i className="ico-home"><span className="blind">Home</span></i></Link>
              </li>
              <li>Theme</li>
              <li aria-label="현재 위치">Master Plan</li>
            </ol>
          </div>
          <div className="sub-contents">
            <div className="masterplan-secction static">
              <div className="imgs n-motion n-bottom">
                <img src="/resource/images/theme/masterplan-p1.jpg" alt="" />
              </div>
              <table className="infos n-motion n-bottom">
                  <colgroup>
                    <col style={{width: '28%'}} />
                    <col style={{width: 'auto'}} />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>구분</th>
                      <th>내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {masterPlanData.map((item, index) => (
                      <tr key={index}>
                        <th>{item.label}</th>
                        <td>{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterPlan;
