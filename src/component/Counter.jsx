import React from 'react';
function Counter() {
    const [count, countSet] = React.useState(1);

    function incrementFunc() {
        countSet(count + 1);
    }
    function decrementFunc() {
        countSet(count - 1);
    }

    return (<div className="counterComponent">
        <h1>Count: {count}</h1>
        <div className="inputsection">
            <button onClick={decrementFunc}>Decrease</button>
            <button onClick={incrementFunc}>Increase</button>
        </div>
    </div>)
}


export { Counter };