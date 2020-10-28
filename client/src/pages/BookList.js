import React, { useEffect, useState } from 'react';

import Book from '../components/Book';
import API from '../utils/API';
import Container from 'react-bootstrap/Container'

const BookList = () => {
    const [books, setBooks] = useState();
    //fetch('http://localhost:3001/api/books').then(res => console.log(res));

    const myRequest = new Request('/api/books', {
        method: 'GET',
        mode: 'no-cors',
      });
      
    useEffect(() => {
      fetch(myRequest)
        .then(response => response.json())
        .then(myBlob => {
          setBooks(myBlob);
      });
    }, [])

    const renderBook = (book, index) => {
      return(
        <Container>
          <Book key={index} data={book}></Book>
        </Container>
      )
    }

    return(
        <div>
          {books ?  books.map(renderBook) : 'waiting...'}
        </div>
    )
}

export default BookList;