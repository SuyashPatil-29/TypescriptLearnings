import { ChangeEvent, ReactElement, createContext,useCallback, useReducer } from "react";

type stateType = {
    count : number,
    text : string
}

type childrenType = {
    children?: ReactElement | undefined
}

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

const reducer = (state: stateType , action :ReducerAction) :stateType =>{
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

const useCounterContext = (initialState :stateType) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const {count} = state

    
    const increment = ()=> dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const decrement = ()=> dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    const handleTextInput = (e :ChangeEvent<HTMLInputElement>)=>{dispatch(
        {
            type: REDUCER_ACTION_TYPE.NEW_INPUT,
            payload: e.target.value
        })}

        return { state, increment, decrement, handleTextInput}
}

type UseCounterCoxtextType = ReturnType<typeof useCounterContext>

const initialContextState: UseCounterCoxtextType = {
    state : initialState,
    increment: ()=> +1,
    decrement: ()=> -1,
    handleTextInput: (e: ChangeEvent<HTMLInputElement>) => ""
}


export const CounterContext = createContext<UseCounterCoxtextType>(initialContextState)

export const CounterProvider = ({
    children, ...initialState
} :childrenType & stateType) :ReactElement => {
    return (
        <CounterContext.Provider value={useCounterContext(initialState)}>
            {children}
        </CounterContext.Provider>
    )
}