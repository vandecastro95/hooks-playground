import React, { createContext, useState, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
    
    const [ books, dispatch ] = useReducer(bookReducer, [])

    const bookList = [
        {id: 1, title: 'name of the wind', author: 'patrick rothfuss'},
        {id: 2, title: 'the final empire', author: 'brandon sanderson'}
    ]

    return (
    <BookContext.Provider value={{books, dispatch }}>
        { children }
    </BookContext.Provider>
    )
}

export default BookContextProvider;