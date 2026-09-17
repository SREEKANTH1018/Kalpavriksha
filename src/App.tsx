import { BrowserRouter, Route, Routes } from "react-router-dom";

import { LanguageProvider } from "./context/LanguageContext";

import DashboardLayout from "./layouts/DashboardLayout";
import ModuleLayout from "./layouts/ModuleLayout";

import Dashboard from "./pages/Dashboard";
import LMS from "./pages/LMS";
import StudentDevelopment from "./pages/StudentDevelopment";

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>

        <Routes>

          {/* =================================================
              MAIN DASHBOARD
          ================================================= */}
          <Route
            path="/"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          {/* =================================================
              LMS
          ================================================= */}
          <Route
            path="/lms"
            element={
              <ModuleLayout>
                <LMS />
              </ModuleLayout>
            }
          />

          {/* =================================================
              STUDENT DEVELOPMENT
          ================================================= */}
          <Route
            path="/development"
            element={
              <ModuleLayout>
                <StudentDevelopment />
              </ModuleLayout>
            }
          />

        </Routes>

      </LanguageProvider>
    </BrowserRouter>
  );
}