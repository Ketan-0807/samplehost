import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [user, setUser] = useState({
    Name: '',
    email: '',
    Message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  let name, value;

  const data = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const getdata = async (e) => {
    e.preventDefault();

    const { Name, email, Message } = user;

    if (!Name || !email || !Message) {
      alert("Please fill in all fields.");
    } else {
      const Options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Name,
          email,
          Message
        })
      };

      const res = await fetch(
        'https://pushdata-app-default-rtdb.firebaseio.com/UserData.json',
        Options
      );

      if (res) {
        alert("Message Sent Successfully");
        setSubmitted(true);
      } else {
        alert("Error Occurred");
      }
    }
  };

  return (
    <>
      <div className='form'>
        <div className='container'>
          <h2>FEEDBACK</h2>
          <form method='POST'>
            <input
              type='text'
              name='Name'
              placeholder='Your name'
              value={user.Name}
              autoComplete='off'
              required
              onChange={data}
            ></input>
            <input
              type='text'
              name='email'
              placeholder='Your email'
              value={user.email}
              autoComplete='off'
              required
              onChange={data}
            ></input>
            <textarea
              name='Message'
              placeholder='Write here your Message'
              value={user.Message}
              autoComplete='off'
              required
              onChange={data}
            ></textarea>
            <button
              onClick={getdata}
             
            >
              {submitted ? 'Submitted' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
