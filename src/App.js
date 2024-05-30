import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Activities from "./Pages/Activities";
import Destinantion from "./Pages/Destinantion";
import Themes from "./Pages/Themes";
import PageNotFound from "./Pages/PageNotFound";
import BackGroundVideo from "./Pages/BackGroundVideo";
import PaymentPage from "./Pages/PaymentPage";
import BotChatToggle from "./Pages/BotChatToggle";

// import Layout from './Component/Layout/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/destination" element={<Destinantion />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/BackGroundVideo" element={<BackGroundVideo />} />
          <Route path="/PaymentPage" element={<PaymentPage />} />
          <Route path="/botChatToggle" element={<BotChatToggle />} />

          <Route path="/" element={<Home />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <Layout /> */}
    </>
  );
}

export default App;
