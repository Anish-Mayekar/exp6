import React from 'react';
import { useLocation } from 'react-router-dom';

function Navigat() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const inputData = query.get('inputData');

  return (
    <div>
      <h2>Component 2</h2>
      <p>Input data from Component 1: {inputData}</p>
    </div>
  );
}

export default Navigat;
