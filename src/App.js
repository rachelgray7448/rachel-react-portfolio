import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="mainpage">
            <div>
                <Header />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
