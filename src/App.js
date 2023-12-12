import React from 'react';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import { Card } from 'react-bootstrap';
import './App.css';

const App = () => {
  const firstName = 'Emna';

  return (
    <div className="app-container">
      <Card style={{ width: '18rem' }} className="product-card">
        <Image />
        <Card.Body>
          <Card.Title className="product-name"><Name /></Card.Title>
          <Card.Text className="product-description"><Description /></Card.Text>
          <Card.Text className="product-price"><Price /></Card.Text>
        </Card.Body>
      </Card>

      <div className="greeting">
        <p className="greeting-message">Hello, my name is {firstName ? firstName : 'there'}!</p>
        {firstName && <img src="/images/logo192.png" alt="Emna" className="user-image" />}
      </div>
    </div>
  );
}

export default App;

