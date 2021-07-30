import { Box, Button, Checkbox, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, {useState, useEffect} from 'react'
import StrengthIndicator from './StrengthIndicator'
import Banner from './Banner'

function Manualsignup() {

    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [enable, setEnable] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [checked, setChecked] = useState(false)
    const toggleShow = () => {
        setShowPassword(!showPassword)
    }

    const submitForm = () => {
        if (!checked) {
            toast({
                title: "Error",
                description: "You'll have to accept our terms and policies to continue",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
            return
        }
        else if (fullname.length < 1 || email.length < 1) {
            toast({
                title: "Error",
                description: "Ensure all fields are filled",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
            setPassword("")
            return
        }else {
            setPassword("")
            setEmail("")
            setFullname("")
            setLoggedIn(true)
        }
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
        <VStack as="form" width='70%' marginX='auto' alignItems='flex-start' spacing='7'>
                    {loggedIn && <Banner user={fullname} toggle={toggle}/>}
            <FormLabel>Fullname</FormLabel>
            <Input type='text' variant="flushed" fontSize="20px" autoComplete="none" required value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            <FormLabel>Email Address</FormLabel >
            <Input type='email' fontSize="20px" variant="flushed" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel >
            <InputGroup>
                <Input type={`${showPassword ? 'text' : 'password'}`} fontSize="20px" variant="flushed" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement  children={ showPassword ? <ViewOffIcon fontSize="2xl" cursor="pointer"/>: <ViewIcon fontSize="2xl" cursor="pointer"/>} onClick={toggleShow}/>
            </InputGroup>
            {password.length > 0 && <StrengthIndicator enable={enable} password={password} setEnable={setEnable}/>}
            <Checkbox onChange={()=>setChecked(!checked)}>By creating account, you agree to accept our <Box as="span" color="blue.500">Privacy Policy, Terms and services <Box as="span" color="#000">and</Box> Notifiation settings</Box></Checkbox>
            {<Button variant="solid" bgColor="tomato" _hover={{bg: "red.500"}} px="10" w="100%" disabled={!enable} onClick={submitForm}>Sign Up</Button>}
        </VStack>
    )
}

export default Manualsignup