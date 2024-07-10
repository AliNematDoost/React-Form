import { useState } from "react";
import './assets/App.css';

const App = () => {

  const [Data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    contact : "",
    gender : "",
    subject : {
      English : false,
      Maths : false,
      Physics : false
    },
    file : null,
    url : "",
    country : "",
    about : ""
  });

  const changeHandler = (event) => {
    setData( prevData => (
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ));
  }

  const checkBoxChangeHandler = (event) => {
    setData( prevData => (
      {
        ...prevData,
        subject : {
          ...prevData.subject,
          [event.target.name] : event.target.checked
        }
      }
    ))
  }

  const fileChangeHandler = (event) => {
    setData( prevData => (
      {
        ...prevData,
        file : event.target.file
      }
    ))
  }

  const ResetHandler = () => {
    setData({
      firstName : "",
      lastName : "",
      email : "",
      contact : "",
      gender : "",
      subject : {
        English : false,
        Maths : false,
        Physics : false
      },
      file : "",
      url : "",
      country : "",
      about : ""
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Data);
  }

  return(
    <div>
      <h1> Form in React </h1>

      <form onSubmit={submitHandler}>
        <div>
          <label> First Name </label>
          <input placeholder="Enter First Name" type="text" name="firstName" value={Data.firstName} onChange={changeHandler} required/>
        </div>

        <div>
          <label> Last Name </label>
          <input type="text" placeholder="Enter Last Name" name="lastName" value={Data.lastName} onChange={changeHandler} required />
        </div>

        <div>
          <label> Enter Email </label>
          <input type="email" placeholder="Enter Email" name="email" value={Data.email} onChange={changeHandler} required />
        </div>

        <div>
          <label> Contact </label>
          <input type="tel" placeholder="Enter Mobile Number" name="contact" value={Data.contact} onChange={changeHandler} required />
        </div>

        
        <div>
          <label> Gender </label>
            <input type="radio" name="gender" value="Male" onChange={changeHandler} checked={Data.gender === "Male"} required/> Male

            <input type="radio" name="gender" value="female" checked={Data.gender === "female"} onChange={changeHandler} required /> Female

            <input type="radio" name="gender" value="other" checked={Data.gender === "other"} onChange={changeHandler} required /> Other
        </div>

        <div>
          <label> Your Best Subject </label>
          <input type="checkbox" name="English" checked={Data.subject.English} onChange={checkBoxChangeHandler}/> English

          <input type="checkbox" name="Maths" checked={Data.subject.Maths} onChange={checkBoxChangeHandler} /> Maths
 
          <input type="checkbox" name="Physics" checked={Data.subject.Physics} onChange={checkBoxChangeHandler}/> Physics
        </div>
        
        <div>
          <label> Upload Resume </label>
          <input type="file" onChange={fileChangeHandler} placeholder="Upload File" required/>
        </div>

        <div>
          <label> Enter URL </label>
          <input type="url" name="url" value={Data.url} onChange={changeHandler} required/>
        </div>

        <div>
          <label> Select your choice </label>
          <select name="country" value={Data.country} onChange={changeHandler}>
            <option value=""> Select your ans </option>
            <option value="Iran"> Iran </option>
            <option value="USA"> USA </option>
            <option value="Brazil"> Brazil </option>
            <option value="Japan"> Japan </option>
          </select>
        </div>

        <div>
          <label> About </label>
          <textarea name="about" id="about" value={Data.about} placeholder="About yourself" rows="3" onChange={changeHandler}></textarea>
        </div>

        <div align="left">
          <label>
          Submit or Reset
          </label>
        </div>

        <button onClick={ResetHandler}> Reset </button>
        <button type="submit"> Submit </button>
        
        
      </form>
      
    </div>
  );
}

export default App;