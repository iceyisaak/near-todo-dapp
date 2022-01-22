import React from 'react';

const Tasklist = (props) => {

  const { tasklist } = props;

  return (

    <div>
      <h2 className='text-lg'>Task List</h2>
      <h4 className='text-sm'>
        Total: {tasklist.length} Task(s)
      </h4>


      {
        tasklist.length === 0 ?
          <p>Tasklist is Empty</p> :
          tasklist.map((task, i) => {
            <ol key={i}>
              <li>{task.text}</li>
            </ol>;
          })}
    </div>
  );
};

export default Tasklist;
