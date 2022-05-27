import React from 'react';
import './Table.css';

const Table = (props) => {
    return (
        <div style={{textAlign: 'center', margin: '3rem 0'}}>
           <table>
               <tr>
                   <th>First Name</th>
                   <th>Last Name</th>
                   <th>Email</th>
               </tr>
               {props.data.map((item) => {
                  return (
                      <>
                       <tr>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                     </tr> 
                      </>
                  )   
               })}
           </table>
        </div>
    );
};

export default Table;