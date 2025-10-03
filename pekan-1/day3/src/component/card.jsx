import React from 'react';

const Card = (props) => {
  const cardStyle = {
    border: '1px solid #ccc',    
    borderRadius: '8px',          
    padding: '16px',              
    margin: '16px',               
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',    
    maxWidth: '300px',            
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={cardStyle}>
      {props.children}
    </div>
  );
};

export default Card;