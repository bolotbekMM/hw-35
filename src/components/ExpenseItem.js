import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expenseAmount = props.amount;

    return (
        <div className='expense-item'>
            <ExpenseDate date = {expenseDate}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>KGS {expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;