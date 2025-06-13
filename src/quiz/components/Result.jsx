export function Result({questionsAmount, correctAnswer}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="congrats!"/>
            <h2>{`Вы отгадали ${correctAnswer} ответа из ${questionsAmount}`}</h2>
            <button onClick={() => window.location.reload()}>Попробовать снова</button>
        </div>
    );
}
