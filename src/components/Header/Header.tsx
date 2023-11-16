import React, {useState} from 'react';
import NavVar from "./NavBar/Navbar";
import s from "./Header.module.css"
import Select from "../UI/Select/Select";
import {useAppSelector} from "../../hooks/redux";

const Header = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const handleSelectChange = (selectedValue: string) => {
        setSelectedOption(selectedValue);
    };
    const Currencies = useAppSelector(state => state.CurrenciesReducer.currencies)
    console.log(Currencies)

    return (
        <div className={s.Header}>
            <NavVar/>
            <div className={s.Logo}>
                <div>Logo</div>
            </div>
            <div className={s.Shop}>
                <div>shop</div>
                <Select Currencies={Currencies} onChange={handleSelectChange}/>
            </div>
        </div>
    );
};

export default Header;