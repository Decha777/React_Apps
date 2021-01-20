import React from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import GridLayout from '../GridLayout'
import { CardContainer } from '../containers/card'
// import { Loading } from '../components'



export default function Home() {
    return (
        <>
            <GridLayout>
                <HeaderContainer />
                <main>
                   <CardContainer />
                    {/* <Loading height='20rem' width='20rem'/> */}
                </main>
                

                <FooterContainer />
            </GridLayout>
        </>
    )
}