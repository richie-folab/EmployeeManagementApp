import React, {Component} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

//Make props available in the route so that id can be extracted from params
export function withRouter (Children) {
  return (props) => {
    const navigate = useNavigate();
    return <Children {...props} navigate={navigate} />;
  }
};

class ListEmployeesComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
        employees:[]
    };

    this.addEmployee = this.addEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({employees: res.data});
    });
  }

  addEmployee() {
    console.log(this.props);
    this.props.navigate('/add-employee');

  }

  render() {
    return (
      <div>
        <h1 className="text-center">Employee List</h1>
        <div>
          <button
            className="btn btn-primary"
            onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
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
export default withRouter(ListEmployeesComponent)
