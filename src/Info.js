import './App.css';
import DataMgr from './DataMgr';

function Info(props) {
  console.log(DataMgr.userlist)
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          Danh sach nguoi dung
        </div>
        <div className="card-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
                </thead>
                  {DataMgr.userlist.map((user) => {
                    <tr>
                      <th>{user.email}</th>
                      <th>{user.password}</th>
                    </tr>
                  })}
                <tbody>
            
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default Info;