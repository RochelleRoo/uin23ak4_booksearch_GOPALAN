import React from 'react';
import './Book.css';

const Book = ({ book }) => {
  const getCoverUrl = (book) => {
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    } else {
      return '';
    }
  };

  return (
    <div className="Book">
      <div className="BookDetails">
        <h3>{book.title}</h3>
        <div className="BookCover">
            <img src={getCoverUrl(book)} alt={book.title} />
        </div>
        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        <p>First published: {book.first_publish_year}</p>
      </div>
    </div>
  );
};

export default Book;
