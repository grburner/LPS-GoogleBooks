import React, { useState } from 'react';

import API from '../../utils/API';

const BookList = () => {
    const [books, setBooks] = useState();
    API.getBooks((res) => {
        setBooks(res)
    })

    return(
        <div>{"book list"}</div>
    )
}

export default BookList;