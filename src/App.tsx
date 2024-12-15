// import { Route, Routes } from "react-router-dom";

// import AuthPage from "./pages/auth/auth";
// import GoogleOAuthSuccessRedirect from "./pages/google-oauth-success-redirect/google-oauth-success-redirect";
// import HomePage from "./pages/home/HomePage";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />} />

//       <Route path="/auth" element={<AuthPage />} />
//       <Route
//         path="auth/google-oauth-success-redirect"
//         element={<GoogleOAuthSuccessRedirect />}
//       />
//     </Routes>
//   );
// }

// export default App;

import { Route, Routes, Navigate } from "react-router-dom";

import AuthPage from "./pages/auth/auth";
import GoogleOAuthSuccessRedirect from "./pages/google-oauth-success-redirect/google-oauth-success-redirect";
import HomePage from "./pages/home/HomePage";
import { useAuthState } from "./pages/auth/state/state";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProfilePage from "./pages/rofile/ProfilePage";

// Protected Route component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthState(); // Accessing user state from Zustand

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route
        path="auth/google-oauth-success-redirect"
        element={<GoogleOAuthSuccessRedirect />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
