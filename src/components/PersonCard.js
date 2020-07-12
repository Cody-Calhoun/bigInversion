import React, { useState } from "react";

export const PersonCard = () => {
  const [allPeople, setallPeople] = useState([]);
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [hairColor, sethairColor] = useState("");
  const [Age, setAge] = useState(0);

  const addPerson = (e) => {
    e.preventDefault();

    const [...thePeople] = allPeople;
    thePeople.push({ firstName, lastName, hairColor, Age });
    setallPeople(thePeople);
    resetForm();
  };

  const resetForm = () => {
    setfirstName("");
    setlastName("");
    setAge("");
    sethairColor("");
  };

  return (
    <div>
      <h1>All of the Peoples!</h1>
      <ul>
        {allPeople.map((people, i) => (
          <li key={i}>
            <ul>
              <li>First Name: {people.firstName}</li>
              <li>Last Name: {people.lastName}</li>
              <li>Age: {people.Age}</li>
              <li>Hair Color: {people.hairColor}</li>
            </ul>
          </li>
        ))}
      </ul>

      <form onSubmit={addPerson}>
        <label htmlFor="">First Name:</label>
        <input
          type="text"
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName}
        />
        <br />
        <label htmlFor="">Last Name:</label>
        <input
          type="text"
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
        />
        <br />
        <label htmlFor="">Age:</label>
        <input
          type="text"
          onChange={(e) => setAge(e.target.value)}
          value={Age}
        />
        <br />
        <label htmlFor="">Hair Color:</label>
        <input
          type="text"
          onChange={(e) => sethairColor(e.target.value)}
          value={hairColor}
        />
        <br />
        <button>Create new Person</button>
      </form>
    </div>
  );
};
