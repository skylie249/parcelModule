import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
  useEffect(() => {
    if (window.initIntro) setTimeout(() => window.initIntro(), 50);
  }, []);

  return (
    <div id="wrap">
      <div className="intro-wrap">
        <div className="intro-vs">
          <div className="intro-vs-inner">
            <h1>
              <img src="/resource/images/main/tx-skview.svg" alt="SK VIEW" />
              <img src="/resource/images/main/tx-ap.svg" alt="AVENUE PARK" />
            </h1>
            <p className="t1">온라인 전시관으로 초대합니다.</p>
            <p className="t2">수지 삼성2차 조합원에 한하여 입장이 가능합니다. <br />
            SK VIEW 홈페이지 가입 절차가 진행됩니다.<br />
            온라인 전시관 관람을 위해 PC 접속이 권장됩니다.</p>

            <div className="intro-vs-form">               
                <span className="checkForm">
                  <input type="radio" id="memberYes" name="member" value="Y" />
                  <label htmlFor="memberYes">조합원입니다.</label>
                </span>                
                <span className="checkForm">
                  <input type="radio" id="memberNo" name="member" value="N" />
                  <label htmlFor="memberNo">조합원이 아닙니다.</label>
                </span>
            </div>
            <p className="tment">※ 당 홈페이지의 사진, 이미지, 영상 등은 조합원님의 이해를 돕기위한 것으로 실제 인허가 등 사업추진 과정에 따라 다소 차이가 발생할 수 있습니다.</p>
          </div>
        </div>

        {/* 조합원 */}
        <div className="intro-infos">          
          <div className="intro-infos-inner" data-type="1">
              <p>※ 본 홈페이지의 수지 삼성 2구역 조합원을 위한 것이며, 정보는 SK 에코플랜트에 귀속됩니다.</p>
              <p>부정경쟁방지 및 영업비밀보호에 관한 법률 등의 관련 법령에 따라 보호 대상이 되는 영업비밀, 지적재산권 등을 포함하고 있을 수 있으며, <br className="pc-only" />
                본 페이지에 포함된 정보 및 첨부물의 전부 또는 일부를 무단으로 보유 및 제3자에게 전송, 배포, 복사 또는 공개할 수 없습니다.</p>
              <div className="btns">
                  <Link to="/main" className="btn-outline">회원가입</Link>
                  <Link to="/main" className="btn-outline">로그인</Link>
              </div>  
          </div>
          <div className="intro-infos-inner"  data-type="2">
              <p>조합원에 한해 입장이 가능합니다</p>
            </div>
        </div>

      </div>
    </div>  
  );
};

export default Intro;
