import { Link } from 'react-router-dom'
import React, { Component } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import './../styles/default.style.css'; 

export default class CharactersEdit extends Component {

  render() {
    return (
      <React.Fragment>
        <Container className="div-size">

        <Breadcrumb>
          <Breadcrumb.Item href="http://localhost:3000">Personagens</Breadcrumb.Item>
          <Breadcrumb.Item active>Edit</Breadcrumb.Item>
        </Breadcrumb>

          <Form className="div-size padding-default ">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text"/>
              <Form.Text className="text-muted">
                Deixe sua imaginação fluir e digite um novo nome para o personagem: {this.props.location.state.name}
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Apelido</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Series</Form.Label>
              <Form.Control as="textarea" rows="3" />
              <Form.Text className="text-muted">
                Inclua o personagem: {this.props.location.state.name} em várias séries :)
              </Form.Text>
            </Form.Group>

            <Link to="/">
              <Button variant="primary">Finalizar</Button>
            </Link>
          </Form>
        </Container>
      </React.Fragment>
    )
  }

}