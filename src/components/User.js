import { useState } from "react";

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(1);
  return (
    <div className="user-card">
      <h1>Functional Component</h1>
      <h2>Name : {name}</h2>
      <h3>Location : {location}</h3>
      <h4>Contact : sanjairs72@gmail.com</h4>

      <button
        className="count-btn"
        onClick={() => {
          setCount(count + 1);
          setCount1(count1 + 1);
        }}
      >
        Count : {count}
      </button>

      <button className="count-btn">Count1 : {count1}</button>
    </div>
  );
};

export default User;
