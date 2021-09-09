import React from 'react';
import './Newexpences.css';
import ExpenceForm from './ExpenceForm'

const Newexpences = (props) => {

   
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
          ...enteredExpenseData,
          id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
      };
    

    return (
        <div className="newexpences">

    <ExpenceForm onsaveinputdata={saveExpenseDataHandler}/>
            
        </div>
    )
}

export default Newexpences
