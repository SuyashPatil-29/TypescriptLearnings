import {ReactNode, useReducer, ChangeEvent} from 'react'

const initialState= {
    count : 0,
    text : ""
}

const REDUCER_ACTION_TYPE = {
    INCREMENT : "INCREMENT",
    DECREMENT : "DECREMENT",
    NEW_INPUT : "NEW_INPUT"
}

type ReducerAction = {
    type : string,
    payload?: string
}

const reducer = (state: typeof initialState , action :ReducerAction):typeof initialState =>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state, count: state.count + 1}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return {...state, count: state.count - 1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state, text: action.payload ?? ""}
        default: 
        throw new Error()
    }
}

type ChildrenType = {
    children : (num :number) => ReactNode
}

const Counter = ({children}:ChildrenType) => {

    // const [count, setCount] = useState(initialState.count)

    const [state, dispatch] = useReducer(reducer, initialState)

    const {count} = state

    
    const increment = ()=> dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const decrement = ()=> dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const handleTextInput = (e :ChangeEvent<HTMLInputElement>)=>{dispatch(
        {
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })}

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