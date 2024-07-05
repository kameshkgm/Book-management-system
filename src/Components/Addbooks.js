import React, { useState } from 'react';
import './AddBook.css';

const AddBook = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && imageUrl) {
      const newBook = { title, author, category, imageUrl };
      onAddBook(newBook); 
      setTitle('');
      setAuthor('');
      setCategory('');
      setImageUrl('');
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <img src={process.env.PUBLIC_URL + '/t1.jpg'} alt="Title Icon" className="icon" />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <img src={process.env.PUBLIC_URL + '/t2.jpg'} alt="Author Icon" className="icon" />
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="form-group">
        <img src={process.env.PUBLIC_URL + '/t3.jpg'} alt="Category Icon" className="icon" />
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ fontSize: '1.0rem' }}>Add Book</button>
    </form>
  );
};

export default AddBook;
