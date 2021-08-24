import React from 'react';
import {Route,Switch} from 'react-router-dom';
import About from './About';
import Contact from "./Contact";
import Home from './Home';
import Service from './Service';

const Router = () => {
     return (
    <>
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/home' component={Home}/>
           <Route path='/contact' component={Contact}/>
           <Route path='/about' component={About} />
           <Route path='/service' component={Service}/>
         </Switch>
    </>
);
 };

 export default Router;