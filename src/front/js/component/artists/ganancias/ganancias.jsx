import React, {  useEffect, useState } from "react";
import "/workspace/proyecto-4geeks/src/front/styles/Table.css";
import {
  db,
  fetchData,
} from "/workspace/proyecto-4geeks/src/front/js/firebase/firebase.js";
import { useAuth } from "../../../context/authContext.js";
function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData("orderData").then((d) => setData(d));
  }, []);

  console.log("data", data);
  const {user} = useAuth()
  
  
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

{data
    .filter((datasource) =>  datasource.artistId === user.uid )
    .map((data, index) => {
            const payerName = data.payer?.name || {};

            const fullName = `${payerName.given_name || ""} ${
              payerName.surname || ""
            }`.trim();
            const amount = data.purchase_units.reduce((acc, val) => {
              const thisValue = +(val.amount?.value || 0);
              return acc + thisValue;
            }, 0);
            return (
              <tr key={index}>
                <td>{fullName}</td>
                <td>{amount}</td>
                <td>{new Date(data.create_time).toLocaleString()}</td>
                <td>{data.payer?.email_address}</td>
              </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
