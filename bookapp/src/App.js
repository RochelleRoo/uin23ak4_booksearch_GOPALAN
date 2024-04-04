import React, { useState, useEffect } from 'react';
import Book from './components/Book';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJamesBondBooks = async () => {
      try {
        const response = await fetch(
          'https://openlibrary.org/search.json?q=james+bond'
        );
        const data = await response.json();
        setBooks(data.docs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchJamesBondBooks();
  }, []);

  const handleSearch = async () => {
    if (query.length < 3) {
      alert('Please enter at least 3 characters');
      return;
    }

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Book App</h1>
        <div className="SearchBox">
          <input
            type="text"
            placeholder="Search Books..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <div className="BookList">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {books.length === 0 && <p>No books found.</p>}
            {books.map((book) => (
              <Book key={book.key} book={book} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
