import React from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Tasklist from '../components/Tasklist';

const Dashboard = (props) => {

  const { logout, buttonDisabled, Notification, showNotification, setButtonDisabled, setShowNotification, task, setTask, tasklist } = props;

  return (
    <>
      <Navbar logout={logout} />
      <main>
        <Form
          buttonDisabled={buttonDisabled}
          setButtonDisabled={setButtonDisabled}
          setShowNotification={setShowNotification}
          task={task}
          setTask={setTask}
        />
      </main>
      {tasklist && <Tasklist tasklist={tasklist} />}
      {showNotification && <Notification />}
    </>
  );
};

export default Dashboard;
