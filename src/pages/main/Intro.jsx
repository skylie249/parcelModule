import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { getCookie } from '../../utils/cookie';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('JWT_TOKEN');
    const verifyUrl = import.meta.env.VITE_JWT_VERIFY_URL; // JWT 검증 URL

    // 세션(JWT 쿠키)을 강제 생성하고 main으로 이동하는 함수
    const createSessionAndNavigate = () => {
      const dummyPayload = {
        sub: "bypassUser",
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1시간 만료
      };
      const dummyToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + btoa(JSON.stringify(dummyPayload)) + ".dummy_signature";
      document.cookie = `JWT_TOKEN=${dummyToken}; path=/;`;
      navigate('/main', { replace: true });
    };

    if (verifyUrl) {
      // 1) JWT 검증 URL이 있는 경우
      if (token) {
        // 서버의 검증 API 호출을 가정
        fetch(verifyUrl, {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${token}` }
        })
        .then(res => {
          if (res.ok) {
            navigate('/main', { replace: true }); // 이미 세션이 정상이므로 바로 진입
          } else {
            createSessionAndNavigate(); // 검증 실패 시 요구사항에 따라 세션 강제 생성 후 진입
          }
        })
        .catch(err => {
          console.error("JWT 검증 API 호출 에러:", err);
          createSessionAndNavigate();
        });
      } else {
        createSessionAndNavigate(); // 토큰이 없어도 세션 생성 후 진입
      }
    } else {
      // 2) JWT 검증 URL이 없는 경우 (로컬 프론트엔드 검증)
      if (token) {
        try {
          const decodedPayload = jwtDecode(token);
          if (decodedPayload) {
          const currentTime = Date.now() / 1000;
          if (decodedPayload.exp && decodedPayload.exp < currentTime) {
            console.error("JWT 검증 실패: 토큰이 만료되었습니다.");
            createSessionAndNavigate();
          } else {
            navigate('/main', { replace: true }); // 정상 토큰
          }
          }
        } catch (e) {
          console.error("JWT 검증 실패: 잘못된 토큰 형식입니다.");
          createSessionAndNavigate();
        }
      } else {
        createSessionAndNavigate(); // 토큰이 없는 경우에도 무조건 세션 생성 후 진입
      }
    }

    if (window.initIntro) window.initIntro();
  }, [navigate]);

  const handleExternalAuth = (e) => {
    e.preventDefault();
    // 실제 운영 시 외부 로그인 사이트 URL로 리다이렉트합니다.
    // window.location.href = "https://your-auth-server.com/login";
    alert("외부 인증 사이트로 이동하여 JWT 토큰을 발급받아야 합니다.");
  };

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
              <Link to="/main" className="btn-outline" onClick={handleExternalAuth}>회원가입</Link>
              <Link to="/main" className="btn-outline" onClick={handleExternalAuth}>로그인</Link>
            </div>
          </div>
          <div className="intro-infos-inner" data-type="2">
            <p>조합원에 한해 입장이 가능합니다</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Intro;
