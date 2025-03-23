import React, { useState } from 'react';

const ToggleButton = ({ initialStatus = 'Reading', onToggle }) => {
  const [status, setStatus] = useState(initialStatus);


  const toggleButton = () => {
    const newStatus = status === 'Reading' ? 'Done' : 'Reading';
    setStatus(newStatus);
    onToggle(newStatus); 
  };


  return (
    <button onClick={toggleButton} className="btn btn-primary">
      {status || 'Reading'}
    </button>
  );
};

export default ToggleButton;
