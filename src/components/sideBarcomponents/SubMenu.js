import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: white;
    background: #440710;
    cursor: pointer;
    
  }

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
  color: black;
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

 

  const setTitle = () => {
    sessionStorage.clear();
    sessionStorage.setItem("pageTitle", item.mainTitle); 
    console.log(sessionStorage.getItem("pageTitle"));
  }

  return (
    <>
    <div  onClick={setTitle}>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
    </div>
      

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