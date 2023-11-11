import React from 'react';
import s from "./NavBar.module.css"

const Navbar = () => {
    return (
        <div className={s.NavBar}>
            <p>All</p>
            <p>Clothes</p>
            <p>Tech</p>
        </div>
    );
};

export default Navbar;