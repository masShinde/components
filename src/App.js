import './App.css';
import Accordion from './components/Accordion';
import Modal from './components/Modal';
import CountryCapital from './UIQuestions/CountryCapital';
import CursorMove from './UIQuestions/CursorMovement';
import Toast from './UIQuestions/GlobalToast';
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
        <Stepper />
    </div>
  );
}

export default App;
