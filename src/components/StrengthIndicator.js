import { Text } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'

function StrengthIndicator({toggleEnable, toggleDisable, password}) {

    const [colorCode, setColorCode] = useState('red')
    const [strengthNum, setStrengthNum] = useState(1)
    
    const strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    useEffect(() => {
        if (password.length < 4) {
            setStrengthNum(1)
            setColorCode('red')
            // setEnable(false)
        }else {
            setStrengthNum(2)
            // setEnable(false)
        }
        if (strongRegex.test(password)) {
            setColorCode('green')
            setStrengthNum(4)
            // setEnable(true)
        } else if (mediumRegex.test(password)) {
                setColorCode('yellowgreen')
                if (strengthNum <= 4) {
                    setColorCode('yellowgreen')
                    setStrengthNum(3)
                    // setEnable(false)
                }else {
                    setStrengthNum(strengthNum + 1)
                }
            }
        if (strengthNum === 4) {
            toggleEnable()
        }else {
            toggleDisable()
        }
    }, [password])
    return (

        <div className="indicator">
            <Text>Password Strength</Text>
            <div className="bars">
                <span style={{background: `${strengthNum >= 1 ? colorCode : '#ddd'}`}}></span>
                <span style={{background: `${strengthNum >= 2 ? colorCode : '#ddd'}`}}></span>
                <span style={{background: `${strengthNum >= 3 ? colorCode : '#ddd'}`}}></span>
                <span style={{background: `${strengthNum >= 4 ? colorCode : '#ddd'}`}}></span>
            </div>
            <ul style={{display: `${strengthNum == 4 ? 'none' : "block"}`}}>
                <li style={{color: `${colorCode}`}}>Password should be at least 8 characters long</li>
                <li style={{color: `${colorCode}`}}>Password should contain an uppercase letters</li>
                <li style={{color: `${colorCode}`}}>Password Should contain a special character</li>
            </ul>
        </div>
    )
}

export default StrengthIndicator
