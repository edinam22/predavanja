import React, {useEffect, useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = () => {
        console.log(count)
        setCount(prevState => prevState + 1)
        console.log(count)
    }

    useEffect(() => {
        console.log("Something happened")
    })

    useEffect(() => {
        console.log("Something happened")

        return () => {
            console.log("Cleanup event")
        }
    }, [])

    useEffect(() => {
        console.log("Current count is ", count)
    }, [count])

    return <div>
        <div>Current count: {count}</div>
        <button onClick={() => addCount()}>Add</button>
    </div>
}

export default Counter;