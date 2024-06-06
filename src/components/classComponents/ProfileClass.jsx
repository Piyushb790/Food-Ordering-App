import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      text: "",
      userData: { name: "dummy" },
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    this.timer = setInterval(() => {}, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/piyushb790");
    const jsonData = await data.json();
    this.setState({
      userData: jsonData /**this setState will re-render the dom again */,
    });
  }

  render() {
    const { text, userData } = this.state;

    return (
      <div>
        <div className="p-6 bg-[#FFA500] flex justify-between rounded-xl">
          <img
            src={userData?.avatar_url}
            alt="img"
            className="h-28 rounded-lg"
          />
          <div className="text-sm font-semibold leading-7 ">
            <p>
              Name : <span className="font-normal">{userData?.name}</span>
            </p>
            <p>
              Contact : <span className="font-normal">+91 8954634563</span>
            </p>
            <p>
              Total Reviews :{" "}
              <span className="font-normal">{userData?.followers}</span>
            </p>
            <p>
              Total Orders :{" "}
              <span className="font-normal">{userData?.public_repos}</span>
            </p>
          </div>
        </div>

        <h3> {this.props.name}</h3>
      </div>
    );
  }
}
export default ProfileClass;
