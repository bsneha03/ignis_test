import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './navbar';
import Login from './login';
import Register from './register';
import EventList from './eventlist';
import EventForm from './eventform';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={EventList} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/events/new" component={EventForm} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
