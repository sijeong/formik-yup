import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
// import { UserPage } from './test';

export const App2 = () => {
  return (
    <div>
      <BrowserRouter>
        <h3>Top level routes</h3>
        <ul>
          {users.map((user, index) => {
            return (
              <li key={index}>
                <Link to={`/user/${user.name}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
        <Route path="/user/:username" component={UserPage} />
      </BrowserRouter>
    </div>
  );
};

// @ts-ignore
const UserPage = ({ match }) => {
  const {
    params: { username },
  } = match;

  const user = users.find(({ name }) => name === username);

  return (
    <div>
      User Name: <strong>{user?.name}</strong>
      <p>{user?.description}</p>
      <ul>
        {user?.tabs.map((tab, index) => {
          return (
            <li key={index}>
              <Link to={`${match.url}/tab/${tab.name}`}>{tab.name}</Link>
            </li>
          );
        })}
      </ul>
      <Route path={`${match.path}/tab/:tabname`} component={TagPage} />
    </div>
  );
};

// @ts-ignore
const TagPage = ({ match }) => {

  const {
    params: { username, tabName },
  } = match;

  const tab = users
    .find(({ name }) => name === username)
    ?.tabs.find(({ name }) => name === tabName);

  return (
    <div>
      Tab Name: <strong>{tab ? tab.name : ''}</strong>
      <h6>Tab content</h6>
      <ul>
        {Object.keys(tab!.content).map((key, index) => {
          return (
            <li key={index}>
              <span>{key} : </span>
              {/* <strong>{tab ? tab.content[key] : ''}</strong> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
const users = [
  {
    name: 'Param',
    description: 'Guy who writes...',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Param',
          lastname: 'Harrison',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Jobbatical',
          city: 'Tallinn, Estonia',
        },
      },
    ],
  },
  {
    name: 'Miguel',
    description: 'the best guy doing...',
    tabs: [
      {
        name: 'personal',
        content: {
          firstname: 'Miguel',
          lastname: 'Medina',
        },
      },
      {
        name: 'employer',
        content: {
          name: 'Skype',
          city: 'Arizona, US',
        },
      },
      {
        name: 'other',
        content: {
          country: 'Mexico',
          age: 30,
        },
      },
    ],
  },
];
