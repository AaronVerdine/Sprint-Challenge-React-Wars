import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import CharacterCard from './components/CharacterCard';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState([])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
  .then(res => {
    console.log(res.data.results)
    setData(res.data.results)
  }) 
  .catch(err => {

  })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="data-cards">
      {data.map(data => 
      <CharacterCard name={data.name}  
                                  gender={data.gender}

                                  />
                                   )}
      </div>
      
      
    </div>
  );
}

export default App;
