
import React, {  useContext, useEffect, useState } from 'react'
import "/workspace/proyecto-4geeks/src/front/styles/Table.css";


function Table() {
  const [data, setdata]  = useState([
    { nombre: "Producto 1", precio: 10, fecha: "2022-01-01", email:"ejm@Gmail.com" },
    { nombre: "Producto 2", precio: 20, fecha: "2022-01-02", email:"ejm@Gmail.com" },
    { nombre: "Producto 3", precio: 30, fecha: "2022-01-03", email:"ejm@Gmail.com" }
  ]) 
  useEffect(() => { 
    
  },[]) 

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Fecha</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nombre}</td>
              <td>{item.precio}</td>
              <td>{item.fecha}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
