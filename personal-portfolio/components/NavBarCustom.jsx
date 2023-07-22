import React from 'react'

import {FaBeer} from "react-icons/fa";
import {Navbar, Button, Link, Text} from '@nextui-org/react';



const NavBarCustom = () => {
  return (
    
        // <Navbar shouldHideOnScroll variant="sticky" className="w-[100%]" className="bg-slate-700">
        //     <Navbar.Brand>
        //         <FaBeer/>
        //         <Text b color="inherit" hideIn='xs'>Joel Papineau</Text>
        //     </Navbar.Brand>
        //     <Navbar.Content hideIn="xs" variant="underline">
        //         <Navbar.Link isActive href='/'>Home</Navbar.Link>
        //         <Navbar.Link  href='/'>About</Navbar.Link>
        //         <Navbar.Link href='/'>Projects</Navbar.Link>
        //         <Navbar.Link href='/'>CV</Navbar.Link>
        //     </Navbar.Content>
        //     <Navbar.Content>
        //         <Navbar.Link href='/'>Contact</Navbar.Link>
        //         <Navbar.Item>
        //             <Button auto flat as={Link} href='#'>
        //                 GitHub
        //             </Button>
        //         </Navbar.Item>
        //     </Navbar.Content>
        // </Navbar>

        <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
          <FaBeer/>
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>



   
  )
}

export default NavBarCustom
