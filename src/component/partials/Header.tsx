import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
const Header = () => {
    const navigation = [
        {name: 'Home', href : '#service' },
        {name: 'Blog', href : '#recent-work' },
        {name: 'Contact Us', href : '#technologies' },
        {name: 'Policy', href : '#hiredevlopers' },
    ] 
  return (
<>
<header>
<Navbar expand="lg" className="">
          <Container fluid>
            <Navbar.Brand href="/"><Image src="/images/caribbean-logo.png" alt ="caribbean" width={108} height={72}/> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                <Image src="/images/caribbean-logo.png" alt ="caribbean" width={108} height={72}/> 
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3 gap-lg-4">
                    {navigation.map((item)=>(
                        <Nav.Link href={item.href} key={item.name}>
                           {item.name}
                        </Nav.Link>
                    ))}
                
               
                </Nav>
                <Stack direction="horizontal" gap={0} className='flex-lg-row flex-column align-items-start gap-lg-3 gap-2'>
                    <Link href="/" className='btns  btn_primary btn_md '>Login</Link>
                    <Link href="/" className='btns btn_md btn_secondary'>Register</Link>
                </Stack>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        </header>
</>
    )
}

export default Header