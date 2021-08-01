import { HStack, VStack, Image, Button, IconButton } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Google from '../Assets/google.png'
import Facebook from '../Assets/facebook.png'
import Apple from '../Assets/apple.png'
import { auth } from '../utils/firebase'
import firebase from 'firebase/app'
import Banner from './Banner'



function AutoSignup() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState('')

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const aplProvider = new firebase.auth.OAuthProvider('apple.com');
    


    const googleAuth = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result.user);
            setUser(user.displayName)
            setLoggedIn(true)
            // ...
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    const fbAuth = () => {
        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result.user);
            setUser(user.displayName)
            setLoggedIn(true)
            // ...
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    const aplAuth = () => {
        firebase.auth().signInWithPopup(aplProvider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(result.user);
            setUser(user.displayName)
            setLoggedIn(true)
            // ...
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    useEffect(() => {
        const time = setTimeout(() => {
            setLoggedIn(false)
        }, 9000);
        return () => {
            clearTimeout(time)
        }
    }, [loggedIn])

    const toggle = () => {
        setLoggedIn(!loggedIn)
    }

    return (
        <VStack  width='70%' marginX='auto' alignItems='flex-start'>
        {loggedIn && <Banner user={user} toggle={toggle}/>}
            <HStack w="100%">
                <Button leftIcon={<Image src={Google} width="20px"/>} colorScheme="gray" variant="outline" w="50%" marginRight="20px" onClick={googleAuth}>
                    Sign up with Google
                </Button>
                <IconButton aria-label="Facebook" icon={<Image src={Facebook} width='20px'/>} onClick={fbAuth}/>
                <IconButton aria-label="Apple" icon={<Image src={Apple} width='30px'/>} onClick={aplAuth}/>
            </HStack>
        </VStack>
    )
}

export default AutoSignup
