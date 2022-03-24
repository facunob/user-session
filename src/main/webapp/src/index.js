import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AuthProvider} from "./config/AuthProvider";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from "./config/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
            <GlobalStyles />
            <Routes>
                <Route path="/*" element={<App />} />
            </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
