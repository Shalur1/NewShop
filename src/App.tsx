import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Products/>
        </div>
    );
}

export default App;
