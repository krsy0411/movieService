import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import { Main } from "./pages/Main";
import { RecoilRoot } from "recoil";
import About from "./pages/About";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
