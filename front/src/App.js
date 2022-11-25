import { Route, Router, Routes } from "react-router-dom"
import './App.css';
import AddUser from "./ui/AddUser";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import UsersList from "./ui/UsersList";

function App() {
  return (<>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/user/add">Додати співробітника</Nav.Link>
          <Nav.Link href="/user/list">Список співробітників</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path="/user" >
        <Route path="list" index element={<UsersList />} />
        <Route path="add" element={<AddUser />} />
        <Route path=":id" element={<AddUser />} />
      </Route>
    </Routes>
  </>);
}

export default App;
