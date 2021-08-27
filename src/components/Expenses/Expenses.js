import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2021");

    const yearSelectHandler = (year) => {
        setFilteredYear(year);
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onYearSelect={yearSelectHandler}/>
            {props.expenses.filter(expense => expense.date.getFullYear() == filteredYear).map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />)}
        </Card>
    )
}

export default Expenses;
