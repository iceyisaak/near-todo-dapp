import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import { login, logout } from './utils';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

import './global.css';

import getConfig from './config';
const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // const [greeting, setGreeting] = useState();
  const [task, setTask] = useState();
  const [tasklist, setTasklist] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {
        window.contract.getAllTasks().then(setTasklist);
      }
    },
    []
  );

  // if not signed in, return early with sign-in prompt
  if (!window.walletConnection.isSignedIn()) {
    return (
      <Home login={login} />
    );
  }

  return (
    // use React Fragment, <>, to avoid wrapping elements in unnecessary divs
    <>
      <Dashboard
        logout={logout}
        task={task}
        setTask={setTask}
        tasklist={tasklist}
        setTasklist={setTasklist}
        buttonDisabled={buttonDisabled}
        showNotification={showNotification}
        setButtonDisabled={setButtonDisabled}
        setShowNotification={setShowNotification}
        Notification={Notification}
      />
    </>
  );
}

// this component gets rendered by App after the form is submitted
function Notification() {
  const urlPrefix = `https://explorer.${networkId}.near.org/accounts`;
  return (
    <aside>
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.accountId}`}>
        {window.accountId}
      </a>
      {' '/* React trims whitespace around tags; insert literal space character when needed */}
      called method: 'setGreeting' in contract:
      {' '}
      <a target="_blank" rel="noreferrer" href={`${urlPrefix}/${window.contract.contractId}`}>
        {window.contract.contractId}
      </a>
      <footer>
        <div>✔ Succeeded</div>
        <div>Just now</div>
      </footer>
    </aside>
  );
}
