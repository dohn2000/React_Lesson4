
import './App.css';
import { useState } from 'react';

function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    
    function check(){
        
        if (email == 'admin' && password == '123456'){
            window.location.href='/Info'
        }else{
            alert('Dang nhap that bai')
        }
    }
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Login
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
            <button className="btn btn-success" onClick={check}>Login</button>
            <p>
              <a href="/">Back welcome page</a>
            </p>
            <p>
              <a href="/Register">Register Page</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;