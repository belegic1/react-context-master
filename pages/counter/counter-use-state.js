import  { useState } from 'react'

const Container = ({children}) => {
    return <div>
        {children}
    </div>
}

const AddOneButton = ({ setCounter}) => {
    return <div>
        <button onClick={()=> setCounter(v => v+1)}>Add one</button>
    </div>
}

const Counter = ({ counter }) => {
    return <div>Counter: { counter}</div>
}

const CounterUseState = () => {
    const [counter, setCounter] = useState(0)
  return (
      <div>
          <Counter counter={counter} />
          <Container>
              <AddOneButton setCounter={setCounter} />
          </Container>
    </div>
  )
}

export default CounterUseState