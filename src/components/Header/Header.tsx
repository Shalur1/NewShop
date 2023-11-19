import React, {useEffect, useState} from 'react';
import NavVar from "./NavBar/Navbar";
import s from "./Header.module.css"
import Select from "../UI/Select/Select";
import useActions, {useAppSelector} from "../../hooks/redux";
import Button from "../UI/Button/Button";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const {setSelectedOption} = useActions()
    const currencies = useAppSelector(state => state.CurrenciesReducer.currencies)
    const selectedOption = useAppSelector(state => state.SelectedOptionReducer.SelectedOption)
    const nav = useNavigate()

    const Redirect = function () {
        nav("/Cart")
    }

    const Redirect2 = function () {
        nav("/")
    }


    return (
        <div className={s.Header}>
            <NavVar/>
            <div onClick={Redirect2} className={s.Logo}>
                <div>Logo</div>
            </div>
            <div className={s.Shop}>
                <Button onClick={Redirect}>To Cart</Button>
                <Select selectedOption={selectedOption} Currencies={currencies} onChange={setSelectedOption}/>
            </div>
        </div>
    );
};

export default Header;