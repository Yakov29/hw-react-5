import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DifficultyWrapper = styled.div`
  margin: 10px 0;
  border-radius: 5px;
  font-weight: bold;
`;

const Difficulty = ({ level }) => {
  return <DifficultyWrapper level={level}>Difficulty: {level}</DifficultyWrapper>;
};

Difficulty.propTypes = {
  level: PropTypes.number.isRequired,
};

export default Difficulty;