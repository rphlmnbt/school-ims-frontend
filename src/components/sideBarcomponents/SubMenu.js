import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    
    background: #440710;
    cursor: pointer;
    
  }

`;


const SidebarLink2 = styled(Link)`
  display: flex;
  color: white;
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

 

  const setTitle = () => {
    sessionStorage.clear();
    sessionStorage.setItem("pageTitle", item.mainTitle); 
    console.log(sessionStorage.getItem("pageTitle"));
  }

  return (
    <>

      <SidebarLink>
        <div className ="w-100" >
          <SidebarLink2 to={item.path} onClick={setTitle}>
            
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
          </SidebarLink2>
        </div>
        <div  onClick={item.subNav && showSubnav}>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
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