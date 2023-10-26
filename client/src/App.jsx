import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import PrimaryLayout from "./layouts/PrimaryLayout";
const Missing = lazy(()=>import ("./pages/Missing"));
const Budget = lazy(()=>import ("./pages/Budget"))
const Profile = lazy(()=>import ("./pages/Profile"));
const Card = lazy(()=>import ("./pages/Card"));
import "./App.css";
import { Toaster } from "react-hot-toast";
import Loader from './components/loader';
// import PersistLogin from './auth/PersistLogin'
// import RequireAuth from './auth/RequireAuth'
// import { ROLES } from './config/roles'
import useTitle from "./hooks/useTitle";
const SignUp = lazy(()=> import ( "./pages/SignUp"));
import Statistics from './pages/Statistics'
const Landing = lazy(() => import('./pages/Landing'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DashLayout = lazy(() => import('./layouts/DashLayout'));


function App() {
  useTitle("Expense Tracker");

  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Suspense fallback={<Loader />}><Landing /></Suspense>} />
          <Route path="signup" element={<Suspense fallback={<Loader />}><SignUp /></Suspense>} />
          {/* Protected Routes */}
          {/* <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}> */}
          <Route element={<Suspense fallback={<Loader />}><DashLayout /></Suspense>}>
            <Route path='userdashboard' element={<Suspense fallback={<Loader />}><Dashboard /></Suspense>} />
            <Route path="statistics" element={<Suspense fallback={<Loader />}><Statistics /></Suspense>} />
            <Route path="budget" element={<Suspense fallback={<Loader />}><Budget /></Suspense>} />
            <Route path="profile" element={<Suspense fallback={<Loader />}><Profile /></Suspense>} />
            <Route path="card" element={<Suspense fallback={<Loader />}><Card /></Suspense>} />
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
