import React from 'react';
import { Modal, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { connect } from 'react-redux';

import { editPassword } from '../actions';

class EditPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false,
      id: this.props.id,
      url: this.props.url,
      username: this.props.username,
      password: this.props.password,
      createdAt: this.props.createdAt,
      warningMsg: ''
    }
  }

  onClickEdit() {
    this.setState({
      isModalOpened: true
    })
  }

  onCloseEdit() {
    this.setState({
      isModalOpened: false,
      id: this.props.id,
      url: this.props.url,
      username: this.props.username,
      password: this.props.password,
      createdAt: this.props.createdAt,
    })
  }

  handleChange(e) {
    const updatedState = {};
    updatedState[e.target.name] = e.target.value;
    this.setState(updatedState);
  }

  onEditPassword(e) {
    e.preventDefault();
    this.validate(this.state.password) && this.props.editPassword(this.state)
  }

  validate(value) {
    const lower = new RegExp('^(?=.*[a-z])');
    const upper = new RegExp('^(?=.*[A-Z])');
    const special = new RegExp('^(?=.*[!@#$%^&*])');
    const number = new RegExp('^(?=.*[0-9])');
    const length = new RegExp('^(?=.{6,})');

    if(!lower.test(value)) {
      this.setState({warningMsg: 'Password must have at least 1 lowercase letter'})
    } else if(!upper.test(value)) {
      this.setState({warningMsg: 'Password must have at least 1 uppercase letter'})
    } else if(!special.test(value)) {
      this.setState({warningMsg: 'Password must have at least 1 special character'})
    } else if(!number.test(value)) {
      this.setState({warningMsg: 'Password must have at least 1 number'})
    } else if(!length.test(value)) {
      this.setState({warningMsg: 'Password length must have more than 5 letters'})
    } else {
      this.setState({warningMsg: ''})
      this.onCloseEdit()
      return true
    }
  }

  render() {
    return (
      <div>
        <div>
          <Button 
            onClick={this.onClickEdit.bind(this)} 
            bsSize="xsmall"
            bsStyle="primary">Edit
          </Button>
        </div>
        <Modal show={this.state.isModalOpened} onHide={this.onCloseEdit.bind(this)}>
           <Modal.Header closeButton>
            <Modal.Title>Edit Password Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onEditPassword.bind(this)}>
              <FormGroup
                controlId="url"
              >
                <ControlLabel>Url:</ControlLabel>
                <FormControl
                  type="text"
                  name="url"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.url}
                  placeholder="Enter text"
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Username:</ControlLabel>
                <FormControl
                  type="text"
                  name="username"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.username}
                  placeholder="Enter username"
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password:</ControlLabel>
                <FormControl
                  type="password"
                  name="password"
                  onChange={this.handleChange.bind(this)}
                  value={this.state.password}
                  placeholder="Enter Password"
                />
                <FormControl.Feedback />
                <HelpBlock>Password at least must have one uppercase, lowercase, number, special character and more than 5 character length</HelpBlock>
              </FormGroup>
              
              <div><p style={{color:'red'}}>{this.state.warningMsg}</p></div>
              <br/>
              <div>
                <Button type="submit" bsStyle="primary">Save</Button>
              </div>
              
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editPassword: data => dispatch(editPassword(data)),
})

export default connect(null, mapDispatchToProps)(EditPassword);