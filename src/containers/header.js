import React from 'react'
import { Header } from '../components'
import *  as ROUTES from '../constants/routes'
import logo from '../logo.png'

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt='Logo' />
                <Header.Group>
                    <Header.TextLink>Home</Header.TextLink>
                    <Header.TextLink>Blog</Header.TextLink>
                </Header.Group>
                <Header.ButtonLink bgcolor='orangered' to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}