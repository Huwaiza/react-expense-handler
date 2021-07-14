import './ExpenseItem.css';

function ExpenseItem() {
    const expenseDate = new Date(2021, 7, 14);
    const expenseTitle = "Car Insurance"
    const expenseAmount = 8903;

    return (
        <div className="expense-item">
            <div>
                {expenseDate.toISOString()}
            </div>
            <div className="expense-item__description">
                <h2>
                    {expenseTitle}
                </h2>
                <div className="expense-item__price">
                    {expenseAmount} pkr
                </div>
            </div>
        </div>
    );
}

export default ExpenseItem;