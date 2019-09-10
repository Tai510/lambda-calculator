import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import { numbers1, numbers2 , numbers3, numbers4 } from "../../../data"
const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [number1, setNumber1] = useState(numbers1)
  const [number2, setNumber2] = useState(numbers2)
  const [number3, setNumber3] = useState(numbers3)
  const [number4, setNumber4] = useState(numbers4)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    <div className='numbers-buttons'>
       <div>
       {number1.map(num => <NumberButton key = {num} 
                                            currentNum = {num}
                                            addNumbers={props.addNumbers}/>)}
       </div>                                     
       
       <div>
       {number2.map(num => <NumberButton key = {num} 
                                            currentNum = {num}
                                            addNumbers={props.addNumbers}/>)}
       </div>                                     

       <div>
       {number3.map(num => <NumberButton key = {num} 
                                            currentNum = {num}
                                            addNumbers={props.addNumbers}/>)}
       </div>  

       <div>
          {number4.map(num => <NumberButton key = {num} 
                                            currentNum = {num}
                                            addNumbers={props.addNumbers}/>)}
        </div>                                     
                                            
    </div>  
 
    </div>
  );
};

export default Numbers;
