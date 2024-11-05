import { Navigate } from "react-router-dom"

export default function Login({ auth, setAuth, children }) {
  auth ? children : <Navigate to="/login" />
  return (
    <button onClick={() => {
      setAuth(true);
    }}>
      Login
    </button>
  );
}

