import tbdProfileIMG from "assets/images/img/img_tbd_01.jpg"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Profile = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.profile',
            start: '20% 80%',
            end: '60% top',
            toggleActions: "play reverse play reverse",
            animation:gsap.fromTo(
                '.profile__img',
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1.5 }
            ),
        });
    },[]);

    return(
    <div className="profile">
        <div className="profile__img">
            <img src={tbdProfileIMG} alt="프로파일 이미지" />
        </div>
        <div className="profile__box">
            <div className="profile__introduction">
                <h2 className="profile__introduction__title">
                    사용자 친화적인 웹사이트를 만들어가는<br/>
                    웹 퍼블리셔 이은재 입니다.
                </h2>
                <p className="profile__introduction__text">
                    밝고 명량한 성격으로 사람들과 어울리고 소통하는 것을 좋아해요.<br/>
                    사람과 사람 사이의 예의와 신뢰가 가장 중요하다 생각하며 저 또한 지키려고 많이 노력합니다.
                </p>
                <p className="profile__introduction__text">
                    자부심과 열정을 가지고 일하고 있어요. <br/>
                    제가 맡은 일은 최대한 완벽하게 끝까지 책임감 있게 하려고 노력합니다.
                </p>
                <p className="profile__introduction__text">
                    변화와 진화를 거듭하는 IT 기술을 두려움으로 기피하기 보다는 <br/>
                    호기심을 가지고 접하며 제것으로 만들기 위해 늘 도전하고 있습니다.
                </p>
                <p className="profile__introduction__text">
                    프로젝트를 진행할때 생각치 못한 변수가 생길때면,<br/>
                    아직은 부족하단 생각에 위축되기도 합니다. <br/>
                    잠시 숨을 고르고, 다시 업무에 집중해서 이슈를 하나씩 해결해 나갈때, <br/>
                    저는 큰 성취감과 희열을 느낄 수 있습니다. <br/>
                    이런 순간들이 최선을 다하며 일하게 하는 원동력이 되고 있습니다.
                </p>
            </div>
            <div className="profile__history">
                <h2>학력</h2>
                <dl className="profile__history__item">
                    <dt>2003.03 ~ 2007.02</dt>
                    <dd>동아방송 예술대학_영상제작학과</dd>
                </dl>
            </div>
            <div className="profile__history">
                <h2>경력 - 13년 1개월</h2>
                <dl className="profile__history__item">
                    <dt>2024.03 ~ 재직중</dt>
                    <dd>
                        (주)프레임아웃
                        <em>퍼블리싱1파트_파트장</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2022.07 ~ 2023.11</dt>
                    <dd>
                        주식회사 캐플릭스
                        <em>프론트엔드팀_매니져</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2018.09 ~ 2022.07</dt>
                    <dd>
                        주식회사 다름
                        <em>퍼블리싱팀_팀장</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2015.08 ~ 2016.08</dt>
                    <dd>
                        (주)에프지아이
                        <em>퍼블리싱팀_과장</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2015.02 ~ 2015.07</dt>
                    <dd>
                        윤커뮤니케이션즈
                        <em>퍼블리싱 계약직</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2013.02 ~ 2015.02</dt>
                    <dd>
                        케이아이티벨리(주)
                        <em>개발사업부_대리</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2010.11 ~ 2013.01</dt>
                    <dd>
                        대교 CNS
                        <em>개발팀_사원</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2010.08 ~ 2010.11</dt>
                    <dd>
                        주식회사조이플레닛
                        <em>퍼블리싱_사원</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2010.06 ~ 2010.08</dt>
                    <dd>
                        한국통신돔닷컴(주)
                        <em>디자인팀_사원</em>
                    </dd>
                </dl>
                <dl className="profile__history__item">
                    <dt>2009.05 ~ 2010.06</dt>
                    <dd>
                        (주)키스코
                        <em>디자인팀_주임</em>
                    </dd>
                </dl>
            </div>
        </div>
    </div>
    )
}

export default Profile;