import { Component } from "react"
import ExpenseItem from "./ExpenseItem"

export default class ExpenseList extends Component {
    render() {
        return (
            <>
                <ul>
                    <ExpenseItem/>
                </ul>
                <button>목록지우기</button>
            </>

        )
    }
}