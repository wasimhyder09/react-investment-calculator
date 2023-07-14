import { useState } from "react";

import Results from "../Results/Results";
import FormInput from "./FormInput";

const Form = () => {
  const [calcData, setCalcData] = useState();
  const calculatorSubmitHandler = (submittedData) => {
    setCalcData(prevState => ({
      ...prevState,
      ...submittedData
    }));
  }
  return(
    <div className="form-display">
      <FormInput onSubmitCalculator={calculatorSubmitHandler} />
      {calcData ? 
        <Results data={calcData} />
        : <p className="no-data">No data found yet.</p>
      }
    </div>
  );
}

export default Form;