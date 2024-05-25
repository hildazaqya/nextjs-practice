'use client'

import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    function decrement() {
        if (count > 0) {
        setCount(count - 1)
        }
    }

    function increment() {
        setCount(count + 1)
    }

    return (
        <div className="flex gap-2 bg-white mt-5 p-5">
            <button onClick={decrement}>-</button>
            <span className="text-2xl">{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter