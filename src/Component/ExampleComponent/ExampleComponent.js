import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleComponent = ({ children }) => {
  const [show, toggleShow] = useState(true);
  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Sample Component for the Feel!</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
}

export default ExampleComponent;