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
//const Header = require("./components/header.jsx");
//const Article = require("./components/article.jsx");
  
//const header = "Рассказ";
//const article = "После одного из заседаний N-ского мирового съезда судьи собрались в совещательной комнате, чтобы снять свои мундиры, минутку отдохнуть и ехать домой обедать.";

ReactDOM.createRoot(
    document.getElementById("app")
)
.render(
    <BrowserRouter>
    <MyRoutes/>
  </BrowserRouter>
);




