import React from 'react';
import HelloWord from './hooks/helloWorld';
import EffectHook from './hooks/effectHook';
import FriendHook from './hooks/selfHook';
import Container, {ContextHook} from './hooks/contextHook';

function App() {
    return (
        <div className="App">
            <HelloWord />

            <EffectHook />

            <FriendHook />

            <Container />

            <ContextHook />
        </div>
  );
}

export default App;
