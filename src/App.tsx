import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import { Modal } from './modal/Modal';
import React from 'react';
import { Home } from './Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home />} />
                {/*<Route path="counter" element={<Modal/>}/>*/}
                <Route path="modal" element={<Modal/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
