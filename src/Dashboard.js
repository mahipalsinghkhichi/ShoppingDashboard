import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='mt-2' style={{ height: "80px", backgroundColor: "#0B0B45" }}>
        <img
          className="rounded-circle border border-light m-2"
          src="download.png"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "30px"
          }}
        />
        <Navbar.Brand className="text-light">
          Flexagn
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          style={{
            background: "#000000",
            marginRight: '10px'
          }}
        />
        <Nav id='respnsive-navbar-nav'>
          <NavDropdown title="location"
          style={{
            color:" #ffffff",
            backgroundColor:"red",
            borderRadius: "5px",
            marginLeft:5
          }}
          >
            <NavDropdown.Item>
              <NavLink>
                <label className="btn btn-warning">StateRegis</label>
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink >
                <label className="btn btn-warning">CityRegis</label>
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink >
                <label className="btn btn-warning">AreaRegis</label>
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
       
        

      </Navbar>

    </>
  )
}

export default Dashboard;