  import React, { useState } from "react";
  import { Modal, Button, Form } from "react-bootstrap";
  import "./LogIn.css";
  import axios from "axios";

  function LogIn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleChange = (key, value) => {
      if (key === 'username') {
        setUsername(value);
      } else {
        setPassword(value);
      }
    };
    

    const login = () => {
      if (username && password) {
        const url =`http://localhost/api/users/login.php?username=${username}&password=${password}`;
        axios.get(url).then((res) => {
              console.log("result:", res);
            
              localStorage.setItem('user', JSON.stringify(res.data));
              window.dispatchEvent(new Event("storage"));
              if (res.data.status) {
                  setTimeout(() => {
                    handleClose()  

                //    window.location.href = '/dashboard';
                  }, 2000);
              } else {
                setError(res.data.message)
              }
    })
  }}

    return (
      <div>
        <p  className="cnx" onClick={handleShow}>
          Connexion
        </p>

        <Modal  show={show} onHide={handleClose}>
            <Modal.Title className="cnx1" >Connexion</Modal.Title>
          <Modal.Body>
            <Form onSubmit={login}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={(e) => handleChange('username', e.target.value) } name="Username" type="text" placeholder="Username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control onChange={(e) => handleChange('password', e.target.value)}  name="Mot De Passe"  type="password" placeholder="Mot De Passe" />
              </Form.Group>
              <div className="error">{error}</div>
              <a href="" className="mdpo" style={{ color: "blue " }}>
                Mot De Passe Oublié ?
              </a>
            </Form>
          </Modal.Body>
          <Modal.Footer>
        

            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

           <a href="/responsable/TableauDeBord">  <Button  variant="primary" type="submit" onClick={login}>
              Submit
            </Button></a>
          </Modal.Footer>
        </Modal>
        
      </div>
    );
  }

  export default LogIn;
