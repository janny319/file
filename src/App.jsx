import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "layout/Layout";

import 'styles/style.scss'

function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}></Route>
                </Routes>
            </Router>
        </BrowserRouter>
    );
}

export default App;
