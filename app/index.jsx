import React from 'react';
const ReactDOM = require("react-dom/client");

 

import {
    BrowserRouter,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";

  
//import MainPage from './pages/MainPage.jsx'
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap-icons.min.css';
import 'bootswatch/dist/zephyr/bootstrap.min.css'; // Added this :boom:


import  MyRoutes from './myRoutes.jsx';

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
  <BrowserRouter>
    <MyRoutes/>
  </BrowserRouter>
);




