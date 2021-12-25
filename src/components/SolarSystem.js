import React from 'react';
import Title from './Title';
// import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    // const Planets = { name, image } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />

      </div>
    );
  }
}

export default SolarSystem;
