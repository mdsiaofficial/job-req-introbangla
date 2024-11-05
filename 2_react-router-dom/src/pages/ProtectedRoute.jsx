import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ auth, children }) {
  return (
    auth ? children : <Navigate to="/login" />
  );
}