import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const Add = () => {

    
    const [input, changeInput] = useState(


        {

            name: "",
             dept: "",
              sem: "",
              course: "",
               systemNumber:"",
               loginTime:"",
               logoutTime:"",
               date:"",
               

        }



    )
    const inputHandeler=(event)=>
    {

        changeInput({...input,[event.target.name]: event.target.value})

    }

    const readValue =()=>
    {


        console.log(input)
        axios.post("http://localhost:3000/lab-entry",input).then(

            (response) =>{

                console.log(response.data)
                alert("Student added suceessfully")
            }
        ).catch((error) => {
    console.log(error.response);
    console.log(error.response?.data);
    console.log(error.response?.status);
    alert("Failed to add Student");
});


    }
  return (
    <div>
            <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" />
                    <div className="row g-3">



                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Department</label>
                            <input type="text" className="form-control" name="dept" value={input.dept} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Semester</label><br></br>
                            <input type="text" className="form-control" name="sem" value={input.sem} onChange={inputHandeler} />
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Course</label>
                            <input type="text" className="form-control"name="course" value={input.course} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">System Number</label>
                            <input type="text" className="form-control" name="systemNumber" value={input.systemNumber} onChange={inputHandeler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Login Time</label>
                            <input type="text" className="form-control" name="loginTime" value={input.loginTime} onChange={inputHandeler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Logout Time</label>
                            <input type="text" className="form-control " name="logoutTime" value={input.logoutTime} onChange={inputHandeler}/>
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Date</label>
                            <input type="text" className="form-control" name="date" value={input.date} onChange={inputHandeler} />
                        </div>


                        



                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                        </div>
                    </div>




                </div>
            </div>


    </div>
  )
}

export default Add