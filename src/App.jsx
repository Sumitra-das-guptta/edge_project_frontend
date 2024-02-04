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
            <Routes>

              {/* LOG IN */}
              <Route path="/" name="Home"
                element={

                  <RegistrationForm />
                }
              />



            </Routes>

          </div>
        </div>
      </React.Suspense>

    </HashRouter>
  )
}

export default App;
