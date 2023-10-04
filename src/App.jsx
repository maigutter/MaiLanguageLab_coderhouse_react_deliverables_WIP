import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralTitle from "./Components/GeneralTitle";
import Navbar from "./Components/Navbar/Navbar";
import CoursesDetail from "./layouts/CoursesDetail";
import Home from "./layouts/Home";
import CoursesShop from "./layouts/CoursesShop";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GeneralTitle />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coursesShop" element={<CoursesShop />} />
        <Route
          exact
          path="/coursesShop/:courseDetail"
          element={<CoursesDetail />}
        />

        <Route
          path="*"
          element={
            <h2>¡Lo sentimos! No pudimos encontrar lo que estás buscando.</h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
