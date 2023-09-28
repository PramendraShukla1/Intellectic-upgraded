import { BrowserRouter, Route, Routes } from "react-router-dom";
import Outlet from "./utils/Outlet";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import Blog from "./pages/Blog";
import BlogOne from "./components/Blogs/BlogPages/BlogOne";
import Internships from "./pages/CollageStudents/Internships";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/mern-stack-development" element={<BlogOne />} />
            <Route path="/intellectic-internships" element={<Internships />}/>
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
