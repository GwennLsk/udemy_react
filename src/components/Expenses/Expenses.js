import {useState} from "react";

import "./Expenses.css"

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2021");

    const yearSelectHandler = (year) => {
        setFilteredYear(year);
    }

    const expensesFiltered = props.expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear)


    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onYearSelect={yearSelectHandler}/>
            <ExpensesList items={expensesFiltered} />
        </Card>
    )
}

export default Expenses;
