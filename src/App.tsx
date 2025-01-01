import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import DSA from "./pages/DSA";
import Articles from "./pages/Articles";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dsa" element={<DSA />} />
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}
