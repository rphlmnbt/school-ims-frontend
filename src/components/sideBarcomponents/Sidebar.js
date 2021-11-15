import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { StudentSidebarData } from './StudentSidebarData';
import { ProfSidebarData } from './ProfSidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Container } from 'react-bootstrap';
import logo from '../../pseudoDb/acadbase-logo.png'
import Accounts from '../headerComponents/Accounts'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'
import userService from '../../services/user.service'



const Navi = styled.div`
  background: #710E1D;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
`;

const SidebarNav = styled.nav`
  background: #808080;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const WholeNav = styled.nav`
  position: -webkit-sticky;
  position: sticky;
`;


const Sidebar = () => {
  
  const [role,setRole] = useState(userService.getCurrentUserRole);
  console.log(role)

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const setTitlePage = () => {

      document.getElementById("mainTitle").innerHTML = sessionStorage.getItem("pageTitle");

    console.log("working");

  };
  
  return (
      <div>
        <Navbar className="navbar py-0" sticky="top" variant="light" expand="lg">
          <IconContext.Provider value={{ color: '#fff' }}>
            <Row onClick={showSidebar} className="w-100">
                <Col lg={3} className="d-flex justify-content-start">
                  <NavIcon to='#'>
                    <FaIcons.FaBars/>
                  </NavIcon>
                  <LinkContainer to="/tracevax/login">
                    <Navbar.Brand>
                        <img 
                            src={logo} 
                            alt="acadbase-logo"
                            style={{padding : "5px"}}
                            height={"80px"}
                        />
                        <span className="brand-label">
                            ACADBASE
                        </span>
                    </Navbar.Brand>
                  </LinkContainer>
                  </Col>
                  
                  <Col lg={6} className="vertical-center justify-content-center">
                  <h1 id="mainTitle" className="text-light">
                      Dashboard
                        
                    </h1> 
                  </Col>
                  <Col lg={3} className="d-flex justify-content-end vertical-center">
                    <Accounts />
                  </Col>
            </Row>
            <SidebarNav sidebar={sidebar} onClick={setTitlePage}>
              <SidebarWrap>
                <div className="d-flex justify-content-end pr-4">
                  <NavIcon to='#'>
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </NavIcon>
                </div>
                {role === "admin" 
                      && SidebarData.map((item, index) => {
                          return <SubMenu item={item} key={index}/>
                        })          
                }
                {role === "student" 
                      && StudentSidebarData.map((item, index) => {
                         return <SubMenu item={item} key={index} />;
                         })        
                }
                {role === "professor" 
                      && ProfSidebarData.map((item, index) => {
                         return <SubMenu item={item} key={index} />;
                         })        
                }
              </SidebarWrap>
            </SidebarNav>
          </IconContext.Provider>
        </Navbar>
        <div className="color-bar"></div>
      </div>
  );
};

export default Sidebar;