import React from "react";
import McEmail from "../ComponentEmail/McEmail";
import McSearch from "../SearchComponent/McSearch"
import Order from "../OrderComponent/Order";
import McCareers from "../CareersComponent/McCareers";
import Home from "../OrderComponent/Home";
import { BrowserRouter as AppRouter, Routes, Route, Link }from "react-router-dom";


function Router() {
  return (
    <AppRouter>
      {/* <Link to="/" className="McNav"></Link> */}
        <Link to="/McEmail" className="McEmail"></Link>
        <Link to="/Order" className="Order"></Link>
        <Link to="/McSearch" className="McSearch"></Link>
        <Link to="/McCareers" className="McCareers"></Link>
        {/* <Link to="/McDeals" className="McDeals"></Link>
        <Link to="/McDonald" className="McDonald"></Link>
        <Link to="/McFreeFries" className="McFreeFries"></Link>
        <Link to="/McOrder" className="McOrder"></Link>
        <Link to="/McStraight" className="McStraight"></Link>
        <Link to="/McYourStory" className="McYourStory"></Link> */}
      <Routes>
      {/* <Route exact path="/" element={<McNav />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/McEmail" element={<McEmail />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/McSearch" element={<McSearch />} />
          <Route path="/McCareers" element={<McCareers />} />
          {/* <Route path="/McDeals" element={<McDeals />} />
          <Route path="/McDonald" element={<McDonald />} />
          <Route path="/McFreeFries" element={<McFreeFries />} />
          <Route path="/McOrder" element={<McOrder />} />
          <Route path="/McStraight" element={<McStraight />} />
          <Route path="/McYourStory" element={<McYourStory />} />
          <Route path="/McFoot" element={<McFooter/>} /> */}

      </Routes>
    </AppRouter>
  );
}

export default Router;
