import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, getDelete, addUsers } from '../actions/userAction';
import PropTypes from 'prop-types';
import AddUser from './AddUser'

class UserList extends Component {
  componentDidMount () {
    this.props.getUsers();
  }
  handleDelete = (name) => {
    this.props.getDelete(name);
    console.log(this.props.getDelete(name));
  }
  handleSubmit = (values) => {
    this.props.addUsers(values);
  }
  render() {
    const { users } = this.props.user;
    const renderUser = users.map(user=>(
      <ul className="user-lists" key={user.name}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.country}</li>
        <li><button onClick={(name)=>this.handleDelete(user.name)}>Delete</button></li>
        <li><button>Edit</button></li>
      </ul>
    ));
    return (
      <div>
          <AddUser onSubmit={this.handleSubmit}/>
          <h1>This is userlist</h1>
            {renderUser}
      </div>
    );
  }
}

UserList.propTypes = {
  getUsers:PropTypes.func.isRequired,
  user:PropTypes.object.isRequired
};
const mapStateToProps = (state) =>({
  user:state.user
});
export default connect(mapStateToProps, { getUsers, getDelete, addUsers })(UserList);
