import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { StudentSidebarData } from './StudentSidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { Container } from 'react-bootstrap';
import logo from '../../pseudoDb/acadbase-logo.png'
import Accounts from '../headerComponents/Accounts'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'



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
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const setTitlePage = () => {

      document.getElementById("mainTitle").innerHTML = sessionStorage.getItem("pageTitle");

    console.log("working");

  };
  
  return (
    <>
      <WholeNav>
        <IconContext.Provider value={{ color: '#fff' }}>
          <Row onClick={showSidebar}>
            <Navi >
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
                
                <Col lg={7}>
                 <h1 id="mainTitle" className="text-light">
                    Dashboard
                      
                  </h1> 
                </Col>
    
                <Col lg={2}>
                  <Accounts />
                </Col>
            </Navi>
          </Row>
          <div className="color-bar"></div>
          <SidebarNav sidebar={sidebar} onClick={setTitlePage}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {
                //if stundent:
                StudentSidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
                })
                
                //if admin:
                // SidebarData.map((item, index) => {
                //   return <SubMenu item={item} key={index} />;
                //   })
                }
            </SidebarWrap>
          </SidebarNav>
        </IconContext.Provider>
      </WholeNav>
      
    </>
  );
};

export default Sidebar;