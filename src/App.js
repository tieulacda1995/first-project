import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import Header from './component/Header';
import TaskList from './component/TaskList';
import TaskForm from './component/TaskForm';
import AddItem from './component/AddItem';
import Search from './component/Search';
import Sort from './component/Sort';
import Test from './component/Test';






function App() {


  const [displayForm, setDisplayForm] = useState(false);
  useEffect(() => {


  }, []);
  useEffect(() => {


  });



  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={12}>
            <Header />
          </Col>
          <Col md={displayForm && 4} lg={displayForm && 4}>
            {displayForm && <TaskForm closeForm={() => setDisplayForm(false)} />}
          </Col>
          <Col md={displayForm ? 8 : 12} lg={displayForm ? 8 : 12}>
            <AddItem openForm={() => setDisplayForm(true)} />
            <Row>
              <Col sm={6} md={6}>
                <Search />
              </Col>
              <Col sm={6} md={6}>
                <Sort />
              </Col>
            </Row>
            <TaskList />
          </Col>
        </Row>
      </Container>
      <Test />

    </div>
  );
}

export default App;
