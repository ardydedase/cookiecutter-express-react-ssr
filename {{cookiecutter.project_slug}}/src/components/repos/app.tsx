import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

import { FaRegSadTear } from 'react-icons/fa';
import { TopNav } from '../shared';

class Repos extends React.Component {
  state = {
    repos: [],
    loading: false,
    username: '',
  };

  constructor(_props: any) {
    super(_props);
    this.renderGitHubRepos = this.renderGitHubRepos.bind(this);
  }

  async componentDidMount() {
    this.setState({
      username: window.username,
    });

    await this.renderGitHubRepos(window.username);
  }

  renderGitHubRepos = async (username: string) => {
    let repos;

    try {
      this.setState({ loading: true });
      const response = await fetch(`/api/repos/${username}`);
      const data = await response.json();
      repos = data.map((repo: any) => {
        return (
          <Card key={repo.id} className="mt-1">
            <Card.Body>
              <Card.Title>{repo.name}</Card.Title>
              <Card.Text>
                <footer className="blockquote-footer">
                  <a href={`https://github.com/${repo.full_name}`}>
                    <cite title={repo.full_name}>{repo.full_name}</cite>
                  </a>
                </footer>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      });
    } catch (ReposNotFoundException) {
      repos = (
        <Card>
          <Card.Body>
            <Card.Text className="text-center">
              <FaRegSadTear />
              &nbsp;{ReposNotFoundException.message}
            </Card.Text>
          </Card.Body>
        </Card>
      );
    }

    this.setState({ repos: repos, loading: false });
  };

  render() {
    const { repos, loading } = this.state;

    return (
      <div>
        <TopNav />
        <Container>
          <Row>
            <Col xs={3}></Col>
            <Col md={6} className="p-3">
              {loading ? <Spinner animation="border" padding-top="5px" /> : repos}
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Repos;
