import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import PlanetCard from './components/PlanetCard';
import Imag from './images/Venus.png';

class App extends React.Component {
  render() {
    // return (<p>Sistema Solar</p>);
    return (
      <spam>
        <Header />
        <SolarSystem />
        <PlanetCard
          planetName="Venus"
          planetImage={ Imag }
        />
      </spam>
    );
  }
}

export default App;
