import './App.css';
import DataMgr from './DataMgr';
import { useState } from 'react';

function Register() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    function Signup(){
        DataMgr.userList.push({
            "email": {email},
            "passwword": {password}
          })
          alert('Dang ki thanh cong')
        }
    
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Register
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Email: </label>
            <input type="text" name="fullname" placeholder="Enter email" className="form-control" value={email} onChange={(e) => setemail(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input type="password" name="pwd" placeholder="Enter password" className="form-control" value={password} onChange={(e) => setpassword(e.target.value)}/>
          </div>
          <div className="form-group">
            <button className="btn btn-success" onClick={Signup}>Sign up</button>
            <p>
              <a href="/">Back welcome page</a>
            </p>
            <p>
              <a href="/Login">Login Page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;