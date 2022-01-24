import './App.css';
import { Navbar } from './components';
import { Header } from './containers';

function App() {
  return (
    <div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
