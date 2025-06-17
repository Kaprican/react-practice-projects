import React, { useCallback, useState } from "react";
import Buttons from './Buttons';
import './counter.scss';

export function Counter() {
    const [counter, setCounter] = useState(0);

    const onMinus = useCallback(() => setCounter((prev) => prev - 1), []);
    const onPlus = useCallback(() => setCounter((prev) => prev + 1), []);

    return (
        <div className="App">
            <div>
                <h2>Счетчик:</h2>
                <h1>{counter}</h1>
                <Buttons onMinus={onMinus} onPlus={onPlus} />
            </div>
        </div>
    );
}
