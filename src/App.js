import Expenses from "./components/Expenses/Expenses";
import expenses from "./components/Expenses/ExpensesData";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const addExpenseHandler = (expense) => {
        console.log("in App.js");
        console.log(expense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses expenses={expenses}/>
        </div>
    );
}

export default App;
