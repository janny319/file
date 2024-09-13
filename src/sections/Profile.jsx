import myPhoto from "assets/images/img/img_me02.jpg"
import historyData from "dataJson/historyData.json"
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
            <img src={myPhoto} alt="프로파일 이미지" />
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
                {[...historyData].reverse().map((history) => (
                    <dl key={history.id} className="profile__history__item">
                        <dt>{history.date}</dt>
                        <dd>
                            {history.company}
                            <em>{history.position}</em>
                        </dd>
                    </dl>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Profile;