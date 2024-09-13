import React, { useRef, useLayoutEffect } from "react";
import portfolioData from "dataJson/portfolioData.json";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
    const list = useRef();

    useLayoutEffect(() => {
        const items = gsap.utils.toArray('.portfolio-box__item');

        items.forEach((item, index) => {
            gsap.fromTo(item,
                {
                    y: 150,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    scrollTrigger: {
                        trigger: list.current,
                        start: 'top 60%',
                        end: '55% 80%',
                        toggleActions: 'play reverse play reverse',
                        scrub: 2,
                    }
                }
            );
        });
    }, []);

    return (
        <div className="portfolio">
            <div className="portfolio-box">
                <ul className="portfolio-box__list" ref={list}>
                    {[...portfolioData].reverse().map((item) => (
                        <li key={item.id} className="portfolio-box__item">
                            <a href={item.link}>
                                <div className="portfolio-box__item__thumbnail">
                                    <img src={item.thumbnail} alt="홈페이지 섬네일" />
                                </div>
                                <div className="portfolio-box__item__text">
                                    <strong>{item.title}</strong>
                                    <span>{item.description}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="portfolio-career">
                <h3>내가 해온 일들</h3>
                <dl className="portfolio-career__list">
                    <dt>2024년</dt>
                    <dd>인포뱅크 iTalk 구축 - react(PL)</dd>
                    <dd>인포뱅크 - AICC 고도화 - react(PL)</dd>
                    <dd>인포뱅크 - Bizgo 고도화 - HTML / Jquery(PL)</dd>
                    <dd>개인포트폴리오 제작 - react / GSAP / scss</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2023년</dt>
                    <dd>제주패스 - 렌트카 ERP 운영</dd>
                    <dd>제주패스 - 렌트카 메뉴 vue 전환</dd>
                    <dd>소노카 사이트 구축 - react </dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2022년</dt>
                    <dd>SK Adot - T멤버십 파트 구축(PL)</dd>
                    <dd>캐플릭스(일본지사) 홈페이지 구축(PL)</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2021년</dt>
                    <dd>SK T멤버십(PL)</dd>
                    <dd>SK T멤버십 고도화(PL)</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2020년</dt>
                    <dd>SK Tword 구축(PL)</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2019년</dt>
                    <dd>KB 경영연구소 홈페이지 리뉴얼</dd>
                    <dd>라온 홈페이지 구축</dd>
                    <dd>성주재단 홈페이지 구축</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2018년</dt>
                    <dd>슈프리마 홈페이지 리뉴얼</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt>2016년</dt>
                    <dd>강변테크노마트 홈페이지 구축</dd>
                    <dd>fineComeSe 홈페이지 구축</dd>
                    <dd>유토 이미지 홈페이지 구축</dd>
                    <dd>롯데 L-cloud 홈페이지 구축</dd>
                    <dd>ANF 대산물산 홈페이지 구축</dd>
                </dl>
                <dl className="portfolio-career__list">
                    <dt> ~ 2015년</dt>
                    <dd>서울시 열린 데이터 광장 홈페이지 제작</dd>
                    <dd>인천시청 모바일 홈페이지 제작</dd>
                    <dd>홍익인간 홍보 페이지 제작</dd>
                    <dd>경찰대학교 홈페이지 리뉴얼</dd>
                    <dd>KT 인재개발원 홈페이지 리뉴얼</dd>
                    <dd>감사원 감사결과 시스템 추가 개발 참여</dd>
                    <dd>농림부 홈페이지 메인 개편</dd>
                    <dd>용인대학교 홈페이지 리뉴얼</dd>
                    <dd>품질인증사이트 웹접근성 작업</dd>
                    <dd>케이아이티밸리 홈페이지 구축</dd>
                    <dd>재난안전연구원 지진피해대응 시스템 구축</dd>
                    <dd>전력연구원 지진피해대응 시스템 구축</dd>
                    <dd>수자원공사 지진대응시스템 구축</dd>
                    <dd>대교리브로 사이트 유지보수 및 신규 개발 프로젝트 참여</dd>
                    <dd>조이플레닛 홈페이지 구축</dd>
                    <dd>경기방송 홈페이지 디자인 및 코딩</dd>
                </dl>
            </div>
        </div>
    );
};

export default Portfolio;
