import { Route, Routes } from "react-router-dom";
import { Home, Layout, Blog } from "./pages/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blog />} />
      </Route>
    </Routes>
  );
}
