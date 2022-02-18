import React from "react";
import Navbar from "./Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flexflex-1 h-screen flex-col bg-gray-50">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
