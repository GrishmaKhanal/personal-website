import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
