import React from "react";

const NumberButton = (props) => {

  return (
    <button className='button-style' onClick={ () => props.addNumbers(props.currentNum)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      { props.currentNum }
    </button>
  );
};

export default NumberButton