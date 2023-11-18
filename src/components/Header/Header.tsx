import React, {useEffect, useState} from 'react';
import NavVar from "./NavBar/Navbar";
import s from "./Header.module.css"
import Select from "../UI/Select/Select";
import useActions, {useAppSelector} from "../../hooks/redux";

const Header = () => {
    const {setSelectedOption} = useActions()
    const currencies = useAppSelector(state => state.CurrenciesReducer.currencies)
    const selectedOption = useAppSelector(state => state.SelectedOptionReducer.SelectedOption)

    return (
        <div className={s.Header}>
            <NavVar/>
            <div className={s.Logo}>
                <div>Logo</div>
            </div>
            <div className={s.Shop}>
                <div>shop</div>
                <Select selectedOption={selectedOption} Currencies={currencies} onChange={setSelectedOption}/>
            </div>
        </div>
    );
};

export default Header;