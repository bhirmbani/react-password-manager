import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const styles = {
  center: {
    "textAlign": "center"
  }
}

const JumbotronCom = () => (
  <div style={styles.center} className="container">
    <Jumbotron className="col-lg-12">
      <h1>RPM</h1>
      <p>This is React Password Manager Site!</p>
    </Jumbotron>
  </div>
  
)

export default JumbotronCom;