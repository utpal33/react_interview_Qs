import logo from './logo.svg';
import './App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';
import ColorInput from './components/ColorInput';
import { use, useState } from 'react';
import Counter from './components/Counter';
import HandlingLoading from './components/HandlingLoading';

function App() {
  const [currentComp, setCurrentComp] = useState(null)
  return (
    <div className="App">
      {/* <Accordian />
      <ColorGenerator />
      <StarRating /> */}
      {/* <ImageSlider /> */}
      {/* <Counter /> */}
      {/* <ColorInput /> */}
      {/* <button onClick={()=> setCurrentComp("Accordian")}>Accordian</button>
      <button onClick={()=> setCurrentComp("ColorGenerator")}>ColorGenerator</button>
      <button onClick={()=> setCurrentComp("StarRating")}>StarRating</button>
      <button onClick={()=> setCurrentComp("Accordian")}>Accordian</button>
      <button onClick={()=> setCurrentComp("Accordian")}>Accordian</button> */}
      

      <HandlingLoading />
    </div>
  );
}

export default App;
