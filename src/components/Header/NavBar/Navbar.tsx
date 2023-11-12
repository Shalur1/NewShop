import React, {FC, MouseEventHandler, useEffect, useState} from 'react';
import s from "./NavBar.module.css"
import {useQuery} from "@apollo/client";
import {GET_CATEGORIES} from "../../../query/query";
import useActions, {useAppSelector} from "../../../hooks/redux";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../redux/store/store";
import {useNavigate} from "react-router-dom";

const NavBar:FC = () => {
    const {setCategories, setChosenCategory} = useActions();
    const { data, loading } = useQuery(GET_CATEGORIES);
    const dispatch = useDispatch<AppDispatch>();
    const categories = useAppSelector(state => state.NavBarReducer.categories);
    const chosenCategory = useAppSelector(state => state.NavBarReducer.chosenCategory);
    const nav = useNavigate()


    useEffect(() => {
        if (!loading && data) {
            dispatch(setCategories(data.categories));
        }
    }, [data, loading, dispatch]);

    const choseCategory: MouseEventHandler<HTMLDivElement> = (event) => {
        const elem = event.currentTarget;
        const name = elem.getAttribute('data-name');
        if (name) {
            dispatch(setChosenCategory(name));
        }
        nav("/")
    };

    return (
        <div className={s.NavBar}>
            {categories.map((elem) => (
                <div
                    key={elem.name}
                    onClick={choseCategory}
                    className={elem.name === chosenCategory ? s.Text + " " + s.Chosen : s.Text}
                    data-name={elem.name}
                >
                    <p>{elem.name}</p>
                </div>
            ))}
        </div>
    );
};


export default NavBar;