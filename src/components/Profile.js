// ProfilePage.js
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function ProfilePage() {
  const profileData = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    connections: 500,
    followers: 200,
    posts: [
      { id: 1, content: 'Post 1' },
      { id: 2, content: 'Post 2' },
      // Add more posts as needed
    ],
  };

  return (
    <Container className="mt-3">
      {/* Header */}
      <Row className="mb-4 header-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/bg.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Col>
          <h1>{profileData.name}</h1>
          <p>{profileData.title}</p>
          <p>{profileData.location}</p>
          <Button variant="primary">Connect</Button>
        </Col>
      </Row>

      {/* Profile Section */}
      <Row className="profile-section" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/profile_background.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Col xs={12} md={4}>
          {/* Profile Image */}
          <Image
            src={process.env.PUBLIC_URL + '/download.png'}
            alt="Profile Image"
            roundedCircle
            fluid
            className="mb-3"
          />
        </Col>
        <Col xs={12} md={8}>
          {/* Profile Details */}
          <div className="d-flex">
            <div className="mr-5">
              <p>Connections: {profileData.connections}</p>
              <p>Followers: {profileData.followers}</p>
            </div>
            <div>
              <Button variant="outline-primary">Message</Button>
            </div>
          </div>
        </Col>
      </Row>

      {/* Posts Section */}
      <Row className="mt-4">
        <Col>
          <h2>Posts</h2>
          {profileData.posts.map((post) => (
            <div key={post.id} className="mb-3">
              {post.content}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
