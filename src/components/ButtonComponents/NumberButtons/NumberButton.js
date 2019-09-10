import React from "react";

const NumberButton = (props) => {
  const {buttonContent} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{buttonContent}</button>
    </>
  );
};

export default NumberButton;