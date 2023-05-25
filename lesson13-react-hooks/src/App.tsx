import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'

interface User {
  id: string | number,
  username: string
}

const App = () => {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState<User[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  console.log(inputRef?.current)
  console.log(inputRef?.current?.value)
  
  useEffect(()=>{
    console.log("Mounting");
    console.log("Users:", users);
    

    return () => console.log("unmounting")
  },[users])

  useCallback (()=>{
    console.log("count:", count);
  },
    [count]
  )

  const addTwo = useCallback(():void=> setCount(prev => prev+2), [])

  type fibFunc = (n: number)=> number

  const fib : fibFunc = (n) =>{
    if(n<2) return n
    return fib(n-1)+ fib(n-2)
  }

  const myNum = 37

  const result = useMemo(()=> fib(myNum), [myNum])

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{addTwo()}}></button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text" />
    </div>
  )
}

export default App
