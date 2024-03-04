import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './page/About';

function App() {
  const [searchQuery, setSearchQuery] = useState('india');


  const handleSearch = (query) => {
    setSearchQuery(query);
    // setNextPage(1); // Reset page to 1 when performing a new search
  };


        
  return (
    <Router>
      <div className="App">
      <Navbar onSearch={handleSearch} />
      <Routes>
        <Route exact path='/' element={<News searchQuery={searchQuery}  />}>
        
        </Route>
        <Route exact path='/About' element={<About/>}>
         

        </Route>
      </Routes>

      
      </div>
    </Router>

  );
}

export default App;
