import { ReactNode } from "react";

type CounterProps = {
    children : ReactNode,
    setCount : React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({setCount, children}:CounterProps) => {
    return (
        <> 
            <h1>{children}</h1>
            <button onClick={() => setCount(x => x+1)}>+</button>
            <button onClick={() => setCount(x => x-1)}>-</button>
        </>
    )
}

export default Counter;