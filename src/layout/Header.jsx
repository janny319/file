import React from "react";
import Nav from "layout/Nav";

const Header = () => {

    // 클릭 시 해당 섹션으로 스크롤하는 함수
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // 부드러운 스크롤
        }
    };

    return(
        <div className="header">
            <div className="header__logo"></div>
            <Nav onMenuClick={handleScroll}></Nav>
        </div>
    )
}

export default Header;