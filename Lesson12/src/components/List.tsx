import React, {ReactNode} from 'react'
import { render } from 'react-dom'

interface ListProps <T>{
    items: T[],
    render: (item: T) => ReactNode
}

export const List = <T,>({items, render}: ListProps<T>) => {
  return (
    <div>
        <ul>
            {items.map((item, index)=>(
                <li key={index}>
                    {render(item)}
                </li>
            ))}
        </ul>
    </div>
  )
}
