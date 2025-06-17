import React from 'react';

let renderCounter = 0;

interface IButtonProps {
    onMinus: () => void;
    onPlus: () => void;
}

export default React.memo(function Buttons({ onMinus, onPlus }: IButtonProps) {
    console.warn(`🔴 buttons rendered ${++renderCounter} times`);

    return (
        <>
            <button className="minus" onClick={onMinus}>- Минус</button>
            <button className="plus" onClick={onPlus}>Плюс +</button>
        </>
    )
});
