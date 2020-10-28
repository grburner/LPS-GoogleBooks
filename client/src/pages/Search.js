import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import API from '../utils/API';
import Book from '../components/Book';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Search = () => {
    const [books, setBooks] = useState();

    useEffect(() => {
        API.getSearchBooks("harry potter").then(res => setBooks(res.data.items))
    }, [])

    const renderBook = (element, index) => {
        
        return (
            <Card>
            <Card.Header>{'element.volumeInfo.authors'}</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={'element.volumeInfo.imageLinks.smallThumbnail'} rounded />
                    </Col>
                    <Col xs={10}>
                        <Card.Title>{element.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            {element.volumeInfo.description}
                        </Card.Text>
                        <Button variant="primary" href={element.volumeInfo.description}>Save Book</Button>
                    </Col>
                </Row>
            </Card.Body>
            </Card>
        )
    }

    return(
        <Container>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Book Search</Form.Label>
                <Form.Control placeholder="harry potter" />
            </Form.Group>
            {books ? books.map(renderBook) : ''}
        </Container>
    )
}

export default Search;