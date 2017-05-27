import React from 'react';
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import { addPassword } from '../actions';

const styles = {
    form: {
      "padding": 20,
    }
  }

class AddPassword extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: {
        url: '',
        username: '',
        password: '',
      },
      isLowerCase: false,
      isUpperCase: false,
      isSpecial: false,
      isNumber: false,
      isLength5: false,
      isSubmitted: false
    }
  }

  validate(value) {
    const lower = new RegExp('^(?=.*[a-z])');
    const upper = new RegExp('^(?=.*[A-Z])');
    const special = new RegExp('^(?=.*[!@#$%^&*])');
    const number = new RegExp('^(?=.*[0-9])');
    const length = new RegExp('^(?=.{6,})');

    if(lower.test(value)) {
      this.setState({isLowerCase:true})
    } else {
      this.setState({isLowerCase:false})
    }

    if(upper.test(value)) {
      this.setState({isUpperCase: true})
    } else {
      this.setState({isUpperCase: false})
    }

    if(special.test(value)) {
      this.setState({isSpecial: true})
    } else {
      this.setState({isSpecial: false})
    }

    if(number.test(value)) {
      this.setState({isNumber: true})
    } else {
      this.setState({isNumber: false})
    }

    if(length.test(value)) {
      this.setState({isLength5: true})
    } else {
      this.setState({isLength5: false})
    }

  }

  validationSuccess() {
    if(this.state.isLowerCase && this.state.isUpperCase && this.state.isSpecial && this.state.isNumber && this.state.isLength5) {
      return true
    } else {
      return false
    }
  }

  onAddPassword(e) {
    e.preventDefault()
    if(this.validationSuccess()) {
      this.setState({
        isSubmitted: true
      })
      this.props.addPassword(this.state.userInput)
    } else {
      console.log('password belum matching')
    }

    const back = {
      userInput: {
        url: '',
        username: '',
        password: '',
      },
      hasLowerCase:false,
      hasUpperCase:false,
      hasNumber:false,
      hasSpecial:false,
      has5Char:false
    }
    this.setState(back)
  }


  handleChange(e) {
   const updateState = this.state.userInput;
   updateState[e.target.name] = e.target.value;
   this.setState(updateState);
   this.validate(this.state.userInput.password);
  }

  render() {
    return (
      <div className="container">
        { (this.state.isSubmitted) && <Redirect to={{
              pathname: '/password-list',
            }}/> }
        <form style={styles.form} onSubmit={this.onAddPassword.bind(this)}>
          <FormGroup
            controlId="url"
          >
            <ControlLabel>Url:</ControlLabel>
            <FormControl
              type="text"
              name="url"
              onChange={this.handleChange.bind(this)}
              value={this.state.userInput.url}
              placeholder="Enter url"
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Username:</ControlLabel>
            <FormControl
              type="text"
              name="username"
              onChange={this.handleChange.bind(this)}
              value={this.state.userInput.username}
              placeholder="Enter username"
            />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Password:</ControlLabel>
            <FormControl
              type="password"
              name="password"
              onChange={this.handleChange.bind(this)}
              value={this.state.userInput.password}
              placeholder="Enter Password"
            />
            <FormControl.Feedback />
            <HelpBlock>Password at least must have one uppercase, lowercase, number, special character and more than 5 character length</HelpBlock>
          </FormGroup>
          
          <div>[ <label style={{color:'green'}}> {this.state.isLowerCase ? ' v ' : '' } </label> ] Password at least must have 1 lowercase character</div>
          <div>[ <label style={{color:'green'}}> {this.state.isUpperCase ? ' v ' : '' } </label> ] Password at least must have 1 uppercase character</div>
          <div>[ <label style={{color:'green'}}> {this.state.isSpecial ? ' v ' : '' } </label> ] Password at least must have one special character (#$@!&%...)</div>
          <div>[ <label style={{color:'green'}}> {this.state.isNumber ? ' v ' : '' } </label> ] Password at least must have 1 number</div>
          <div>[ <label style={{color:'green'}}> {this.state.isLength5 ? ' v ' : '' } </label> ] Password at least must have length more than 5 character</div>
          <br/>
          <div>
            <Button type="submit" bsStyle="primary">Save</Button>
          </div>
          
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addPassword: passData => dispatch(addPassword(passData)),
})

export default connect(null, mapDispatchToProps)(AddPassword);

