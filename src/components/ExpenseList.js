import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

import "./ExpenseList.css"

export default function ExpneseList({ expenses }) {
    return (
        <Card className='expenses'>
            <ExpenseItem date={expenses[0].date} desc={expenses[0].title} amount={expenses[0].amount} />
            <ExpenseItem date={expenses[1].date} desc={expenses[1].title} amount={expenses[1].amount} />
            <ExpenseItem date={expenses[2].date} desc={expenses[2].title} amount={expenses[2].amount} />
        </Card>
    );
}