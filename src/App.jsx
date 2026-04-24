import React from "react";
import { Routes, Route } from "react-router-dom";

import FullPage from "./components/Homepage/FullPage/FullPage";
import FullServer from "./components/Services2/FullServer/FullServer";
import Header from "./components/Header/Header";
import Work from "./Portfolio/Work/Work";
import Contacts from "./components/Contacts/Contacts/Contacts";
import About from "./components/About/About";
import Services from "./components/Services2/services/Design";
import News from "./components/portfolio2/news/News";

const App = () => {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>

      <FullPage />
      <FullServer />
    </div>
  );
};

export default App;