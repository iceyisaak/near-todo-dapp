import 'regenerator-runtime/runtime';
import React from 'react';
import { login, logout } from './utils';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';


import './global.css';

import getConfig from './config';
const { networkId } = getConfig(process.env.NODE_ENV || 'development');

export default function App() {
  // use React Hooks to store greeting in component state
  const [greeting, setGreeting] = React.useState();

  // when the user has not yet interacted with the form, disable the button
  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  // after submitting the form, we want to show Notification
  const [showNotification, setShowNotification] = React.useState(false);

  // The useEffect hook can be used to fire side-effects during render
  // Learn more: https://reactjs.org/docs/hooks-intro.html
  React.useEffect(
    () => {
      // in this case, we only care to query the contract when signed in
      if (window.walletConnection.isSignedIn()) {

        // window.contract is set by initContract in index.js
        //   window.contract.getGreeting({ accountId: window.accountId })
        //     .then(greetingFromContract => {
        //       setGreeting(greetingFromContract);
        //     });
        console.log(
          window.contract.getAllTasks()
        );
      }
    },

    // The second argument to useEffect tells React when to re-run the effect
    // Use an empty array to specify "only run on first render"
    // This works because signing into NEAR Wallet reloads the page
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
        greeting={greeting}
        buttonDisabled={buttonDisabled}
        showNotification={showNotification}
        setButtonDisabled={setButtonDisabled}
        setShowNotification={setShowNotification}
        setGreeting={setGreeting}
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
