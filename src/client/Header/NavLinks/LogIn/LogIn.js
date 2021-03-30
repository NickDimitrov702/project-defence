import style from '../LogIn/Login.style.css'
import { useEffect } from 'react'
import * as SigneInservice from '../../../Services/ComapnyInformation'


function SigneIn() {
    
    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data.id));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
    


    return(
        <div className="signe-in-for-wrapper">
            <label className="lable-item">Enter email</label>
            <input type="text" className="email input-items" placeholder="Enter email"></input>
            <label className="lable-item">Enter password</label>
            <input type="password" className="password input-items" placeholder="Enter password"></input>
            <button className="submit-button">Submit</button>
        </div>
    )
}

export default SigneIn;