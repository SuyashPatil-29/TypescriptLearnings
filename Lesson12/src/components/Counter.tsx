import {useState} from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () =>{
        setCounter(counter+1)
    }

    const decrementCounter = () =>{
        setCounter(counter-1)
    }

  return (
    <div>
        <h1>Count is {counter}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
    </div>
  )
}

export default Counter