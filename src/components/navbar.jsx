import React from "react";
import {Image} from "@nextui-org/react";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Navbarra() {
    return (
        <Navbar position="static">
            <NavbarBrand>
                <Image
                    width={60}
                    height={40}
                    src="data:image/jpeg;base64,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"
                />
                <p className="font-bold text-inherit">BUCKS</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Bucks Dashboard
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
