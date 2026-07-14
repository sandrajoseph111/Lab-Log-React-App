import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3000/view-logs").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(

            (error) => {
                console.log(error)

            }

        )
    }

    useEffect(
        () => {
            fetchData()
        }, []
    )

  return (
    <div>
        <NavigationBar />

        <h2 style={{ color: "#1565C0", textAlign: "center", fontFamily: "Montserrat" }}>
                 View Students</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Semester</th>
                        <th scope="col">Course</th>
                        <th scope="col">System Number</th>
                        <th scope="col">Login Time</th>
                        <th scope="col">Loguout Time</th>
                        <th scope="col">Date</th>
                        


                    </tr>
                </thead>
                <tbody>

                    {data.map(

                        (data, index) => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.dept}</td>
                                    <td>{data.sem}</td>
                                    <td>{data.course}</td>
                                    <td>{data.systemNumber}</td>
                                    <td>{data.loginTime}</td>
                                    <td>{data.logoutTime}</td>
                                    <td>{data.date}</td>
                                    
                                </tr>
                            )
                        }

                    )}

                </tbody>
            </table>

    </div>
  )
}

export default View