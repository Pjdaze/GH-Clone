import React from "react";
import styled from "styled-components";
import HomeWrapper from "../components/Wappers/HomeWrapper";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.getUser();
  }
  getUser = () => {
    const username = this.refs.username.value;
    const url = "https://api.github.com/users/pjdaze";
    console.log("this is the user name.value: " + username);

    //axios.get(url).then(data =>
    //  this.setState({
    //    user: { ...data }
    //  })
    //);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          user: { ...data }
        });
      });
  };

  render() {
    const { user } = this.state;
    console.log(user.id);

    return (
      <HomeWrapper>
        <aside className="sidebar">
          <div>
            <img
              className="avatar"
              src={user.avatar_url}
              ref="username"
              alt="avatar"
            />

            <div className="bio">
              <span>{user.login}</span>
              <span>{user.location}</span>
              <span>{user.bio}</span>
              <button className="btn">Edit bio</button>
              <button className="btn">Edit profile</button>
            </div>
          </div>
        </aside>
        <article className="content">
          <header>
            <nav className="home-nav">
              <ul>
                <li className="selected">Overview</li>
                <li className="selected">
                  Repository{user.repo}
                  <span className="bubble-values">{user.public_repos}</span>
                </li>
                <li className="selected">
                  Starts{" "}
                  <span className="bubble-values">{user.public_gists}</span>
                </li>
                <li className="selected">
                  Followers{" "}
                  <span className="bubble-values">{user.followers}</span>
                </li>
                <li className="selected">
                  Following{" "}
                  <span className="bubble-values">{user.following}</span>
                </li>
              </ul>
            </nav>
          </header>
        </article>
      </HomeWrapper>
    );
  }
}
export default Home;
