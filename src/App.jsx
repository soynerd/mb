import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import MedicineDetails from "./page/MedicineDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine/:id" element={<MedicineDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
