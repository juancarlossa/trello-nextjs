import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Avatar } from '@nextui-org/react'
import { AuthButton } from '../Button/auth-button-client'

export default function Nav ({ session, avatarUrl }: { session: any, avatarUrl: string }) {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">JUANK</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src={avatarUrl}
          />
        </NavbarItem>
        <NavbarItem>
          <AuthButton session={session} />
        </NavbarItem>
      </NavbarContent>
    </Navbar >
  )
}
