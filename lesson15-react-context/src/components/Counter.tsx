import {ReactNode, useReducer, ChangeEvent} from 'react'

type ChildrenType = {
    children : (num :number) => ReactNode
}

const Counter = ({children}:ChildrenType) => {

    // const [count, setCount] = useState(initialState.count)

  return (
    <div>
        <h1>{children(count)}</h1>
        <h2>{state.text}</h2>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <input onChange={handleTextInput}></input>
        </div>
    </div>
  )
}

export default Counter