import { HashRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Layout from "layout/Layout";

import 'styles/style.scss'

function App() {
    return (
        <Router>
            <Switch>
                <Routes>
                    <Route path='/' element={<Layout />}></Route>
                </Routes>
            </Switch>
        </Router>
    );
}

export default App;
