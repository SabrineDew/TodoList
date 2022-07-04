import Tableau from "./component/Tableau";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Profil from "./component/Profil";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="todolist" element={<Tableau />} />
          <Route path="*" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
