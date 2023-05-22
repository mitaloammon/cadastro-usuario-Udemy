import React from "react";
import {Routes, Route, Navigate } from 'react-router';

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props =>
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/users" element={<UserCrud />} />
        <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
