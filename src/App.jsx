import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage"
import Agents from "./Pages/Agents";
import Bundles from "./Pages/Bundles";
import PageNotFound from "./Pages/PageNotFound";

export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="agents" element={<Agents />} />
      <Route path="bundles" element={<Bundles />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
}

