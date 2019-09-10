import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton'
//Import your array data to from the provided data file
import { operators1 , operators2} from "../../../data";
const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operator1 , setOperator1] = useState(operators1)
  const [operator2 , setOperator2] = useState(operators2)
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div>
       {operator1.map(op => <OperatorButton key={op.char} currentVal={op}/>)}
       </div>  
       <div>
       {operator2.map(op => <OperatorButton key={op.char} currentVal={op}/>)}
       </div>  
    </div>
  );
};

export default Operators
