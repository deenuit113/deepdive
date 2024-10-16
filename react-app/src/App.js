import React from "react";
import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

export const App = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [id, setId] = useState('');
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState(0);
    const [expenses, setExpenses] = useState([
        {id: 1, charge: "렌트비", amount: 1600},
        {id: 2, charge: "교통비", amount: 400},
        {id: 3, charge: "식비", amount: 1200},
    ]);

    const handleEdit = (id) => {
        setIsEditing(true);
        setId(id);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(charge !== "" && amount > 0) {
            const newExpense = {id: crypto.randomUUID, charge, amount};
            setExpenses([...expenses, newExpense]);
            setCharge('');
            setAmount(0);
        } else console.error("error");
    }

    const handleCharge = (e) => {
        setCharge(e.target.value);
    }

    const handleAmount = (e) => {
        setAmount(Number(e.target.value));
    }

    const handleDelete = (id) => {
        const newExpenses = expenses.filter(expense => expense.id !== id);
        setExpenses(newExpenses);
    }

    return (
        <main>
            <h1>예산 계산기</h1>
            <div style={{
                width: '100%',
                backgroundColor: 'white',
                padding: '1rem',
            }}>
                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleCharge={handleCharge}
                    handleAmount={handleAmount}
                    handleSubmit={handleSubmit}
                />
            </div>
            <div style={{
                width: '100%',
                backgroundColor: 'white',
                padding: '1rem',
            }}>
                <ExpenseList
                    initialExpenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            </div>
            <div>
                <p>
                    총지출:
                    <span>
                        {expenses.reduce((acc, cur)=>{
                            return (acc += cur.amount)
                        },0)}
                        원
                    </span>
                </p>
            </div>
        </main>
    )
}

export default App;