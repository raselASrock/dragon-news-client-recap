import React from 'react';
import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
const {createUser} = useContext(AuthContext)

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name,email, password, photoURL);

        createUser(email,password)
        .then( result =>{
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch(error => console.error(error))

    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Full Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className="text-danger">
            We'll never share your email with anyone else.
          </Form.Text>
      </Form>
    );
};

export default Register;