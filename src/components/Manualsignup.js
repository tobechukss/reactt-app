import { Box, Button, Checkbox, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import React, {useState} from 'react'
import StrengthIndicator from './StrengthIndicator'

function Manualsignup() {

    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [enable, setEnable] = useState(true)
    const toggleShow = () => {
        setShowPassword(!showPassword)
    }

    const toggleEnable = () => {
        setEnable(false)
    }

    const toggleDisable = () => {
        setEnable(true)
    }

    return (
        <VStack as="form" width='70%' marginX='auto' alignItems='flex-start' spacing='7'>
            <FormLabel>Fullname</FormLabel>
            <Input type='text' variant="flushed" fontSize="20px" autoComplete="none" value={fullname} onChange={(e) => setFullname(e.target.value)}/>
            <FormLabel>Email Address</FormLabel >
            <Input type='email' fontSize="20px" variant="flushed" autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <FormLabel>Password</FormLabel >
            <InputGroup>
                <Input type={`${showPassword ? 'text' : 'password'}`} fontSize="20px" variant="flushed" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement  children={ showPassword ? <ViewOffIcon fontSize="2xl" cursor="pointer"/>: <ViewIcon fontSize="2xl" cursor="pointer"/>} onClick={toggleShow}/>
            </InputGroup>
            {password.length > 0 && <StrengthIndicator toggleEnable={toggleEnable} password={password} toggleDisable={toggleDisable}/>}
            <Checkbox >By creating account, you agree to accept our <Box as="span" color="blue.500">Privacy Policy, Terms and services <Box as="span" color="#000">and</Box> Notifiation settings</Box></Checkbox>
            <Button variant="solid" bgColor="tomato" px="10" w="100%">Sign Up</Button>
        </VStack>
    )
}

export default Manualsignup
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/raphaeluwadone/asgard.git
// git push -u origin main