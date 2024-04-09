import logo from './logo.svg';
import './App.css';
import DeleteBus from './components/DeleteBus';
import SearchBus from './components/SearchBus';
import AddBus from './components/AddBus';
import ViewAll from './components/ViewAll';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Navbar/>
     <SearchBus/>
     <DeleteBus/>
     <AddBus/>
     <ViewAll/>



    </div>
  );
}

export default App;
