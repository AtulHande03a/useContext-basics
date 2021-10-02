import { useState } from "react";
import { data } from "./data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  return (
    <div>
      <h2>Prop Drilling</h2>
      <List people={people} />
    </div>
  );
};

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  return (
    <div className="item">
      <h4>single item</h4>
    </div>
  );
};

export default PropDrilling;
