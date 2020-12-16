import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    change(name, value);
  };

  return (
    <div>
      <form className="formContainer" onSubmit={onSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label>
          Terms and Conditions
          <input
            type="checkbox"
            name="terms"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select onChange={onChange}>
            <option value="">---Select One---</option>
            <option value="student">Student</option>
            <option value="ta">TA</option>
            <option value="instructor">Instructor</option>
            <option value="alumni">Alumni</option>
          </select>
        </label>
        <button type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
    </div>
  );
}
