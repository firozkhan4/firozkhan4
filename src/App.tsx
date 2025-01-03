import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import DSA from "./pages/DSA";
import Articles from "./pages/Articles";
import Page from "./pages/Page";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dsa">
          <Route index element={<DSA />} />
          <Route path=":id" element={<Page />} />
        </Route>
        <Route path="/articles" element={<Articles />} />
      </Route>
    </Routes>
  );
}
