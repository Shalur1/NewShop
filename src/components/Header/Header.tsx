import React from 'react';
import Navbar from "./NavBar/Navbar";
// @ts-ignore
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.Header}>
            <Navbar/>
            <div className={s.Logo}>
                <div>Logo</div>
            </div>
            <div className={s.Shop}>
                <div>shop</div>
            </div>
        </div>
    );
};

export default Header;