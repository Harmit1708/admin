import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'
import { StudentContext } from "../App";
import {useContext} from 'react'


function Allstudents() {

    let context = useContext(StudentContext);

    let handleDelete = (i) => {
      let newArray = [...context.students];
      newArray.splice(i,1);

      context.setStudents(newArray);
  }
  return<>
      <Table className="Allstu" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Class</th>
          </tr>
        </thead>

        <tbody>
          {
            context.students.map((e,i) => {
            return (
                  <tr key={i}>
                    <td>{i+1}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.mobile}</td>
                    <td>{e.class}</td>
                    <td>
                      <Button variant="danger" onClick={() => handleDelete(i)}>Delete</Button>
                      <span>&nbsp;&nbsp;</span>
                      <Link to={`/edit-student/${i}`}>
                        <Button variant="primary">Edit</Button>
                      </Link>


                        {/* <Button variant="primary" onClick={()=> navigate('/edit-student/' +i)}>Edit</Button> */}
                    </td>
                  </tr>
              );
            })
          }
        </tbody>
      </Table>
    </>
}

export default Allstudents;
