const React = require("react");
const ReactDOM = require("react-dom/client");

import { Fragment } from "react";
import { Switch, Routes, Route, Link 
} from "react-router-dom";



import MainPage from "./pages/MainPage.jsx";
import MainPage2 from "./pages/MainPage2.jsx";
import TestPage from "./pages/TestPage.jsx";

const Test3Page = () => {
  return (
    <div>новая страница</div>
  )
}

function MyRoutes(){

    return (
    <Routes>
        <Route exact path="/main2" element={<MainPage2/>}/>


        <Route exact path="/" element={<MainPage/>}/>
        <Route exact path="/test" element={<TestPage/>}/>
        <Route exact path="/test2" element={<Test3Page/>}/>
        <Route path="*" element={<NoMatch />} />
    </Routes>
    );


}


export default MyRoutes;

function About() {
    return (
    <Fragment>
    <h2>About</h2>
    </Fragment>
    );
  }


  function NoMatch() {
    return (
      <div>
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </div>
    );
}