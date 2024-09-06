import React from "react";
import portfolioData from "dataJson/portfolioData.json"

const Portfolio = () => {
    return(
        <div className="portfolio">
            <div className="portfolio-box">
                <ul className="portfolio-box__list">
                    {portfolioData.map((item) => (
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
    )
}

export default Portfolio;