import React from 'react';
// import PropTypes from 'prop-types';

// const Title = (props) => (
//   <h2>{props.headline}</h2>
// );

// headline.propTypes = {} =>  headline.propTypes;

class Title extends React.Component {
  render() {
    // const { headline: { name, image } } = this.props;
    return (
      <h2>{this.props.headline}</h2>
    );
  }
}

// Title.propTypes = {
//   headline: PropTypes.string,
// };

export default Title;
