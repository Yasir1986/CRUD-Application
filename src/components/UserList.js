import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsers,
  getDelete,
  addUsers,
  getEdit,
  updateUser
} from "../actions/userAction";
import PropTypes from "prop-types";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editUserData: {}
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }
  handleDelete = name => {
    this.props.getDelete(name);
    console.log(this.props.getDelete(name));
  };
  handleSubmit = values => {
    this.props.addUsers(values);
  };
  handleEdit = user => {
    this.setState({
      isEditing: true,
      editUserData: user
    });
    this.props.getEdit(user);
    console.log("Editing mode");
  };
  handleSaveEdit = user => {
    this.props.updateUser(user);
    console.log(this.props.updateUser(user));
  };

  render() {
    const { users } = this.props.user;
    const renderUser = users.map(user => (
      <ul className="user-lists" key={user.name}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.country}</li>
        <li>
          <button onClick={name => this.handleDelete(user.name)}>Delete</button>
        </li>
        <li>
          <button onClick={name => this.handleEdit(user)}>Edit</button>
        </li>
      </ul>
    ));
    return (
      <div>
        <h1 align="center">React Redux Crud Application</h1>
        <div className="app-form">
          {this.state.isEditing ? (
            <EditUser
              initialValues={{
                name: this.state.editUserData.name,
                email: this.state.editUserData.email,
                country: this.state.editUserData.country
              }}
              onSubmit={this.handleSaveEdit}
            />
          ) : (
            <AddUser onSubmit={this.handleSubmit} />
          )}
        </div>
        <div className="app-list">
          <h1>This is userlist</h1>
          {renderUser}
        </div>
      </div>
    );
  }
}

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(
  mapStateToProps,
  { getUsers, getDelete, addUsers, getEdit, updateUser }
)(UserList);
