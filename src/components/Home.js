import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  max-width: 1020px;
  height: 100vh;
  margin: 20px auto;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  aside {
    text-align: center;
  }
`;

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
            avatar_url: data.avatar_url
          }
        });
      });
  };

  render() {
    const { user } = this.state;

    return (
      <HomeWrapper>
        <aside className="sidebar">
          <div>
            <img
              src={user.avatar_url}
              width="200"
              height="200"
              ref="username"
            />
          </div>
        </aside>
        <article className="content">
          <h1>2 column, header and footer</h1>
          <p>
            This example uses line-based positioning, to position the header and
            footer, stretching them across the grid.
          </p>
        </article>
      </HomeWrapper>
    );
  }
}
export default Home;
