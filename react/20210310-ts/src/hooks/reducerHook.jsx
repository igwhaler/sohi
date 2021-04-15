import React, { useReducer, useContext } from 'react';

// userReducer 建议和 useContext 配合使用，可以避免层层传递props(store/dispatch)

const CountContext = React.createContext(null);

const initialState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment': {
            return {
                count: state.count + 1
            };
        }

        case 'decrement': {
            return {
                count: state.count - 1
            };
        }

        default: {
            return state;
        }
    }
}



function SelfNum() {
    const {store, dispatch} = useContext(CountContext);

    return (
        <div>
            <p>{store.count}</p>
            <button onClick={() => {
                dispatch({
                    type: 'increment'
                });
            }}>+</button>
        </div>
    );
}

function ReducerHook() {
    const [store, dispatch] = useReducer(reducer, initialState);

    return (
        <CountContext.Provider
            value={{
                dispatch,
                store
            }}
        >
            <p>{store.count}</p>
            <button onClick={() => {
                dispatch({
                    type: 'increment'
                })
            }}>+</button>

            <button onClick={() => {
                dispatch({
                    type: 'decrement'
                })
            }}>-</button>

            <SelfNum />
        </CountContext.Provider>
    );
}

export default ReducerHook;
