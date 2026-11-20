
import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainLayout = () => {
  return (
    <div className="hra-website">
      {/* Website Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
