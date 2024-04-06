import './App.css';
import Accordion from './components/Accordion';
import Modal from './components/Modal';
import AnalogClock from './UIQuestions/AnalogClock';
import CountryCapital from './UIQuestions/CountryCapital';
import CursorMove from './UIQuestions/CursorMovement';
import Toast from './UIQuestions/GlobalToast';
import Navbar from './UIQuestions/Navbar/Index';
import PriceCalculator from './UIQuestions/PriceCalculator';
import Stepper from './UIQuestions/Stepper';

function App() {
  return (
    <div className="App">
        {/* <Accordion /> */}
        {/* <Modal /> */}


        {/* UI Questions */}
        {/* <CountryCapital /> */}
        {/* <CursorMove/> */}
        {/* <PriceCalculator /> */}
        {/* <Toast /> */}
        {/* <Stepper /> */}
        {/* <AnalogClock /> */}
        <Navbar />
    </div>
  );
}

export default App;
