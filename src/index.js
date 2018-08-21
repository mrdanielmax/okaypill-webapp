import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Okay from './Okay';
import NotOkay from './NotOkay';
import registerServiceWorker from './registerServiceWorker';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
// cookies.set('visited', 'true', { path: '/' });

function MainPage(props) {
  const hasVisited = cookies.get('visited');
  if (hasVisited) {
    return <NotOkay />;
  }
  return <Okay />;
}

ReactDOM.render(<App MainPage={MainPage()}/>, document.getElementById('root'));
registerServiceWorker();
