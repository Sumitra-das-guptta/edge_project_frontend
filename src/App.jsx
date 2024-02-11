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
const Home = React.lazy(() => import('./Components/Home'));
const About = React.lazy(() => import('./Components/About'));
const Navbar = React.lazy(() => import('./Components/Navbar'));
const Footer = React.lazy(() => import('./Components/Common/Footer'));
const UnderMaintenance = React.lazy(() => import('./Components/Common/UnderMaintenance'));

const App = () => {


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

              <Route path="/register" name="Home"
                element={
                  <RegistrationForm />

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
