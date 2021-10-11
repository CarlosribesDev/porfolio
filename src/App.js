

import './App.css';
import Header from './components/LandingPage/Header/header'
import Main from './components/LandingPage/Main/main';
import About from './components/LandingPage/About/about'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
      <div className='app'>
          <BrowserRouter >
                    <Header/>
                    <Main/>
                    <About/>
         </BrowserRouter>
      </div>
     
   
  );
}

export default App;

