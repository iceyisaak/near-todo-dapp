import React from 'react';

const Form = (props) => {

  const { greeting, buttonDisabled, setButtonDisabled, setShowNotification, setGreeting } = props;


  return (
    <form onSubmit={async event => {
      event.preventDefault();

      // get elements from the form using their id attribute
      const { fieldset, greeting } = event.target.elements;

      // hold onto new user-entered value from React's SynthenticEvent for use after `await` call
      const newGreeting = greeting.value;

      // disable the form while the value gets updated on-chain
      fieldset.disabled = true;

      try {
        // make an update call to the smart contract
        await window.contract.setGreeting({
          // pass the value that the user entered in the greeting field
          message: newGreeting
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
      setGreeting(newGreeting);

      // show Notification
      setShowNotification(true);

      // remove Notification again after css animation completes
      // this allows it to be shown again next time the form is submitted
      setTimeout(() => {
        setShowNotification(false);
      }, 11000);
    }}>
      <fieldset id="fieldset">
        <label
          htmlFor="greeting"
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
            defaultValue={greeting}
            id="greeting"
            onChange={e => setButtonDisabled(e.target.value === greeting)}
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
