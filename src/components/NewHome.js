import React, { useState, useEffect } from "react";
import HomeWrapper from "./Wappers/HomeWrapper";
import Axios from "axios";

const NewHome = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = "https://api.github.com/users/pjdaze";
    Axios.get(url).then(res => {
      setUser({ ...res.data });
    });
  }, []);

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
};

export default NewHome;
