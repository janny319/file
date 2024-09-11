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
                        end: 'bottom 70%',
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
                            <a href="#none">
                                <div className="portfolio-box__item__thumbnail">
                                    <img src={item.thumbnail} alt={item.title} />
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
        </div>
    );
};

export default Portfolio;
