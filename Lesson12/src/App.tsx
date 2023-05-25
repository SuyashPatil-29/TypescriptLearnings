import Counter from './components/Counter'
import Heading from './components/Heading'
import { List } from './components/List'
import Section from './components/Section'

const App = () => {
  return (
    <div>
      <Heading title='Hello World'/>
      <Section title="SubHeading 1">This is my <section></section></Section>
      <Counter />
      <List items = {["☕Coffee", "☕Tea", "☕Milk"]} render={(item:string)=><span className='bold'>{item}</span>} />
    </div>
  )
}

export default App

