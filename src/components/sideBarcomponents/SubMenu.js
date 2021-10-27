import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  height: 60px;
  &:hover {
    
    background: #440710;
    cursor: pointer;
    
  }

`;


const SidebarData = styled.div`
 color: white; 
 list-style: none;
 text-decoration: none;
  font-size: 18px;
  
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;



const DropdownLink = styled(Link)`
  background: #707070;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:hover {
    color: white;
    background: #440710;
    cursor: pointer;
  }

`;



const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => {
    setSubnav(!subnav);

  }

 

  function setTitle() {
    sessionStorage.clear();
    sessionStorage.setItem("pageTitle", item.mainTitle); 
    console.log(sessionStorage.getItem("pageTitle"));
  }

  return (
    <>

      <SidebarLink to={item.path} onClick={item.subNav && showSubnav || setTitle}>
            <SidebarData>
            {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </SidebarData>
            {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}

      </SidebarLink>
      

      {subnav &&
        item.subNav.map((item, index) => {
          return (
           
                <DropdownLink to={item.path} key={index} onClick={ setTitle}>
                    {item.icon}
                  <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            
          );
        })}
    </>
  );
};

export default SubMenu;