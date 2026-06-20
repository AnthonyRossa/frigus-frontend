import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PageLayout from "../PageLayout/PageLayout.jsx";
import "./App.css";
import Dashboard from "../Dashboard/Dashboard.jsx";
import TempControl from "../TempControl/TempControl.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <PageLayout>
                <Dashboard />
              </PageLayout>
            </>
          }
        />
        <Route path="/temperature-control" element={<PageLayout><TempControl /></PageLayout>} />
      </Routes>
    </>
  );
}
