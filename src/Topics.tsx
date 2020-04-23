import React from 'react';
import { Router, Link } from 'react-router-dom';
import {createBrowserHistory} from 'history'


const history = createBrowserHistory();
export const Nested = () => {
  return (
    <>
      <Router history={history}>
        <div style={{ width: 1000, margin: '0 auto' }}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </div>
      </Router>
    </>
  );
};

const topics = [
  {
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative, component routing for React',
    resources: [
      {
        name: 'URL Parameters',
        id: 'url-parameters',
        description:
          'URL parameters are parameters whose values are set dynamical',
        url: 'https://xxx/react-router-url-parameters',
      },
      {
        name: 'Programmatically navigate',
        id: 'programmtically-navigate',
        description:
          'When building an app with React Router, eventually you will...',
        url: '',
      },
    ],
  },
  {
    name: 'React.js',
    id: 'reactjs',
    description: 'A JavaScript library for building user interfaces',
    resources: [
      {
        name: 'React Lifecycle Events',
        id: 'react-lifecycle',
        description:
          'React Lifecycle events allow you to tile into specific phases...',
        url: 'https://.../yyy',
      },
    ],
  },
];
