import './App.css';
import { Brand, Navbar } from './components';
import { Header, WhatGPT3 } from './containers';

function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
    </div>
  );
}

export default App;
