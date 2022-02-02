import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export function withRouter (Children) {
  return (props) => {
    const navigate = useNavigate();
    return <Children {...props} navigate={navigate} />;
  }
};

class CreateEmployeeComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: ''
    }

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.saveEmployee = this.saveEmployee.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  saveEmployee = (e) => {
    e.preventDefault();

    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.emailAddress,
    }
    console.log('employee => ' + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then(res => {
      this.props.navigate('/employees');
    })
  }

  cancel() {
    this.props.navigate('/employees');
  }

  changeFirstNameHandler(event) {
    this.setState({firstName: event.target.value});
  }
  changeLastNameHandler(event) {
    this.setState({lastName: event.target.value});
  }
  changeEmailHandler(event) {
    this.setState({emailAddress: event.target.value});
  }

  render () {
    return (
      <div  className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3><div className="text-center">Add Employee</div></h3>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label"> First Name: </label>
                  <input
                    className="form-control"
                    value={this.state.firstName}
                    onChange={this.changeFirstNameHandler}
                    />
                </div>
                <div className="mb-3">
                  <label className="form-label"> Last Name: </label>
                  <input
                    className="form-control"
                    value={this.state.lastName}
                    onChange={this.changeLastNameHandler}
                    />
                </div>
                <div className="mb-3">
                  <label className="form-label"> Email Address: </label>
                  <input
                    className="form-control"
                    value={this.state.emailAddress}
                    onChange={this.changeEmailHandler}
                    />
                </div>

                <button
                  className="btn btn-success"
                  onClick={this.saveEmployee}>Save</button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel}
                    style={{marginLeft: "10px"}}>Cancel</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateEmployeeComponent);
