import React from 'react';
import { Footer,Form ,Button} from '../components';
import { FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Row center>
                <Footer.Icon><FaFacebook /></Footer.Icon>
                <Footer.Icon><FaTelegram /></Footer.Icon>
                <Footer.Icon><FaInstagram /></Footer.Icon>
                <Form formWidth='60%' >
                    <Form.Input placeholder='Enter your mail here' />
                    <Button bgcolor='red' btnWidth='fit-content'>Subscribe Now</Button>
                </Form>

            </Footer.Row>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Centre</Footer.Link>
                    <Footer.Link href="#">Terms of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Wakanda Q/A</Footer.Text>
        </Footer>

    );
}

