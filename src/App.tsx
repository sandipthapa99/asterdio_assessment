import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Apply from "./pages/Apply";
import { ApplicantsProps } from "./types";
import Applicants from "./pages/Applicants";

function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/apply" element={<Apply />} />
                <Route path="/applicants" element={<Applicants />} />
            </Routes>
        </>
    );
}

export default App;
