import bg from './logo.jpg';
import bg1 from './facebook.png';
import bg2 from './email.png';
import bg3 from './linkedin.png';
import bg4 from './twitter.png';
import React, { useState } from 'react';
import {Outlet,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Col,Row} from 'reactstrap';
import {NavItem,NavLink,DropdownMenu,DropdownItem,NavbarToggler,NavbarBrand,Collapse,Button} from 'reactstrap';

function X1()
{
	const [a,b]=useState(false); 
	const c=()=>b(!a);
  
	return(
    
	<>
  
    <Navbar bg="white" expand="sm" className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
      <NavbarBrand><img src={bg} class="abi1"/>
</NavbarBrand>

        <NavbarToggler onClick={c}/>
        
     <Collapse isOpen={a} navbar> 
     <Nav className="mt-auto" navbar>
     <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}><Link to='/'>Layout</Link></h5></NavLink></NavItem>
     <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}><Link to='/homepage'>Home</Link></h5></NavLink></NavItem> 
     <NavItem ><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Showcase</h5></NavLink></NavItem>
      <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Blog</h5></NavLink></NavItem>
      <NavItem><NavLink><h5 class="hov" style={{'padding':'10px','font-size':'18px'}}>Contact</h5></NavLink></NavItem>
      <NavItem><NavLink style={{'padding':'10px'}}><Button style={{'background':'green'}}>Try Superblog for Free</Button></NavLink></NavItem>
      

     </Nav>
     </Collapse>

     </Navbar><br/>
  
    <Outlet/>
   </>
   
		);
}
export default X1; 