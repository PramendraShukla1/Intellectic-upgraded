import Footer from "../components/Footer";
import {NavbarWithMegaMenu} from "../components/NavbarComp";
import { Outlet } from "react-router-dom";

const Layout = () =>{
    return (
      <div>
      
       <NavbarWithMegaMenu/>
        <Outlet />
        <Footer/>
       
      </div>
    );
  }

  export default Layout;