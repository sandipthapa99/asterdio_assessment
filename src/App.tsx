import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Apply from "./pages/Apply";
import Applicants from "./pages/Applicants";
import { Notifications } from "@mantine/notifications";

function App() {
    return (
        <>
            <Notifications />
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
