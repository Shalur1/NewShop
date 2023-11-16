import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import useActions, {useAppDispatch} from "./hooks/redux";
import {useQuery} from "@apollo/client";
import {GET_CURRENCIES, GET_PRODUCTS} from "./query/query";

function App() {

    const { data, loading, error } = useQuery(GET_CURRENCIES);
    const {setCurrencies} = useActions()
    useEffect(()=>{
        if (!loading){
            setCurrencies(data.currencies)
        }
    },[loading])

    return (
        <div className="App">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/product/:productID"} element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
