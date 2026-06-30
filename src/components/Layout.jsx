import React, { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const [isGnbOpen, setIsGnbOpen] = useState(false);
    const [isBgmPlaying, setIsBgmPlaying] = useState(false);
    const bgmRef = useRef(null);

    useEffect(() => {
        if (window.initCommon) window.initCommon();
    }, []);

    useEffect(() => {
        if (window.initCommonPage) window.initCommonPage();
        if (location.pathname !== '/main' && location.pathname !== '/intro') {
            if (window.initSub) window.initSub(); // setTimeout 제거
        }

        // 라우트가 변경될 때 열려있는 메뉴 닫기
        setIsGnbOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const html = document.documentElement;
        if (isGnbOpen) {
            html.classList.add('not-scroll');
        } else {
            html.classList.remove('not-scroll');
        }
    }, [isGnbOpen]);

    const toggleGnb = () => {
        setIsGnbOpen(!isGnbOpen);
    };

    const toggleBgm = () => {
        if (bgmRef.current) {
            if (isBgmPlaying) {
                bgmRef.current.pause();
            } else {
                bgmRef.current.play();
            }
            setIsBgmPlaying(!isBgmPlaying);
        }
    };

    return (
        <div id="wrap">
            <header id="header" className={isGnbOpen ? 'on' : ''}>
                <div className="header-util-nav">
                    <div className="header-logo">
                        <h1 className="logo">
                            <Link to="/main" className="logo-link"><span className="blind">SK VIEW 로고</span></Link>
                        </h1>
                    </div>
                    <button type="button" className={`btn-navbar ${isGnbOpen ? 'open' : ''}`} title={isGnbOpen ? '전체메뉴 닫기' : '전체메뉴 열기'} onClick={toggleGnb}>
                        <span className="bar">
                            <em></em>
                        </span>
                    </button>
                    <div className="sitemap">
                        <div className="sitemap-top">
                            <Link to="/main" className="logo-link"><span className="blind">SK VIEW 로고</span></Link>
                            <button type="button" className="btn-login">
                                <i className="ico-logout"><span className="blind">로그아웃</span></i>
                            </button>
                        </div>
                        <div className="sitemap-body" data-lenis-prevent>
                            <ul className="sitemap-links">
                                <li>
                                    <Link to="/theme/story"><span>Theme</span></Link>
                                    <ul className="sitemap-links-2depth">
                                        <li><Link to="/theme/story">Brand Story</Link></li>
                                        <li><Link to="/theme/concept">Concept</Link></li>
                                        <li><Link to="/theme/master-plan">Master Plan</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/complex/highlight"><span>단지안내</span></Link>
                                    <ul className="sitemap-links-2depth">
                                        <li><Link to="/complex/highlight">Highlight</Link></li>
                                        <li><Link to="/complex/architecture-design">Architecture design</Link></li>
                                        <li><Link to="/complex/exterior-design">Exterior design</Link></li>
                                        <li><Link to="/complex/landscape-design">Landscape design</Link></li>
                                        <li><Link to="/complex/community-design">Community design</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/unit/unit-design"><span>세대안내</span></Link>
                                    <ul className="sitemap-links-2depth">
                                        <li><Link to="/unit/unit-design">Unit design</Link></li>
                                        <li><Link to="/unit/unit-create">Create of Life</Link></li>
                                        <li><Link to="/unit/items">조합원 제공품목</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/vr/vr-tour"><span>VR단지투어</span></Link>
                                    <ul className="sitemap-links-2depth">
                                        <li><Link to="/vr/vr-tour">투어입장</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="gnb-mo">
                        <div className="gnb-mo-header">
                            <button type="button" className="btn-login">
                                <i className="ico-logout" aria-hidden="true"></i><span>로그아웃</span>
                            </button>
                        </div>
                        <nav className="gnb-mo-body" aria-label="모바일 내비게이션" data-lenis-prevent>
                            <ul className="gnb-mo-links">
                                <li>
                                    <button type="button" className="depth1"><span>Theme</span></button>
                                    <ul className="depth2">
                                        <li><Link to="/theme/story">Brand Story</Link></li>
                                        <li><Link to="/theme/concept">Concept</Link></li>
                                        <li><Link to="/theme/master-plan">Master Plan</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="depth1"><span>단지안내</span></button>
                                    <ul className="depth2">
                                        <li><Link to="/complex/highlight">Highlight</Link></li>
                                        <li><Link to="/complex/architecture-design">Architecture design</Link></li>
                                        <li><Link to="/complex/exterior-design">Exterior design</Link></li>
                                        <li><Link to="/complex/landscape-design">Landscape design</Link></li>
                                        <li><Link to="/complex/community-design">Community design</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="depth1"><span>세대안내</span></button>
                                    <ul className="depth2">
                                        <li><Link to="/unit/unit-design">Unit design</Link></li>
                                        <li><Link to="/unit/unit-create">Create of Life</Link></li>
                                        <li><Link to="/unit/items">조합원 제공품목</Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" className="depth1"><span>VR단지투어</span></button>
                                    <ul className="depth2">
                                        <li><Link to="/vr/vr-tour">투어입장</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="header-gnb">
                    <nav className="header-gnb-inner" aria-label="내비게이션">
                        <ul className="gnb">
                            <li>
                                <Link to="/theme/story"><span>Theme</span></Link>
                                <ul>
                                    <li><Link to="/theme/story">Brand Story</Link></li>
                                    <li><Link to="/theme/concept">Concept</Link></li>
                                    <li><Link to="/theme/master-plan">Master Plan</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/complex/highlight"><span>단지안내</span></Link>
                                <ul>
                                    <li><Link to="/complex/highlight">Highlight</Link></li>
                                    <li><Link to="/complex/architecture-design">Architecture design</Link></li>
                                    <li><Link to="/complex/exterior-design">Exterior design</Link></li>
                                    <li><Link to="/complex/landscape-design">Landscape design</Link></li>
                                    <li><Link to="/complex/community-design">Community design</Link></li>
                                </ul>
                            </li>
                            <li>
                                <div className="header-logo">
                                    <h1 className="logo">
                                        <Link to="/main" className="logo-link"><span className="blind">SK VIEW 로고</span></Link>
                                    </h1>
                                </div>
                            </li>
                            <li>
                                <Link to="/unit/unit-design"><span>세대안내</span></Link>
                                <ul>
                                    <li><Link to="/unit/unit-design">Unit design</Link></li>
                                    <li><Link to="/unit/unit-create">Create of Life</Link></li>
                                    <li><Link to="/unit/items">조합원 제공품목</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/vr/vr-tour"><span>VR단지투어</span></Link>
                                <ul>
                                    <li><Link to="/vr/vr-tour">투어입장</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header-util-log">
                    <button type="button" className={`bgSoundBtn ${isBgmPlaying ? 'on' : ''}`} onClick={toggleBgm}><i>{isBgmPlaying ? 'SOUND OFF' : 'SOUND ON'}</i></button>
                    <audio id="bgm" muted loop ref={bgmRef}>
                        <source src="/resource/images/video/jonasblakewood-corporate-background-524146.mp3" type="audio/mp3" />
                    </audio>
                    <button type="button" className="btn-login">
                        <i className="ico-logout" aria-hidden="true"></i><span className="blind">로그아웃</span>
                    </button>
                </div>
            </header>

            <Outlet />

            <footer id="footer">
                <div className="footer-ment">
                    <p>※ 당 홈페이지의 사진, 이미지, 영상 등은 조합원님의 이해를 돕기위한 것으로 실제 인허가 등 사업추진 과정에 따라 다소 차이가 발생할 수 있습니다.</p>
                </div>
                <div className="footer-top">
                    <ul className="footer-links">
                        <li><a href="https://www.skview.co.kr/html/etc/?dp1=privacy&dp2=privacy" target="_blank" title="새창열림" rel="noreferrer">개인정보처리방침</a></li>
                        <li><a href="https://www.skview.co.kr/html/etc/?dp1=terms&dp2=terms" target="_blank" title="새창열림" rel="noreferrer">이용약관</a></li>
                        <li><a href="https://www.skview.co.kr/html/etc/?dp1=apartment&dp2=info_guide" target="_blank" title="새창열림" rel="noreferrer">정보보호 가이드(관리사무소용)</a></li>
                    </ul>
                    <div className="footer-aside">
                        <div className="sns">
                            <a href="https://www.youtube.com/@skview_official" target="_blank" title="새창열림" rel="noreferrer"><i className="ico-youtube"><span className="blind">SK VIEW 유튜브</span></i></a>
                            <a href="http://pf.kakao.com/_rxjQps" target="_blank" title="새창열림" rel="noreferrer"><i className="ico-kakaoch"><span className="blind">SK VIEW 카카오톡 채널</span></i></a>
                            <a href="https://www.instagram.com/skview_official/" target="_blank" title="새창열림" rel="noreferrer"><i className="ico-instagram"><span className="blind">SK VIEW 인스타그램</span></i></a>
                        </div>
                        <div className="dropdown">
                            <button type="button"><span>FAMILY SITE</span><i className="ico-arr-up"><span className="blind">열기</span></i></button>
                            <ul>
                                <li><a href="https://www.skecoplant.com/" target="_blank" title="새창열림" rel="noreferrer">SK 에코플랜트</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-btm">
                    <div className="footer-infos">
                        <address className="infos">
                            <span>대표자명 : 김영식</span>
                            <span className="tel">대표번호 : 02-3700-7114</span><br className="mo-only" />
                            <span className="fax">FAX : 02-3700-8200</span>
                            <span className="email">이메일 : SKEP.SKVIEW@SK.COM</span><br />
                            <span className="adr">서울특별시 종로구 율곡로2길 19, SK에코플랜트</span><br className="mo-only" />
                            <span>사업자등록번호 : 101-81-34928</span>
                        </address>
                        <div className="copy">&copy; SK VIEW CO.,LTD. ALL RIGHTS RESERVED.</div>
                    </div>
                    <div className="footer-certi">
                        <a href="https://www.skview.co.kr/rStatic/pdf/ISO27001.pdf" title="새창열림" target="_blank" rel="noreferrer">
                            <img src="/resource/images/common/logo-bsi-27001.svg" alt="ISO/IEC 27001" />
                        </a>
                        <a href="https://www.skview.co.kr/rStatic/pdf/ISO27701.pdf" title="새창열림" target="_blank" rel="noreferrer">
                            <img src="/resource/images/common/logo-bsi-27701.svg" alt="ISO/IEC 27701" />
                        </a>
                    </div>
                    <div className="footer-logo">
                        <span className="blind">SK VIEW 로고</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
