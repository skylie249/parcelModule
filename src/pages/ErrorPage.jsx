import React from 'react';
import { Link } from 'react-router-dom';

/**
 * [Code Review]
 * 이 컴포넌트는 주로 정적 UI를 렌더링하는 페이지입니다.
 * 개선 권장 사항:
 * - 텍스트 및 이미지 경로 등 하드코딩된 데이터를 상수나 JSON으로 분리하면 유지보수가 더 쉽습니다.
 * - 마크업이 반복되는 구간은 하위 컴포넌트로 분리해 보세요.
 */
const ErrorPage = () => {
  return (
    <div id="container">
      <section id="contents" className="sub">
         <div className="error-wrap">
              <div className="error-msg">
                  <h2>죄송합니다.<br />요청하신 페이지를 찾을 수 없습니다.</h2>
                  <p>방문하시려는 페이지의 주소가 잘못 입력되었거나, 페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다. <br />
                      입력하신 주소가 정확한지 다시 한번 확인해 주시기를 바랍니다. <br />
                      잠시후에 접속하여 다시 시도해 주시기 바랍니다.</p>
                  <Link to="/main" className="btn-fill large">Home</Link>    
              </div>
         </div>
      </section>   
    </div>
  );
};

export default ErrorPage;
