import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import Card from "./Card";

export default function ExpenseItem({ date, amount, desc }) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{desc}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </Card>
    );
}