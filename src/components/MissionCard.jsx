import React from 'react';

class MissionCard extends React.Component {
  render() {
    const { missao } = this.props;
    const { name } = missao;
    const { year } = missao;
    const { country } = missao;
    const { destination } = missao;
    return (
      <div data-testid="mission-card">
        teste requisito 9
        <p data-testid="mission-name">{name}</p>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>
    );
  }
}

export default MissionCard;
