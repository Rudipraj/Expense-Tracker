import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm =  (props) =>  {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }
   
   const submitHandler = (event) => {
        event.preventDefault();
        
        const newExpenseData ={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
            props.onSaveExpenseData(newExpenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
    };

    return(
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">

                        <label className="label">Title</label>
                        <input type="text" className="new-inputlabel" value={enteredTitle} onChange={titleChangeHandler}/>

                    </div>
                    <div className="new-expense__control">
                        <label className="label">Amount</label>
                        <input type="number" min="0.01" step="0.01" className="new-inputlabelamt" value={enteredAmount}  onChange={amountChangeHandler}/>

                    </div>
                    <div className="new-expense__control">
                        <label className="label">Date</label>
                        <input type="date" className="new-inputlabeldate" value={enteredDate} onChange={dateChangeHandler} />
                        

                    </div>
                </div>
                <div className="new-expense-actions">
                    <button type="submit" className="form-button">Add Expense</button>

                </div>

            </form>

        </>
    )
}
export default ExpenseForm;