import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
