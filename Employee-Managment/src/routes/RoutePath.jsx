import { Routes, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { useUser } from "../lib/context/user";

export default function RoutePath() {
  const user = useUser();
    console.log(user)
  return (
    <Routes>
       <Route path="/login" element={<Login />} />
      <Route path="/" user={user} element={<AuthRoute user={user}><Home/></AuthRoute>}/>
      </Routes>
  );
}
