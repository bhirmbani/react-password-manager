import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPasswords } from '../actions';

class TableCom extends React.Component {

  componentDidMount () {
    this.props.getPasswords()
    console.log(this.props.passwords)
  }

  render() {
    return (
      <div className="container">
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>URL</th>
              <th>Username</th>
              <th>Password</th>
              <th>created At</th>
              <th>updated At</th>
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
                    </tr>
            })}
          </tbody>
        </Table>
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
  getPasswords: () => dispatch(getPasswords())
})


export default connect(mapStateToProps, mapDispatchToProps)(TableCom)