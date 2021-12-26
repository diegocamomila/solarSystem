import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headLine="Planetas" />
        {Planets.map((planet) => (
          <PlanetCard planet={ planet } key={ planet.name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
