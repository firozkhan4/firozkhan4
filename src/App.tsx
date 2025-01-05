import { Route, Routes } from "react-router-dom";
import Articles from "./pages/Articles";
import DSA from "./pages/DSA";
import DSAPage from "./pages/DSAPage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dsa">
          <Route index element={<DSA />} />
          <Route path=":id" element={<DSAPage />} />
        </Route>
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}
