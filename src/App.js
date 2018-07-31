import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron,Button,Alert } from 'reactstrap';
import Header from './Header';
import Jumbo from './Jumbo';
import Card from './Card';
import CardSpeaker from './CardSpeaker';
import Footer from './Footer';


class App extends Component {

  //render itu menghasilkan tampilan
  render() {
    return (
      <div align = "center" >
        
        <Header/> 
          <Jumbo/>
          <Card/>
        <CardSpeaker/>
        <Footer/>
      </div>
    );
  }
}

export default App;

//component bisa di panggil di component utama
//ini component, bisa dikatakan dia extends ke component


// class Footer extends Component{
//   render(){
//     return(

//       <div>
      
//       <h2>www.aej.id</h2>
//       </div>
//     )
//   }
// }