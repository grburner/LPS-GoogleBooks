import React, { useState, useEffect } from 'react'
import axios from "axios"

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import API from '../utils/API';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl';

const Search = () => {
    const [books, setBooks] = useState();
    const [search, setSearch] = useState('harry potter')
    const [searched, setSearched] = useState(false)

    const handleSubmit = () => {
        API.getSearchBooks(search).then(res => {
            {setBooks(res.data.items);
            setSearched(true)}
        })
    }

    useEffect(() => {}, [])

    const saveBook = (e) => {
        let index = e.target.dataset.index
        console.log(books[index])
        axios({
            method: 'POST',
            url: 'api/books',
            data: {
                "title": books[index].volumeInfo.title,
                "author": books[index].volumeInfo.authors[0],
                "description": books[index].volumeInfo.description,
                "image": books[index].volumeInfo.imageLinks.smallThumbnail,
                "link": books[index].volumeInfo.infoLink
            }
        })
    }

    const renderBook = (element, index) => {
        console.log(element)
        
        return (
            <Card>
            <Card.Header>{element.volumeInfo.authors[0] === "undefined" ? 'no author :(' : element.volumeInfo.authors[0]}</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={element.volumeInfo.imageLinks.smallThumbnail === "undefined" ? 'no image :(' : element.volumeInfo.imageLinks.smallThumbnail} rounded />
                    </Col>
                    <Col xs={10}>
                        <Card.Title>{element.volumeInfo.title === "undefined" ? 'no title :(' : element.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            {element.volumeInfo.description === "undefined" ? 'no description :(' : element.volumeInfo.description}
                        </Card.Text>
                        <Row>
                            <Button variant="primary" href={'_' + element.saleInfo.buyLink} className={"mr-2"}>See book</Button>
                            <Button data-index={index} variant="primary" onClick={saveBook} href="/">Save Book</Button>
                        </Row>
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
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" onClick={handleSubmit}>@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                    placeholder="Search here!"
                    aria-label="Search here!"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </InputGroup>
            </Form.Group>
            {searched && !books ? <h1>sorry, no results... try again.</h1> : ''}
            {!searched && !books ? <h1>Search for a book!</h1> : ''}
            {books ? books.map(renderBook) : ''}
        </Container>
    )
}

export default Search;