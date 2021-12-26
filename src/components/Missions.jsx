import React from 'react';
import Title from './Title';
import Mission from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        teste requisito 7
        <Title headLine="Missões" />
        {Mission.map((missao) => (
          <MissionCard missao={ missao } key={ missao.name } />
        ))}
      </div>
    );
  }
}

export default Missions;
