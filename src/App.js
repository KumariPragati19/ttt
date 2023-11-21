import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import PostList from './components/PostList';
import posts from './data';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Header />
      <Profile />
      <Container>
        {/* Other content goes here */}
        {/* For example: */}
        <Row>
          <Col xs={12} md={8}>
            <PostList posts={posts} />
          </Col>
          <Col xs={12} md={4}>
            {/* Other content */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
