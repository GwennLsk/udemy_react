import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {

    const [expanded, setExpanded] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        props.onAddExpense(expenseData);
    }

    const newExpenseClickHandler = () => {
      setExpanded(!expanded)
    }

    if (!expanded) {
        return (
            <div className="new-expense">
                <button type="button" onClick={newExpenseClickHandler}>
                    Add New Expense
                </button>
            </div>
        )
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={newExpenseClickHandler}/>
        </div>
    )
}

export default NewExpense;
