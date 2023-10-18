import React from 'react';
import { Route, Router } from 'react-router-dom';

import './assets/styles/App.scss';
// import history from './routing/history';
import Todo from './components/Todo';

const App = () => {
    const todoList = [
        { id: 1, text: 'Eat food', isCompleted: true },
        { id: 2, text: 'Go to sleep', isCompleted: false }
    ]
    return (
        // <Router history={history}>
        //     <Switch>
        //         <Route exact path="/" component={Todo}>
        //         </Route>
        //     </Switch>
        // </Router>

        todoList.map((x) => {
            return <Todo todo={x} />
        })

    )
}

export default App;