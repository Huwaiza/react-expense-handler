import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    const changeTitleHandler = () => {
        setTitle("Updated Title!")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>
                    {title}
                </h2>
                <div className="expense-item__price">
                    {props.amount} pkr
                </div>
                <button onClick={changeTitleHandler}>
                    Change Title 
                </button>
            </div>
        </Card>
    );
}

export default ExpenseItem;