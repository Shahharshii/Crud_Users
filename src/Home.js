import React, { Component } from 'react'
import { ProductConsumer } from './Context';
import { Table, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className='container'> 
          <h3>Users</h3>
        <ProductConsumer>
          {(value)=> {
           return(
            <Table size="lg" variant ="dark" striped bordered hover>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
                {value.Alldata.map(product => {
                  return (
                   <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.username}</td>
                    <td>{product.email}</td>
                    <td><Button size='sm' variant='primary' onClick={()=>{value.onEdit(product.id)}}>Edit</Button> |  <Button size='sm' variant='danger' onClick={()=>{value.onDelete(product.id)}}>Delete</Button> </td>
                   </tr> 
                  )
                })}
              </tbody>
            </Table>
           )
          }}
        </ProductConsumer>
      </div>
    )
  }
}
