import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Main } from "./pages/Main";
import { RecoilRoot } from "recoil";
import About from "./pages/About";
import "./App.css";
import Detail from "./pages/Detail";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
