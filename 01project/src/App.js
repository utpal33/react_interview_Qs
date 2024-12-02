import logo from './logo.svg';
import './App.css';
import Accordian from './components/Accordian';
import ColorGenerator from './components/ColorGenerator';
import StarRating from './components/StarRating';
import ImageSlider from './components/ImageSlider';

function App() {
  return (
    <div className="App">
      <Accordian />
      <ColorGenerator />
      <StarRating />
      <ImageSlider />
    </div>
  );
}

export default App;
