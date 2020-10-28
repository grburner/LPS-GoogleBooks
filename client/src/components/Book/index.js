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

// author: "Stephen King"
// description: "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a "faultlessly paced...continuously engrossing" (Los Angeles Times) novel of second sight."
// image: "https://via.placeholder.com/150"
// link: "google.com"
// title: "The Dead Zone"
// _id: "5f97804797ab1afe05bbb3fc"