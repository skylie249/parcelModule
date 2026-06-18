import React from 'react';
import { Link } from 'react-router-dom';

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
