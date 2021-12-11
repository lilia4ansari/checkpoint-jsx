import React, { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({
     firstName: "",
     lastName: "",
     email: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handelFirstName = (event) => {
    setValues({...values, firstName: event.target.value})
  }
  const handelLastName = (event) => {
    setValues({...values, lastName: event.target.value})
  }
  const handelEmail = (event) => {
    setValues({...values, email: event.target.value})
  }
  const handelSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handelSubmit}>
        {submitted && valid ? <div className="success-message">Success! Submit</div> : null}
        <input 
            disabled={submitted}
            onChange={handelFirstName}
            value={values.firstName} 
            className="form-field" 
            placeholder="First Name" 
            name="firstName" />
           {submitted && !values.firstName ? <spam>Please enter your first name</spam> : null}
        <input 
            disabled={submitted}
            onChange={handelLastName}
            value={values.lastName} 
            className="form-field" 
            placeholder="Last Name" 
            name="lasttName" />
          {submitted && !values.lastName ? <spam>Please enter your lasst name</spam> : null} 
        <input 
            disabled={submitted}
            onChange={handelEmail}
            value={values.email} 
            className="form-field" 
            placeholder="Email" 
            name="email"/>
           {submitted && !values.email ? <spam>Please enter your email</spam> : null}
        <button 
            className="form-field" 
            type="submit">Submit
        </button>
      </form>
    </div>
  );
}

export default App;
