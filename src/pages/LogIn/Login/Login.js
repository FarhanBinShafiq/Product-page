import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import initializeAuthentication from '../FirebaseConfig/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut } from "firebase/auth";

import './Login.css'


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const auth = getAuth();


const Login = () => {


    const [user, setUser] = useState({})
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    //Google Sign In

    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const { displayName, email, photoURL } = result.user;
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser)
            })
    }

    //Sing Out   

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


//Email target

const handleEmail=e=>{
  setEmail(e.target.value);
}


//Password

const handlePassword=e=>{
    setPassword(e.target.value);
}

   //Regitration Form
   
   const handleRegistration= e =>{

    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
   
   .then(result=>{
       const user=result.user;
       console.log(user)
   })
   e.preventDefault();
}

    return (



        <div>
            <Container className='mb-4'>
                 <h2 className='text-center'>Create You Account</h2>
                <Form className='login-form p-3' onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" onBlur={handleEmail} placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onBlur={handlePassword} placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                  


                </Form>



                <Row>

                    <Col className='pt-5'>
                        <div className='login-form'>




                            {
                                user.email && <div>
                                    <h2>Welcome {user.name}.you successfully create your account</h2>
                                    <p>Email:{user.email}</p>
                                    <img src={user.photo} />
                                </div>
                            }



                            <div className='p-4'>

                                {
                                    !user.name ?
                                        <div>


                                            <p>Sign in with your social media account</p>
                                            <Button variant="outline-danger" onClick={googleSignIn} type="submit">
                                                Gmail
                                            </Button>
                                        </div>


                                        :

                                        <div>
                                            <h3 className='pt-2 text-center'>   Your   Account</h3>
                                            <Button variant='outline-danger' onClick={handleSignOut}>Sign Out</Button>
                                        </div>
                                }
                            </div>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Login;