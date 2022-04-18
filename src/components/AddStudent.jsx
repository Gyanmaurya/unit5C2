
import { useState,useEffect } from "react";
// import { ShowStudents } from "./components/ShowStudents";
export const AddStudent = () => {

  const [show,setShow]=useState([])

  useEffect(()=>{
    getData();

   },[]);


    const getData= ()=>{
      fetch('http://localhost:8000/students')
    .then(response => response.json())
    .then(data => 
      setShow(data))
      console.log({show});

    };





  
    return (
      <form className="addstudent">
        <div>
          Firstname:{" "}
          <input onChange={(e)=> setText(e.target.value)}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
           onChange={(e)=> setText(e.target.value)}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
          onChange={(e)=> setText(e.target.value)}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
            onChange={(e)=> setText(e.target.value)}
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
            onChange={(e)=> setText(e.target.value)}
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
          onChange={(e)=> setText(e.target.value)}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
          onChange={(e)=> setText(e.target.value)}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
         onChange={(e)=> setText(e.target.value)}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
         onChange={(e)=> setText(e.target.value)}
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" onSubmit={()=>{

const payload={
  first_name,
  last_name,
  email,
  gender,
  age,
  tenth_score,
  twelth_score,
  preferred_branch


};
fetch('http://localhost:8000/students',{
  
  method:"POST",
  headers:{
     "content-type":"application/json"
  },
  body:JSON.stringify(payload)


}).then(()=>(
  getData()
))
        }} />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };