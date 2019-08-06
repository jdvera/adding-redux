import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

// New Stuff
import { connect } from "react-redux";

class Detail extends Component {
  // Since we have all the book info in our Redux store, we no longer need a state or
  // to send a request to the server when the page loads

  render() {
    const book = this.props.books[this.props.match.params.id]

    if (!book) {
      return <Redirect to="/" />;
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {book.title} by {book.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
};


export default connect(store => {
  const { books } = store;
  return { books };
})(Detail);