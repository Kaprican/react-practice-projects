import React from "react";
import { Link } from 'react-router-dom';

export function Home() {

    return (
        <div className="App">
            <Link to="/counter" className="open-modal-btn">⏰ Counter</Link>
            <Link to="/modal" className="open-modal-btn">✨ Модальное окно</Link>
            {/*<Link to="/quiz" className="open-modal-btn">Quiz</Link>*/}
        </div>
    );
}
