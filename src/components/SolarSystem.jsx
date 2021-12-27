import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map((planet) => (
          // <PlanetCard planet={ planet } key={ (planet.name) } />
          <PlanetCard
            planetName={ planet.name }
            key={ planet.name }
            planetImage={ planet.image }
          />

        ))}
      </div>
    );
  }
}
console.log(Planets);
export default SolarSystem;
