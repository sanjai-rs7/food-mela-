import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount() {
    console.log("Parent Component did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is About Page</h2>
        <User name={"gonePrime"} location={"Chennai"} />
        <UserClass name={"Sanjai"} location={"Perambalur"} />
        <UserClass name={"Tom Cruise"} location={"US"} />
        <UserClass name={"John Wick"} location={"NewYork"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is About Page</h2>
//       <User name={"gonePrime"} location={"Chennai"} />
//       <UserClass name={"Sanjai"} location={"Perambalur"} />
//     </div>
//   );
// };

export default About;
