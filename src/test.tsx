import React, { useState } from 'react';
import { createBrowserHistory, createHashHistory } from 'history';
import { Router, Link, HashRouter, Route, useParams, useHistory } from 'react-router-dom';

const history = createBrowserHistory();
const hash = createHashHistory();
const Test = () => {
  const [name, setName] = useState('');
  return (
    <>
      <form>
        {/* <input type="text" id="name" value={name} onChange={changeHan}></input> */}
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export const IndexPage = () => {
  return <h3>Home Page</h3>;
};

export const AboutPage = () => {
  return (
    <div>
      <h3>About Page</h3>
      <ListPage />
      <HashRouter>
        <Route path="/list/:id" component={DetailPage} />
      </HashRouter>
    </div>
  );
};

const users = [
  {
    name: `Param`,
  },
  {
    name: `Vennila`,
  },
];
export const UsersPage = () => {
  return (
    <>
      <h3>User Page</h3>
      {users.map((user, index) => (
        <h5 key={index}>
          <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
        </h5>
      ))}
    </>
  );
};

export const UserPage = ({ match, location }) => {
    let history = useHistory()
  return (
    <>
      <p>
        <strong>Match Props:</strong>
        <code>{JSON.stringify(match, null, 2)}</code>
      </p>
      <p>
        <strong>Location Props:</strong>
        <code>{JSON.stringify(location, null, 2)}</code>
      </p>
      <button type="button" onClick={() => history.goBack()}>Back</button>
    </>
  );
};
export const ListPage = () => {
  return (
    <HashRouter>
      <ul>
        <li>
          <Link to="/list/1">1</Link>
        </li>
        <li>
          <Link to="/list/2">2</Link>
        </li>
      </ul>
      <switch>{/* <Route path="/:id" children={<DetailPage />} /> */}</switch>
    </HashRouter>
  );
};

export const DetailPage = () => {
  let { id } = useParams();
  return (
    <div>
      <p>this is detail for {id}</p>
      <button>Back</button>
    </div>
  );
};
