import React from "react";


const SpecialButton = (props) => {
  console.log(props.currentChar)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <button className='button-style'>
          {props.currentChar}
      </button>
    </>
  );
};

export default SpecialButton
