import { useState } from "react"
import Counter from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import List from "./components/List"

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Heading title="Welcome"></Heading>
      <Section title="BRRRRRR Section">This is a string section</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["Coffee", "Tacos", "Code"]} render={(item:string) => <span className="gold">{item}</span>} />
    </>
  )
}

export default App
