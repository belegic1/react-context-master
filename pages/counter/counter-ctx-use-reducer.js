import { useReducer, createContext, useContext } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "add":
            return state + 1
        case "subtract":
            return state - 1
        default:
            return state
    }
}
const CounterContext = createContext(null)
const CounterContextProvider = ({ children }) => (
    <CounterContext.Provider value={useReducer(reducer, 0)}>
        {children}
    </CounterContext.Provider>
)

const Container = () => {
    return (
        <div>
            <AddOneButton />
            <SubstarctButton />
        </div>
    );
};
const SubstarctButton = () => {
    const [, dispatch] = useContext(CounterContext)
    
    return <div><button onClick={()=> dispatch({type: "subtract"})} >Subtract</button></div>
}

const AddOneButton = () => {
    const [, dispatch] = useContext(CounterContext)

    return (
        <div>
            <button onClick={() => dispatch(
                {type: "add"}
            )}>Add one</button>
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
            <Container />
        </CounterContextProvider>
    );
};

const CounterUseStatePage = () => {
    return <div>
        <CounterUseState />
        <CounterUseState />
        <CounterUseState />
        <CounterUseState />
    </div>
}

export default CounterUseStatePage