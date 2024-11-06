import { Route, Routes } from "react-router-dom";
import { Home, Layout } from "./pages/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
