
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "layout/Layout";

import 'styles/style.scss'

function App() {
    return (
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}></Route>
                </Routes>
            </Router>
    );
}

export default App;
