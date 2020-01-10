import  React, {Component } from "react";
import Clarifai from 'clarifai'
import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/Logo/logo-component";
import "./App.css";
import ImageForm from "./components/ImageFrom/ImageForm.component";
import Rank from "./components/Rank/rank.component";


const app = new Clarifai.App({
  apiKey: '5480d8bb32fd431193e2b80f7634f0b1'
 });


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }
 onInputChange=(event)=>{
    console.log(event.target.value)
 }
 onButtonClick=()=>{
   console.log('click')
   app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
    function(response) {
      // do something with response
      console.log('working')
    },
    function(err) {
      // there was an error
      console.log(err)
    }
  );
 }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm onInputChange={this.onInputChange} onButtonClick={this.onButtonClick} />
      </div>
    );
  }
}

export default App;
