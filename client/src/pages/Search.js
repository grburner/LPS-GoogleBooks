import React, { useEffect, useState } from 'react'
import axios from "axios"

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
    const [search, setSearch] = useState('harry potter')

    useEffect(() => {
        API.getSearchBooks(search).then(res => setBooks(res.data.items))
    }, [search])

    const handleChange = (e) => {
        if (e.target.value.length > 5) {
            setTimeout(() => {
                setSearch(e.target.value);
            }, 1500)
        }
    } 

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
        
        return (
            <Card>
            <Card.Header>{element.volumeInfo.authors[0] === undefined ? 'no author :(' : element.volumeInfo.authors[0]}</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={element.volumeInfo.imageLinks.smallThumbnail === undefined ? 'no image :(' : element.volumeInfo.imageLinks.smallThumbnail} rounded />
                    </Col>
                    <Col xs={10}>
                        <Card.Title>{element.volumeInfo.title === undefined ? 'no title :(' : element.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            {element.volumeInfo.description === undefined ? 'no description :(' : element.volumeInfo.description}
                        </Card.Text>
                        <Button data-index={index} variant="primary" onClick={saveBook} href="/">Save Book</Button>
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
                <input name="search" onChange={handleChange}/>
            </Form.Group>
            {books ? books.map(renderBook) : ''}
        </Container>
    )
}

export default Search;