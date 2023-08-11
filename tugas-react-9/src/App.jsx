import { Outlet } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <HeadlineCards /> */}
      {/* <Product /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
