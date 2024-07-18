import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const user = localStorage.getItem('userDetails');
    let userDetails = JSON.parse(user);
    
    // console.log(userDetails)

    let clearData=()=>{
        localStorage.removeItem("userDetails")
    }
    return (
        <div className="dashboard-container">
            <div>
                <h1>Welcome to Dashboard</h1>
            </div>
            <div>
                <h1>Hi {userDetails ? userDetails.name : "User"} !</h1>
            </div>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{userDetails ? userDetails.name : "User"}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{userDetails ? userDetails.email : "@gmail.com"}</td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td>{userDetails ? userDetails.password : "*********"}</td>
                </tr>
            </table>
            <div>
                <button className='btn-signup' onClick={clearData}><Link to={"/"}>Sign Out</Link></button>
            </div>
        </div>
    );
}

export default Dashboard;
