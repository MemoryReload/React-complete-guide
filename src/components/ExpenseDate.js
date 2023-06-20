import React from 'react';
import './ExpenseDate.css'

export default function ExpenseDate({ date }) {
    const lang = getLang();
    const year = date.toLocaleString(lang, { "year": "numeric" });
    const month = date.toLocaleString(lang, { "month": "2-digit" });
    const day = date.toLocaleString(lang, { "day": "2-digit" });
    return (
        <div className='expense-date'>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

function getLang() {
    if (navigator.languages !== undefined)
        return navigator.languages[0];
    return navigator.language;
}