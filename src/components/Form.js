import React from 'react';

const Form = (props) => {

  const { buttonDisabled, setButtonDisabled, task, setTask, setShowNotification } = props;

  const onSubmit = async (e) => {
    e.preventDefault();

    const { task } = e.target.elements;

    alert(task);

    try {

      fieldset.disable = true;
      // make an update call to the smart contract
      await window.contract.addTask({
        // pass the value that the user entered in the greeting field
        text: task.value,
        accountId: accountId
      });
    } catch (e) {
      alert(
        'Something went wrong! ' +
        'Maybe you need to sign out and back in? ' +
        'Check your browser console for more info.'
      );
      throw e;
    } finally {
      // re-enable the form, whether the call succeeded or failed
      fieldset.disabled = false;
    }

    // update local `greeting` variable to match persisted value
    setTask(task);

    // show Notification
    setShowNotification(true);

    // remove Notification again after css animation completes
    // this allows it to be shown again next time the form is submitted
    setTimeout(() => {
      setShowNotification(false);
    }, 11000);

  };

  const handleSetTask = (e) => {
    e.target.value === task;
    setButtonDisabled(false);
    setTask(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <label
          htmlFor="task"
          style={{
            display: 'block',
            color: 'var(--gray)',
            marginBottom: '0.5em'
          }}
        >
          Add Task
        </label>
        <div style={{ display: 'flex' }}>
          <input
            autoComplete="off"
            id="task"
            onChange={handleSetTask}
            style={{ flex: 1 }}
            placeholder='e.g. Cooking'
          />
          <button
            disabled={buttonDisabled}
            style={{ borderRadius: '0 5px 5px 0' }}
          >
            +
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default Form;
