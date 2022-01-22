import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Tasklist from '../components/Tasklist';

const Dashboard = (props) => {

  const { logout, greeting, buttonDisabled, Notification, showNotification, setButtonDisabled, setShowNotification, setGreeting, setTasklist, tasklist } = props;

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
      {tasklist && <Tasklist tasklist={tasklist} />}
      {showNotification && <Notification />}
    </>
  );
};

export default Dashboard;
