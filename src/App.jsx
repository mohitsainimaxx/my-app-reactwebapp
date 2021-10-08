import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './Header.jsx';
import Router from './Router';
import Loader from "react-loader-spinner";
class App extends React.Component{

  
  componentDidMount(){
  }

  componentWillUnmount() {
  }

  render(){ 
    return (<>
  <Header/>
 
  <Router />
    </>
    );
  }

}

export default App;
