import React, { useState } from 'react'

import './App.css'
import {
  // BrowserRouter as Router, 
  HashRouter, Routes, Route, Navigate
} from "react-router-dom";





// import LoaderDBL from './Components/Common/LoaderDBL';

// const loading = (
//   <LoaderDBL />
// );


const RegistrationForm = React.lazy(() => import('./Components/RegistrationForm'));
const RegistrationFormStep1 = React.lazy(() => import('./Components/RegistrationFormStep1'));

const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const Footer = React.lazy(() => import('./Components/Common/Footer'));
const UnderMaintenance = React.lazy(() => import('./Components/Common/UnderMaintenance'));
const Login = React.lazy(() => import('./Components/Login'));
const LoginVerification = React.lazy(() => import('./Components/LoginVerification'));
const App = () => {
  const localStorageData = localStorage?.userInfo ? JSON.parse(localStorage.getItem('userInfo')) : '';
  const [userPrivilege, setUserPrivilege] = useState(localStorageData?.privilege ? localStorageData?.privilege : '');

  return (
    <HashRouter>
      <React.Suspense>
        <div>

          <div

            style={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Navbar />
            <Routes>

              {/* LOG IN */}
              <Route path="/login" element={<Login />} />
              <Route path="/loginVerification" element={<LoginVerification setUserPrivilege={setUserPrivilege} />} />
              {/* <Route path="/register" name="register"
                element={

                  
                }
              /> */}
              {/* <Route exact path="/about" name="Page 500" element={<UnderMaintenance />} /> */}
              <Route exact path="/about" name="about" element={<About />} />

              <Route path="/" name="Home"
                element={
                  <Home />

                }
              />

              {localStorageData &&
                (
                  <>
                    <Route path="/register/2" name="Register"
                      element={
                        <RegistrationForm />
                      }
                    />
                    <Route path="/register/1" name="Register"
                      element={
                        <RegistrationFormStep1 />
                      }
                    />
                  </>
                )
              }


              {/* ROUTES REDIRECTION TO LOGGED IN USER DASHBOARD */}
              <Route path="/*"
                element={
                  <Navigate to='/' />
                }
              />

            </Routes>
            <Footer />
          </div>
        </div>
      </React.Suspense>

    </HashRouter>
  )
}

export default App;
