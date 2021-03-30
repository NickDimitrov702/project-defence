import style from '../LogIn/Login.style.css'
import { useEffect, useState } from 'react'
import * as SigneInservice from '../../../Services/ComapnyInformation'


function SigneIn() {

    const [username, setUsername] = useState('Username')
    const APIkey = 'AIzaSyA2MRdhcQ-6ex98ZO6Bn1AWmTFNoEjrwII'
    const signeInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIkey}`

    const onLoginSubmit = (e) => {
        e.preventDefault();
        let email = (e.target.email.value)
        let password = (e.target.password.value)

        fetch(signeInUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .catch(error => console.error(`${error}`))

    }


    const onUserNameChangeHandler = (e) => {
        setUsername(e.target.value)
    }


    return (
        <div>
            <form className="signe-in-for-wrapper" onSubmit={onLoginSubmit}>
                <label className="lable-item">Enter email</label>
                <input type="text" id="email" name={username} onChange={onUserNameChangeHandler} className="email input-items" placeholder="Enter email"></input>
                <label className="lable-item">Enter password</label>
                <input type="password" id="password" className="password input-items" placeholder="Enter password"></input>
                <button className="submit-button">Submit</button>
            </form>

        </div>
    )
}

export default SigneIn;