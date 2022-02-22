import { useState, createContext , useContext} from 'react';


const CounterContext = createContext(null)
const CounterContextProvider = ({ children }) => (
  <CounterContext.Provider value={useState(0)}>
    {children}
  </CounterContext.Provider>
)

const Container = () => {
  return (
    <div>
      <AddOneButton  />
    </div>
  );
};

const AddOneButton = () => {
  const [,setCounter] = useContext(CounterContext)

  return (
    <div>
      <button onClick={() => setCounter((v) => v + 1)}>Add one</button>
    </div>
  );
};

const Counter = () => {
  const [counter] = useContext(CounterContext)
  return <div>Counter: {counter}</div>;
};

const CounterUseState = () => {
  return (
    <CounterContextProvider>
      <Counter />
      <Container  />
    </CounterContextProvider>
  );
};

const  CounterUseStatePage = () =>  {
  return <div>
    <CounterUseState />
    <CounterUseState />
    <CounterUseState />
    <CounterUseState />
  </div>
}

export default CounterUseStatePage