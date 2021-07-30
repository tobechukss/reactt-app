import { Heading, HStack, Img, Input, InputGroup, InputLeftElement, Text, VStack, Image, Button, IconButton } from '@chakra-ui/react'
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
                    Sign up
                </Button>
                <IconButton aria-label="Facebook" icon={<Image src={Facebook} width='20px'/>}/>
                <IconButton aria-label="Apple" icon={<Image src={Apple} width='30px'/>}/>
            </HStack>
        </VStack>
    )
}

export default AutoSignup
