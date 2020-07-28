import * as React from "react";

import FormItem from "../FormItem";

const BasicDetails = ()=> {
  return (
    <div className="step-form">
      <FormItem
        placeholder="First Name"
        name="firstName"
      />
    </div>
  )
}

export default BasicDetails;