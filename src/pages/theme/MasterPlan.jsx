import React from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
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
                    <tr>
                      <th>사업명</th>
                      <td>수지 삼성2차 재건축</td>
                    </tr>
                    <tr>
                      <th>대지위치</th>
                      <td>경기도 용인시 수지구 수풍로 38</td>
                    </tr>
                    <tr>
                      <th>지역지구</th>
                      <td>제3종 일반주거지역</td>
                    </tr>
                    <tr>
                      <th>구역개요</th>
                      <td>16,739.30㎡</td>
                    </tr>
                    <tr>
                      <th>건축면적</th>
                      <td>2,814.76㎡</td>
                    </tr>
                    <tr>
                      <th>건폐율</th>
                      <td>16.82%</td>
                    </tr>
                    <tr>
                      <th>연면적</th>                        
                      <td>86,252.68㎡</td>
                    </tr>                      
                    <tr>
                      <th>용적률</th>
                      <td>289.99%</td>
                    </tr>
                    <tr>
                      <th>건축규모</th>
                      <td>지상29층, 지하3층</td>
                    </tr>                      
                    <tr>
                      <th>주차대수</th>
                      <td>977대(가족형 주차 포함)</td>
                    </tr>
                    <tr>
                      <th>세대수</th>
                      <td>479세대</td>
                    </tr>
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
