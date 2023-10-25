import { Routes, Route } from 'react-router-dom'
import PrimaryLayout from './layouts/PrimaryLayout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import DashLayout from './layouts/DashLayout'
import Missing from './pages/Missing'
import './App.css'
import { Toaster } from 'react-hot-toast'
// import PersistLogin from './auth/PersistLogin'
// import RequireAuth from './auth/RequireAuth'
// import { ROLES } from './config/roles'
import Loader from './components/loader'
import useTitle from './hooks/useTitle';
import SignUp from './pages/SignUp'


function App() {
  useTitle('Expense Tracker')

  return (
    <>
      <Toaster position='top-center' toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<PrimaryLayout />}>
          <Route index element={<Landing />} />
          <Route path='signup' element={<SignUp />} />
          {/* Protected Routes */}
          {/* <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}> */}
              <Route path='userdashboard' element={<DashLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
            {/* </Route>
          </Route> */}
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
