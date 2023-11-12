import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";

function App() {

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
