import React, { useState } from 'react'
import styles from "./Counter.module.scss"

function Counter() {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        if(count>0){
        setCount(prevCount => prevCount - 1);
        }
    };

    return (
        <>
            <button className={styles.buttonDecrease} onClick={decrement}>-</button>
            <button className={styles.buttonCounterValue}>{count}</button>
            <button className={styles.buttonIncrease} onClick={increment}>+</button>
        </>
    )
}

export default Counter