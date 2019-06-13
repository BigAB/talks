import React from 'react';
import styled from 'styled-components';

export const SpecialText = styled.span`
  display: inline-block;
  color: red;
  font-family: 'Permanent Marker', cursive;
  font-size: 3em;
  transform: skew(-3deg, -2deg);
  text-shadow: 5px 13px 10px black;
`;

export default () => (
  <div>
    <h3>
      Reasons
      <br /> to reach for <code>useReducer()</code>
    </h3>
    <span className="icon">👍</span>
  </div>
);
