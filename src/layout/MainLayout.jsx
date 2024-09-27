import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Nav/Nav";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
