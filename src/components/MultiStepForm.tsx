import * as React from "react";

import FormModule from "./FormModule";

const MultiStepForm = ({ form }) => {
  var step1 = [];
  var step2 = [];
  var step3 = [];

  const [ activeStep, setActiveStep ] = React.useState(1);

  const [ firstname, setFirstName ] = React.useState('');
  const [ middlename, setMiddleName ] = React.useState('');
  const [ lastname, setLastName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ phone, setPhone ] = React.useState('');

  if(form !== undefined) {
    for(var i=0; i < form.step1.fields.length; i++) {
      step1[i] = form.step1.fields[i];
    }
    for(var j=0; j < form.step2.fields.length; j++) {
      step2[j] = form.step2.fields[j];
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    switch(e.target.name) {
      case "firstname":
        setFirstName(e.target.value);
      case "middlename":
        setMiddleName(e.target.value);
      case "lastname":
        setLastName(e.target.value);
      case "phone":
        setPhone(e.target.value);
      case "email":
        setEmail(e.target.value);
      default:
        return;
    }
  }

  const nextButton = (e) => {
    e.preventDefault();

    handleStepChange(activeStep + 1);

    if(activeStep === 1) {
      console.log(`
        Firstname: ${firstname}
        Middlename: ${middlename}
        Lastname: ${lastname}
        Email: ${email}
        Phone: ${phone}
      `);
    } else {
      console.log(activeStep);
    }
    
  }

  const prevButton = (e) => {
    handleStepChange(activeStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>Step {activeStep}</h1>
      {(() => {
        if(activeStep === 2) return (
          <FormModule data={step2} change={handleChange} />
        ) else if(activeStep === 3) return(
          <FormModule data={step3} change={handleChange} />
        ) else return (
          <FormModule data={step1} change={handleChange} />
        )
      })()}
      
      <div className="formControls">
        <button className="firstNext" onClick={prevButton}>Back</button>
        <button className="firstNext" onClick={nextButton}>Next</button>
        <input type="submit"/>
      </div>
    </form>
  )
}

export default MultiStepForm;


// const handleSubmit = (e) => {
//   e.preventDefault();
// }

// const handleChange = (e) => {
//   switch(e.target.name) {
//     case "fname":
//       setFname(e.target.value);
//     case "mname":
//       setMname(e.target.value);
//     case "lname":
//       setLname(e.target.value);
//     case "phone":
//       setPhone(e.target.value);
//     case "email":
//       setEmail(e.target.value);
//     default:
//       return;
//   }
// }

