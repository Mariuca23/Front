import React, { useState } from "react";
import "./App.css";

function DropdownForm() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Selected Option: ${selectedOption}`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
  };

  return (
    <div>
      <h1>Dropdown Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dropdown-select">Select an Option:</label>
          <select
            id="dropdown-select"
            value={selectedOption}
            onChange={handleOptionChange}
          >
            <option value="">--Select an Option--</option>
            <option value="option1">Dress</option>
            <option value="option2">Pants</option>
            <option value="option3">Shirt</option>
          </select>
        </div>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input
            type="text"
            id="name-input"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="age-input">Age:</label>
          <input
            type="text"
            id="age-input"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email:</label>
          <input
            type="text"
            id="email-input"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
    </div>
  );
}

export default DropdownForm;
