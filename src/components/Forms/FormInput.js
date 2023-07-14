import {useState} from 'react';

const FormInput = (props) => {
  const[saving, setSaving] = useState('');
  const[contribution, setContribution] = useState('');
  const[yearlyReturn, setYearlyReturn] = useState('');
  const[druation, setDuration] = useState('');
  const[error, setError] = useState(false);

  const savingInputHandler = (event) => {
    setSaving(event.target.value);
  }
  const contributionInputHandler = (event) => {
    setContribution(event.target.value);
  }
  const yearlyReturnInputHandler = (event) => {
    setYearlyReturn(event.target.value);
  }
  const druationInputHandler = (event) => {
    setDuration(event.target.value);
  }
  const calculateHandler = (userInput) => {
    userInput.preventDefault();
    const yearlyData = [];
    
    let currentSavings = +saving;
    const yearlyContribution = +contribution;
    const expectedReturn = +yearlyReturn / 100;
    const duration = +druation;
    if(saving === '' || contribution === '' ||  yearlyReturn === '' || duration === '') {
      setError(true);
      return;
    }
    setError(false);
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    props.onSubmitCalculator(yearlyData);
  };
  return(
    <form className={`form ${error ? 'invalid' : ''}`} onSubmit={calculateHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" onChange={savingInputHandler} id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" onChange={contributionInputHandler} id="yearly-contribution" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" onChange={yearlyReturnInputHandler} id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" onChange={druationInputHandler} id="duration" />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
      {error ? <p className='error-message'>Please fill all the fields.</p> : ''}
    </form>
  );
}

export default FormInput;