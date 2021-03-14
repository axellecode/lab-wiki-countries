
import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <aside>
        <CountriesList />
      </aside>
      <main>
        <Route path="/:cca3" component={CountryDetails}/>      
      </main>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
