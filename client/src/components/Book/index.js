import React from 'react';
import axios from "axios"

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Book = ({data, key}) => {

    const removeBook = (e) => {
        axios.delete('api/books/' + data._id)
    }
    return(
        <Card>
            <Card.Header>{data.author}</Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image src={data.image} rounded />
                    </Col>
                    <Col xs={10}>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                        <Row>
                            <Button variant="primary" href={'_' + data.link} className={"mr-2"}>See book</Button>
                            <Button data-index={key} onClick={removeBook} href="/">Remove Book</Button>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Book;