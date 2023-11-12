import React from 'react';
import NavVar from "./NavBar/Navbar";
import s from "./Header.module.css"
import {useNavigate} from "react-router-dom";

const Header = () => {
    return (
        <div className={s.Header}>
            <NavVar/>
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