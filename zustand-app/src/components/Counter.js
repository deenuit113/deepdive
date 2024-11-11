import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter = () => {
    const { count, inc } = useCounterStore();

    return (
        <div>
            <p>
                {count}
            </p>
            <button onClick={inc}>one up</button>
        </div>
    )
}

export default Counter