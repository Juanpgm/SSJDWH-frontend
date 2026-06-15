import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./app/providers/auth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import LoginPage from "./features/auth/LoginPage";
import DashboardPage from "./features/dashboard/DashboardPage";
import TablesPage from "./features/tables/TablesPage";
import QueryBuilderPage from "./features/query-builder/QueryBuilderPage";
import SettingsPage from "./features/settings/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<DashboardPage />} />
              <Route path="tables" element={<TablesPage />} />
              <Route path="query" element={<QueryBuilderPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
