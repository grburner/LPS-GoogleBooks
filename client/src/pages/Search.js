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
            <Card className={'my-2'}>
            <Card.Header>{element.volumeInfo.authors[0]}</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={element.volumeInfo.imageLinks.smallThumbnail} rounded />
                    </Col>
                    <Col xs={10}>
                        <Card.Title>
                            {element.volumeInfo.title}
                        </Card.Title>
                        <Card.Text>
                            {element.volumeInfo.description}
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
        <Container className={'my-3'}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1" onClick={handleSubmit}>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </InputGroup.Text>
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