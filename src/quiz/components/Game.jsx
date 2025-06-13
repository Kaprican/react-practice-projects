import { useState } from "react";

export function Game({questions, step, setStep, setCorrect}) {
    const question = questions[step];
    const [progress, setProgress] = useState(0);

    const nextQuestion = (selectedIndex) => {
        setCorrect((correctAmount) => selectedIndex === question.correct ? correctAmount + 1 : correctAmount);
        setStep((currentStep) => currentStep + 1);
        setProgress(Math.round((step + 1) / questions.length * 100));
    }

    return (
        <>
            <div className="progress">
                <div style={{width: `${progress}%`}} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map(
                        (variant, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => nextQuestion(index)}
                                >{variant}</li>);
                        })
                }
            </ul>
        </>
    );
}
