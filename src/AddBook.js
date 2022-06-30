import { Row, Col, Form, Button } from 'react-bootstrap';

function AddBook({newBook, setNewBook, addBookFunc}) {
    return (
    <Form>
        <Row>
            <Col>
                <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control 
                    value={newBook.author} 
                    type="text" 
                    placeholder='Enter author'
                    onChange={({target})=>setNewBook(prev => ({title: prev.title, author: target.value}))} 
                />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control 
                    value={newBook.title} 
                    type="text" 
                    placeholder='Enter title' 
                    onChange={({target})=>setNewBook(prev => ({author: prev.author, title: target.value}))} 
                />
                </Form.Group>
            </Col>
            <Col>
                <Button onClick={addBookFunc} variant='primary'>
                Add book
                </Button>
            </Col>
        </Row>
    </Form>
    )

}

export default AddBook