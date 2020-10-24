import React from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Routes = () => {
    return (
        <div>
            <Router>
                <Route exact path='/' component={Home} />
            </Router>
        </div>
    )
}

export default Routes
