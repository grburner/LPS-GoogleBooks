import React from 'react';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Book = ({ data }) => {
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
                        <Button variant="primary" href={data.link}>See book</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Book;