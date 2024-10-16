import ExpenseItem from "./ExpenseItem"

export const ExpenseList = ({ initialExpenses, handleDelete, handleEdit }) => {
    return (
        <>
            <ul>
                {
                    initialExpenses.map((expense) => (
                        <ExpenseItem 
                            expense={expense}
                            key={expense.id}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit} edit
                        />
                    ))
                }
            </ul>
            <button>목록지우기</button>
        </>

    )
}

export default ExpenseList;