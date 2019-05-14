import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Spinner from 'react-bootstrap/Spinner'

import './../styles/characters-list.style.css'; 
import './../styles/default.style.css'; 
import { fetchCharacters} from '../actions/characters-list.action';

class CharactersLists extends Component {

  render() {

    let isLoading = true;

    if (this.props.characters.length === 1) {
      this.props.dispatch(fetchCharacters())
      isLoading = false;
    }

    return (
      <React.Fragment>
        <Row className="padding-specific-left">
          {!isLoading ? <Spinner animation="border" /> : ''}
          {this.props.characters.map(character => 
            <Card key={character.key} className="width-card-default padding-default">
              <Card.Body>
                <Card.Title>{character.name}</Card.Title>
                <Card.Img className="image-height-card-default" variant="top" src={character.photo + '.jpg'}/>
                <hr />
                <Row>
                  <Col>
                  <Link to={{
                      pathname: '/details',
                      state: {
                        name: character.name,
                        photo: character.photo,
                        series: character.series
                      }
                    }}>
                      <Button variant="primary">Series</Button>
                    </Link>
                  </Col>
                  <Col>
                  <Link to={{
                      pathname: '/edit',
                      state: {
                        name: character.name,
                        photo: character.photo,
                        series: character.series
                      }
                    }}>
                      <Button variant="secondary">Editar</Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          )}
        </Row>
      </React.Fragment>
    )
  }

}

const mapStateToProps = state => ({characters: state.charactersFetch.characters});

export default connect(mapStateToProps)(CharactersLists)
