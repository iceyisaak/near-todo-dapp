import React from 'react';

const Tasklist = (props) => {

  const { tasklist } = props;

  return (

    <>
      <div className='flex flex-wrap justify-between w-full mb-4'>
        <h2 className='text-lg'>
          Task List
        </h2>
        <span className='text-sm'>Total: {tasklist.length} Task(s)</span>
      </div>

      {tasklist.length === 0 ?
        <p>Tasklist is Empty</p> :
        <table className='table table-auto'>
          <tbody className=''>
            {tasklist.map((task, i) =>
              <tr key={i} className=''>
                <td>
                  <input type="checkbox" name="done" id={`check-${i}`} className='mr-3 cursor-pointer' />
                  <label className='cursor-pointer' htmlFor={`check-${i}`}>{task.text}</label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      }
    </>
  );
};

export default Tasklist;
