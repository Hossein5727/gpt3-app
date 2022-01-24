import './App.css';
import { Brand, Navbar } from './components';
import { Header } from './containers';

function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
    </div>
  );
}

export default App;
