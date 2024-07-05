import React, { useState, useEffect } from 'react';
import BookList from './Components/BookList';
import AddBook from './Components/Addbooks';
import Search from './Components/Search';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:3500/books');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const addBook = async (book) => {
    try {
      const response = await fetch('http://localhost:3500/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      fetchBooks(); 
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      const response = await fetch(`http://localhost:3500/books/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
      fetchBooks(); 
    } catch (error) {
      console.error(`Error deleting book with ID ${id}:`, error);
    }
  };

  const handleSearch = (category) => {
    setSearch(category);
  };

  const filteredBooks = books.filter((book) =>
    book.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-dark" style={{ color: 'blue' }}>It's SK's Library Management System</h1>
        <Search handleSearch={handleSearch} />
      </header>
      <div className="container mt-4 p-4 shadow book-container">
        <AddBook onAddBook={addBook} />
      </div>
      <div className="container mt-4 p-4 shadow">
        <BookList books={filteredBooks} onDeleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;
