import { createBrowserHistory } from 'history';
import React from 'react';
import { Router, Link, Route } from 'react-router-dom';
import './App.css';
import ValidatedLoginForm from './Form';
import { IndexPage, AboutPage, UsersPage, UserPage } from './test';
import { Form } from 'formik';

const history = createBrowserHistory();
function App() {
  return (
    <div className="">
      <header className="">
        {/* <ValidatedLoginForm /> */}
        {/* <Register /> */}
      </header>
      <Router history={history}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users/">Users</Link>
        <Link to="/form">Form</Link>
        <Route exact path="/" component={IndexPage} />
        <Route path="/form" component={ValidatedLoginForm} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/user/:userId" component={UserPage} />
        <Route path="/about" component={AboutPage} />
      </Router>
    </div>
  );
}

export default App;
