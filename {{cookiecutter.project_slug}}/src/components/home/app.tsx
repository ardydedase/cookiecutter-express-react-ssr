import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { TopNav } from '../shared';

class Home extends React.Component {
  constructor(_props: any) {
    super(_props);
  }

  render() {
    return (
      <div>
        <TopNav />
        <Card>
          <Card.Img id="banner-image" variant="top" />
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Node React SSR using TypeScript</Card.Title>
            <Card.Text>
              <p>Starter app for building web apps using Node React SSR with TypeScript.</p>
              <Button variant="outline-primary" href="https://github.com/ardydedase/cookiecutter-express-react-ssr">
                Cookiecutter
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;
