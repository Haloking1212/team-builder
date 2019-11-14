import React from "react";

function FormInfo(props) {
  console.log(props, "props");
  return (
    <div>
      {props.formsList.map(form => {
        return (
          <div>
            <p>{form.name}</p>
            <p>{form.email}</p>
            <p>{form.role}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FormInfo;
