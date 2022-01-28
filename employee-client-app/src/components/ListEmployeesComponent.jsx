import React, {Component} from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeesComponent extends Component {


  constructor(props) {
    super(props)

    this.state = {
        employees: []
    };
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({employees: res.data});
    });
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employee List</h1>
        <div className="row">
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.employees.map(
                  employee =>
                    <tr key={employee.id}>
                      <td>{employee.firstName}</td>
                      <td>{employee.lastName}</td>
                      <td>{employee.emailAddress}</td>
                      <td></td>
                    </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ListEmployeesComponent
