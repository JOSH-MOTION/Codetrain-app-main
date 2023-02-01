import React from "react";
import { Routes, Route, BrowserRouter as AppRouter, Link } from "react-router-dom";
import McEmail from "../Component/ComponentEmail/McEmail";
import McNav from "../Component/ComponentNav/McNav";
import Homepage from "../Component/Homepage/Homepage";
import McCareers from "../Component/CareersComponent/McCareers"
import Order from "../Component/OrderComponent/Order";


const Router = () => {
  return (
    <div>
      
      <AppRouter>
      <McNav />
        <Link to="/" className="Homepage"></Link>
        <Link to="/email" className="email"></Link>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/McEmail" element={<McEmail />} />
          <Route path="/McCareers" element={<McCareers />} />
          <Route path="/Orders" element={<Order/>} />

         
        </Routes>
      </AppRouter>
    </div>
  );
};

export default Router;
