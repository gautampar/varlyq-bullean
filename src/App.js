import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Service from "./pages/Service";
import Investers from "./pages/Investers";
import Curated from "./pages/Curated";
import { ThemeProtector } from "./ProtectRoute/ThemeProtector";

function App() {
  return (
    <div className="overflow-hidden w-full pb-[1px] ranade  bg-white  dark:bg-gradient-to-b from-[#141F5E] to-[#03040C]  text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ThemeProtector><HomePage /></ThemeProtector>} />
          <Route path="/curated-for-you" element={<ThemeProtector><Curated /></ThemeProtector>} />
          <Route path="/service" element={<ThemeProtector><Service /></ThemeProtector>} />
          <Route path="/investor" element={<ThemeProtector><Investers /></ThemeProtector>} />
          {/* <Route path="/contact-us" element={< />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
