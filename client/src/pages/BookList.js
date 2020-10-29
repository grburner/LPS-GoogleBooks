import React, { useEffect, useState } from 'react';

import Book from '../components/Book';
import API from '../utils/API';
import Container from 'react-bootstrap/Container'

const BookList = () => {
    const [books, setBooks] = useState();

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
      console.log(books)
      return(
        <Container className={'my-2'}>
          <Book key={index} data={book} on></Book>
        </Container>
      )
    }

    return(
        <div className={'mt-3'}>
          {books ?  books.map(renderBook) : 'waiting...'}
        </div>
    )
}

export default BookList;