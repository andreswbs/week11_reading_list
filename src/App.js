import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function App() {
  const [newBook, setNewBook] = useState({author: '', title: ''})

  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control 
                  value={newBook.author} 
                  type="text" 
                  placeholder='Enter author'
                  onChange={({target})=>setNewBook(prev => ({title: prev.title, author: target.value}))} 
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                  value={newBook.title} 
                  type="text" 
                  placeholder='Enter title' 
                  onChange={({target})=>setNewBook(prev => ({author: prev.auhtor, title: target.value}))} 
                />
              </Form.Group>
              <Button variant='primary'>
                Add book
              </Button>
            </Form>
          </Col>
          <Col md={6}>Second columns</Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
