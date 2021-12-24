import React from 'react';
import Header from './Header';
import SolarSystem from './components/SolarSystem';
// import PlanetCard from './components/PlanetCard';
// import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    // return (<p>Sistema Solar</p>);
    return (
      <spam>
        <Header />
        <SolarSystem />
        {/* <section data-testid="planet-name">
          <PlanetCard />
        </section> */}
      </spam>
    );
  }
}

export default App;
