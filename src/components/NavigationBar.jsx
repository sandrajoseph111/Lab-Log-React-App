import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>


        <nav
                className="navbar navbar-expand-lg navbar-dark shadow"
                style={{ backgroundColor: "#0d6efd" }}
            >
                <div className="container">
                    <a
                        className="navbar-brand fw-bold fs-4"
                        href="#"
                        style={{ letterSpacing: "1px" }}
                    >
                        Lab-Entry-App
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto">
                            <Link className="nav-link text-white fw-semibold mx-2" to="/">
                                Add Student
                            </Link>

                            <Link className="nav-link text-white fw-semibold mx-2" to="/vi">
                                View Student
                            </Link>

                            
                        </div>
                    </div>
                </div>
            </nav>

    </div>
  )
}

export default NavigationBar