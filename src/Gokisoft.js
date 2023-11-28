import React from 'react';
import './App.css';

function Gokisoft(){
    return (
        <div className="container">
            <div className="card">
                <div className="card-header" style={{textAlign : 'center'}}>
                Gokisoft
                </div>
                <div className="card-body">
                <div className="form-group" style={{textAlign : 'center'}}>
                    <label>Chao mung ban den voi trang Gokisoft </label>
                </div>
                <div className="form-group" style={{textAlign : 'center'}}>
                    <a href='/Login' style={{margin: '10px'}}>
                        <button className="btn btn-success">Login</button>
                    </a>
                    <a href='/Register' style={{margin: '10px'}}>
                        <button className="btn btn-success">Register</button>
                    </a>        
                </div>
                </div>
            </div>
        </div>
  );
}

export default Gokisoft;