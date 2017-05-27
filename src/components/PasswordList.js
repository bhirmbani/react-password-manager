import React from 'react';
import { Table, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPasswords, delPassword } from '../actions';

import EditPassword from './EditPassword';

class TableCom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {

      },
      alertDelVisible: false,
      isReallyDeleted: false,
    }
  }

  componentDidMount () {
    this.props.getPasswords()
    console.log(this.props.passwords)
  }

  onClickDelete(id, data) {
    this.setState({
      alertDelVisible: true,
      data: data,
    })
  }

  onConfirmDelete(id) {
    this.setState({
      alertDelVisible: false,
      isReallyDeleted: true
    });
    this.props.delPassword(id)
  }
  
  onCancelDelete() {
    this.setState({alertDelVisible: false});
  }

  onUserHasKnowPassIsDeleted() {
    this.setState({isReallyDeleted: false});
  }


  render() {
    return (
      <div className="container">
        {(this.state.isReallyDeleted) && <Alert bsStyle="success">
          <h4>Congrats!</h4>
          <p>Delete is success.</p>
          <p>
            <Button bsSize="xsmall" onClick={this.onUserHasKnowPassIsDeleted.bind(this)}>Dismiss</Button>
          </p>
        </Alert> }
        { (this.state.alertDelVisible) &&
          <Alert bsStyle="warning">
          <h4>Are you sure want to delete this {this.state.data.password} password with username of {this.state.data.username} and url of {this.state.data.url} from our list?</h4>
          <p>This action is reversible. Please be sure.</p>
            <p>
            <Button onClick={() => {this.onConfirmDelete(this.state.data.id)}} bsStyle="danger">I am sure</Button>
            <span> or </span>
            <Button onClick={this.onCancelDelete.bind(this)}>No, i want to keep this</Button>
            </p>
          </Alert> }
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>Username</th>
              <th>Password</th>
              <th>created At</th>
              <th>updated At</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.passwords.map((password, idx) => {
              return <tr key={idx}>
                      <td>{password.id}</td>
                      <td>{password.url}</td>
                      <td>{password.username}</td>
                      <td>{password.password}</td>
                      <td>{password.createdAt}</td>
                      <td>{password.updatedAt}</td>
                      <td><Button 
                      onClick={() => {this.onClickDelete(password.id, password)}} 
                      bsSize="xsmall" 
                      bsStyle="danger">Delete</Button></td>
                      <td>
                      <EditPassword id={password.id} url={password.url} username={password.username} password={password.password} createdAt={password.createdAt} /></td>
                    </tr>
            })}
          </tbody>
        </Table>
        <div>
          {this.props.passwords.length === 0 &&
            <Alert bsStyle="info">
              <strong>You have no password stored!</strong> It's better for you to add some password first.
            </Alert>
          }
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    passwords: state.passwords
  }
}

const mapDispatchToProps = dispatch => ({
  getPasswords: () => dispatch(getPasswords()),
  delPassword: (id) => dispatch(delPassword(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(TableCom)