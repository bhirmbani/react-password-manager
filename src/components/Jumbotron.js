import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const styles = {
  container: {
    "textAlign": "center",
    "paddingTop": 20
  }
}

const JumbotronCom = () => (
  <div style={styles.container} className="container">
    <Jumbotron className="col-lg-12">
      <h1>RPM</h1>
      <p>This is React Password Manager Site!</p>
    </Jumbotron>
  </div>
  
)

export default JumbotronCom;