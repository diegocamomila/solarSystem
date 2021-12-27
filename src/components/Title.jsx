import React from 'react';
import PropTypes from 'prop-types';

// function Title({ headLine }) {
//   return <h2>{headLine}</h2>;
// }

// Title.propTypes = {
//   headLine: PropTypes.string.isRequired,
// };

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <h2>{ headline }</h2>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
