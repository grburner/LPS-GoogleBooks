import React, { useState } from 'react';

import API from '../../utils/API';

const BookList = () => {
    const [books, setBooks] = useState();
    fetch('http://localhost:3001/api/books').then(res => console.log(res));

    const myRequest = new Request('/api/books', {
        method: 'GET',
        mode: 'no-cors',
      });
      
      fetch(myRequest)
        .then(response => response.json())
        .then(myBlob => {
          console.log(myBlob);
        });

    return(
        <div>{"book list"}</div>
    )
}

export default BookList;