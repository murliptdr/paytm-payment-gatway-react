import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PaytmButton } from './paytm-button/paytmButton';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/payment/:payamount" element={<PaytmButton />}/>
         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
