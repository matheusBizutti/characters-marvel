import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Row from 'react-bootstrap/Row';

import './../styles/default.style.css'; 
import './../styles/characters-details.style.css'; 

export default class CharactersDetails extends Component {

  render() {

    console.log(this.props);
    return (
      <React.Fragment>
        <Container className="div-size">

          <Breadcrumb>
            <Breadcrumb.Item href="http://localhost:3000">Personagens</Breadcrumb.Item>
            <Breadcrumb.Item active>Detalhes</Breadcrumb.Item>
          </Breadcrumb>
          
          <Row className="margin-bottom-default">
            <Col md={6}>
              <Image className="img-size" src={this.props.location.state.photo + '.jpg'} roundedCircle />
            </Col>
            <Col md={6}>
              <div className="margin-top-col-center ">
                <h1>{this.props.location.state.name}</h1>
              </div>
            </Col>
          </Row>
            {this.props.location.state.series.map(serie => 
              <ListGroup key={serie.resourceURI} className="list-group-flush">
                <ListGroupItem>{serie.name}</ListGroupItem>
              </ListGroup>
            )}
        </Container>
      </React.Fragment>
    )
  }

}