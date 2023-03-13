import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OpenPage from './Components/OpenPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Offers from './Components/Offers';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<OpenPage/>}/>
        <Route exact path="/offers" element={<Offers/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
