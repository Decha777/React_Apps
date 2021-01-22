import React from 'react';
import { Footer, Form, Button } from '../components';
import { FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Contact us.</Footer.Title>
            <Footer.Row center>
                    <Form formWidth='70%'  >
                        <Form.Input placeholder='Enter your mail here' />
                        <Button >Subscribe Now</Button>
                    </Form>
            </Footer.Row>
            <Footer.Break />
            <Footer.Row center>
                <Footer.Icon><FaFacebook /></Footer.Icon>
                <Footer.Icon><FaTelegram /></Footer.Icon>
                <Footer.Icon><FaInstagram /></Footer.Icon>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Wakanda Q/A</Footer.Text>
        </Footer>

    );
}

