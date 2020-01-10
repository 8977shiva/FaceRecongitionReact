import React, { Component } from "react";
import Clarifai from "clarifai";
import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/Logo/logo-component";
import "./App.css";
import ImageForm from "./components/ImageFrom/ImageForm.component";
import Rank from "./components/Rank/rank.component";
import ImageBox from "./components/imagebox/imageBox.component";

const app = new Clarifai.App({
  apiKey: "5480d8bb32fd431193e2b80f7634f0b1"
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      box:{}
    };
  }
  

  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const  image=document.getElementById("inimage");
    const width=Number(image.width);
    const height=Number(image.height);
    // console.log(clarifaiFace.dottom_row,image.height)
    return{
      leftCol:clarifaiFace.left_col*width,
      topRow:clarifaiFace.top_row*height,
      rightRow:width-(clarifaiFace.right_col*width),
      dottomRow:height-(clarifaiFace.bottom_row*height)
    
    
    }
    // console.log(clarifaiFace)

  }
  displayBox=(box)=>{
    this.setState({box:box});
    console.log(box)
  }
  onInputChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  onButtonClick = () => {
    this.setState({
      imageUrl: this.state.input
    });
    console.log("click");
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(respone=>this.displayBox(this.calculateFaceLocation(respone)))
    .catch(err=>console.log(err))
    
     
  };

  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <Rank />
        <ImageForm
          onInputChange={this.onInputChange}
          onButtonClick={this.onButtonClick}
        />
        <ImageBox box={this.state.box} imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
