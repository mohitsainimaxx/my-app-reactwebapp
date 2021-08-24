import React, { useEffect, useState } from "react";
import './Card.css';
class Service extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
}
  componentDidMount(){
    const apiUrl = `https://fakestoreapi.com/products`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((repos) => {
        this.setState({
          isLoaded: true,
          items: repos
        });
      });
  }
  getProductInfo(id){
    console.log(id);
  }
  render() {
    console.log(this.state);
  return (
  <>
  <section>
      {this.state.items.map((item)=>{
     
       return( 
        <div className="cards" key={item.id}>
       <div className="cartCard">
        <div className="card-img">
            <img src={item.image}/>
        </div>
        <div className="card-heading">
       
          <h3>Rs.{item.price}</h3>
          <h3 onClick={()=>{this.getProductInfo(item.id)}}>{item.title}</h3>
        
        </div>
      </div>
      </div>
       )
      })}
      
 
  </section>
  </>
  );
}
}
export default Service;
