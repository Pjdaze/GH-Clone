import React from "react";
import styled from "styled-components";
import HomeWrapper from "../components/Wappers/HomeWrapper";

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
    fetch(`https://api.github.com/users/pjdaze`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          user: {
            username: data.login,
            avatar_url: data.avatar_url,
            id: data.id,
            login: data.login,
            followers: data.followers,
            following: data.following,
            repos: data.public_repos,
            bio: data.bio,
            stars: data.public_gists
          }
        });
      });

    console.log(this.id);
  };

  render() {
    const { user } = this.state;

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
                  <span className="bubble-values">{user.repos}</span>
                </li>
                <li className="selected">
                  Starts <span className="bubble-values">{user.stars}</span>
                </li>
                <li className="selected">
                  Followers{" "}
                  <span className="bubble-values">{user.followers}</span>
                </li>
                <li className="selected">
                  Following <span className="bubble">{user.following}</span>
                </li>
              </ul>
            </nav>
          </header>
          <div>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
          </div>
        </article>
      </HomeWrapper>
    );
  }
}
export default Home;
