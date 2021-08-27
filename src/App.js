import Expenses from "./components/Expenses/Expenses";
import  expensesData from "./components/Expenses/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
     const [expenses, setExpenses] = useState(expensesData)

    const addExpenseHandler = (expense) => {
         setExpenses(prevExpenses => {
             return [expense, ...prevExpenses];
         })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
