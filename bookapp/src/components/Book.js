import React from 'react';
import './Book.css';

const Book = ({ book, isSearchResult }) => {
  const getCoverUrl = (book) => {
    if (book.cover_i) {
      return `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
    } else {
      return '';
    }
  };

  const getAmazonUrl = (amazonId) => {
    return `https://www.amazon.com/s?k=${amazonId}`;
  };

  return (
    <div className="Book">
      <div className="BookCover">
        <img src={getCoverUrl(book)} alt={book.title} />
      </div>
      <div className="BookDetails">
        <h3>{book.title}</h3>
        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        <p>First published: {book.first_publish_year}</p>
        {/* The api does not contain the average rating for books or the amazon id */}
        <p>Average Rating: {book.average_rating || 'N/A'}</p>
        <a href={getAmazonUrl(book.amazon_id)} target="_blank" rel="noopener noreferrer" className="AmazonLink"> Search on Amazon</a>
      </div>
    </div>
  );
};

export default Book;
