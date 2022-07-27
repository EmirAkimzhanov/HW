import React from "react";

const section = (props) => {
  return (
    <div>
      Section
      {props.users.map((e, index) => {
        console.log(e);
        return (
          <table class="table">
            <tbody>
              <tr>
                <th scope="row">{index}</th>
                <td colspan="2">{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.age}</td>
                <td>{e.id}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default section;
