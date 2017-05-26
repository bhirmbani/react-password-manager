import React from 'react';
import { Table } from 'react-bootstrap';

const TableCom = () => (
  <div className="container">
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>URL</th>
          <th>Username</th>
          <th>Password</th>
          <th>CreatedAt</th>
          <th>UpdatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  </div>
)

export default TableCom