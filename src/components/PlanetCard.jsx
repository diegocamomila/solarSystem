import React from 'react';
// import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planet } = this.props;
    const planetName = planet.name;
    const planetImage = planet.image;
    return (
      <div data-testid="planet-card">
        <img src={ planetImage } alt={ planetName } />
        <p>{planetName}</p>
      </div>
    );
  }
}
// PlanetCard.proptype = {
//   name: PropTypes.shap({
//     planetName: PropTypes.string.isRequired,
//     planetImage: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default PlanetCard;
