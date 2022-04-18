import { useEffect, useState } from "react";

  

  export const ShowStudents = () => {
   const [show,setShow]=useState([])
   useEffect(()=>{
    getData();

   },[])


    const getData= ()=>{
      fetch('http://localhost:8000/students')
    .then(response => response.json())
    .then(data => 
      setShow(data))
      console.log({show});

    };



    return (

      <div>
        <div className="controls">
          <div>
            Sort By:{}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name  </th>
              <th>Last Name  </th>
              <th>Email  </th>
              <th>Gender  </th>
              <th>Age  </th>
              <th>10th Score  </th>
              <th>12th Score  </th>
              <th>Branch  </th>
            </tr>
          </thead>
          {show.map((e)=>(

<tbody className="tbody">
            {/* populate all rows like below: */}
            <tr className="row">
              <td  className="first_name">{e.first_name}  </td>
              <td className="last_name">{e.last_name}  </td>
              <td className="email">{e.email}  </td>
              <td className="gender">{e.gender}  </td>
              <td className="age">{e.age}  </td>
              <td className="tenth_score">{e.tenth_score}  </td>
              <td className="twelth_score">{e.twelth_score}  </td>
              <td className="preferred_branch">{e.preferred_branch}  </td>
            </tr>
          </tbody>
          ))}
          
        </table>
      </div>
    );
  };
 