import React, { useState } from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {

   
   
    return(
        <Card className="expense-item">
           <ExpenseDate date={props.date} />
            <div className="expense-description">
                <h4 className="title">{props.title}</h4>
                <div className="expense-price">$ {props.amount}</div>
            </div>
            
        </Card>
    )
}
export default ExpenseItem;