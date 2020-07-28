import * as React from "react";

const FormItem = ({...props}) => {
  const name = props.data.name.toLowerCase().replace(/\s/g, ''));
  return (
    <div>
      <input type={props.data.type} placeholder={props.data.name} name={name} onChange={props.change} />
    </div>
  );
}

export default FormItem;