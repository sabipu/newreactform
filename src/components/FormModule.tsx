import * as React from "react";

import FormItem from "./FormItem";

const FormModule = ({ ...props }) => {
  const formItems = props.data;
  const formAction = props.change;

  console.log(props);

  return (
    <>
    {formItems.map((formItem, index) => (
      <div key={index}>
        <FormItem data={formItem} change={formAction} />
      </div>
    ))}
    </>
  )
}

export default FormModule;