import React from 'react';
import './BookList.css';

const BookList = ({ books, onDeleteBook }) => {
  const deleteBook = (index) => {
    onDeleteBook(index); 
  };

  return (
    <div>
      <h2 className="text-dark">Book List</h2>
      <div className="row">
        {books.map((book, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card book-card animate__animated animate__fadeIn">
              <div className="card-img-container">
                <img
                  src={book.imageUrl}
                  className="card-img-top book-image"
                  alt={book.title}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  {book.title}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {book.author}
                </h6>
                <p className="card-text">
                  {book.category}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBook(book.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
