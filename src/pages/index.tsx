import { Route, Routes } from "react-router-dom";
import { HomePage } from "./home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
