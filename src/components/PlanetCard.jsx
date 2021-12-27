import React from 'react';
import PropTypes from 'prop-types';

// function PlanetCard({ planetImage, planetName }) {
//   return (
//     <div data-testid="planet-card">
//       <img src={ planetImage } alt={ planetName } />
//       <p>{planetName}</p>
//     </div>
//   );
// }

// PlanetCard.propTypes = {
//   planet: PropTypes.shape({
//     planetName: PropTypes.string.isRequired,
//     planetImage: PropTypes.string.isRequired,
//   }).isRequired,
// };

// class PlanetCard extends React.Component {
//   render() {
//     const { planet } = this.props;
//     // const planetName = planet.name;
//     // const planetImage = planet.image;
//     return (
//       <div data-testid="planet-card">
//         <img src={ planet.image } alt={ planet.name } />
//         <p>{planet.name}</p>
//       </div>
//     );
//   }
// }
class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    // const planetName = planet.name;
    // const planetImage = planet.image;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  // planet: PropTypes.shape({
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
//  }).isRequired,
};

export default PlanetCard;
