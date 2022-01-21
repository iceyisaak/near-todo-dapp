import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';

const Dashboard = (props) => {

  const { logout, greeting, buttonDisabled, showNotification, setButtonDisabled, setShowNotification, setGreeting, Notification } = props;

  return (
    <>
      <Navbar logout={logout} />
      <main>
        <Form
          greeting={greeting}
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
          setShowNotification={setShowNotification}
          setGreeting={setGreeting}
        />
      </main>
      {showNotification && <Notification />}
    </>
  );
};

export default Dashboard;
