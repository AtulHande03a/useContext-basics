import React, { useState, useContext } from "react";
import { data } from "./data";

const PersonContext = React.createContext();
//two components - provider , consumer

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  return (
    <PersonContext.Provider value={{ removePerson ,people}}>
      <h2>Prop Drilling</h2>
      <List  />
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext)
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextApi;
