import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BrowseSideBar } from "../components/BrowseSideBar";

export const Layout = () => {
  return (
    <ScrollToTop>
      <Navbar />

      <div className="container-fluid bg-black">
        <div className="row">
          <BrowseSideBar /> 
          
          <main className="col-10 p-4">
            <Outlet />
          </main>
        </div>
      </div>

      <Footer />
    </ScrollToTop>
  );
};
