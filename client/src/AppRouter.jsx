import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import RedirectPage from "./pages/RedirectPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage page="home" />} />
      <Route path="/:hash" element={<RedirectPage page="redirect" />} />
    </Routes>
  );
}

export default AppRouter;
