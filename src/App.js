import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import AddBook from './AddBook';
import BookList from './BookList';

function App() {
  const [newBook, setNewBook] = useState({author: '', title: ''})
  const [booklist, setNewBooklist] = useState([])

  const addNewBookBook = () => {
    setNewBooklist(oldBookList => ([...oldBookList, newBook]))
  }

  return (
    <div className="App">
      <Container>
            <AddBook newBook={newBook} setNewBook={setNewBook} addBookFunc={addNewBookBook} />
            <BookList booklist={booklist} />
      </Container>
      
    </div>
  );
}

export default App;
