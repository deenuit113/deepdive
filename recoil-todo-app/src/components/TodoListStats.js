import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListStatsState } from '../TodoAtoms'

const TodoListStats = () => {
    const {
        totalNum, 
        totalCompletedNum, 
        totalUncompletedNum, 
        percentCompleted
    } = useRecoilValue(todoListStatsState);

    return (
        <ul>
            <li>TotalItems: {totalNum}</li>
            <li>Items Completed: {totalCompletedNum}</li>
            <li>Items not Completed: {totalUncompletedNum}</li>
            <li>Percent Completed: {Math.round(percentCompleted* 100)}</li>
        </ul>
    )
}

export default TodoListStats