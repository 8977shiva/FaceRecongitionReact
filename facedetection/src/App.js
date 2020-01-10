import React from 'react';
import Navigation from './components/navigation/navigation.component'
import Logo from './components/Logo/logo-component'
import './App.css';
import ImageForm from './components/ImageFrom/ImageForm.component';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Logo/>
     <ImageForm/>
    </div>
  );
}

export default App;
