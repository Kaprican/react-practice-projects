import {Result} from './Result';
import {Game} from './Game';
import {useEffect, useState} from "react";
import {getQuestions} from "../api/api";
import {Loader} from "./Loader";

export function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);

    useEffect(() => {
        getQuestions().then((result) => {
            setQuestions(result);
        })
    }, []);

    const renderMarkup = () => {
        if (questions.length === 0) {
            return <Loader/>
        }
        if (questions.length === step) {
            return <Result questionsAmount={questions.length} correctAnswer={correct}/>
        }
        return <Game questions={questions} step={step} setStep={setStep} setCorrect={setCorrect}/>

    }

    return (
        <div className="App">
            {renderMarkup()}
        </div>
    )
}
