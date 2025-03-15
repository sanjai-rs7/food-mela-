import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + " Child Component did Mount");
  }

  render() {
    const { name, location } = this.props;
    const { count, count1 } = this.state;
    console.log(this.props.name + " Child render");
    return (
      <div className="user-card">
        <h1>Class Based Component</h1>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : sanjairs72@gmail.com</h4>

        <button
          className="count-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count1: this.state.count1 + 1,
            });
          }}
        >
          Count : {count}
        </button>

        <button className="count-btn">Count1 : {count1}</button>
      </div>
    );
  }
}

export default UserClass;
