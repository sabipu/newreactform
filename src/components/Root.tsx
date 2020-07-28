import * as React from "react";

import MultiStepForm from './MultiStepForm';

const Root = () => {

  const formStructure = {
    "step1": {
      "stepNumber": 1,
      "fields": [
        {
          "name": "First Name",
          "type": "text",
        },
        {
          "name": "Middle Name",
          "type": "text",
        },
        {
          "name": "Last Name",
          "type": "text",
        },
        {
          "name": "Email",
          "type": "email",
        },
        {
          "name": "Phone",
          "type": "tel",
        }
      ]  
    },
    "step2": {
      "stepNumber": 2,
      "fields": [
        {
          "name": "Email",
          "type": "text",
        },
        {
          "name": "Phone",
          "type": "file",
        }
    }
  }

  return (
    <div>
      <MultiStepForm form={formStructure} />
    </div>
  );
};

export default Root;