import { Routes, Route } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import DashLayout from "./layouts/DashLayout";
import Missing from "./pages/Missing";
import Budget from "./pages/Budget";
import Profile from "./pages/Profile";
import "./App.css";
import { Toaster } from "react-hot-toast";
// import PersistLogin from './auth/PersistLogin'
// import RequireAuth from './auth/RequireAuth'
// import { ROLES } from './config/roles'
import useTitle from "./hooks/useTitle";
import SignUp from "./pages/SignUp";
import Card from "./pages/Card";

function App() {
  useTitle("Expense Tracker");

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Landing />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="budget" element={<Budget />} />
          <Route path="profile" element={<Profile />} />
          <Route path="card" element={<Card />} />
          {/* Protected Routes */}
          {/* <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}> */}
          <Route path="userdashboard" element={<DashLayout />}>
            <Route index element={<Dashboard />} />
          </Route>
          {/* </Route>
          </Route> */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
