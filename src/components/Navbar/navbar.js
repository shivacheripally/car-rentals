import React from "react";
import * as Styles from '../MainBody/style';
import ShivaProfile from '../../images/shiva-pic.jpg';

export default function Navbar({ showNavDiv, handleTargetRef }) {
    return (
        <Styles.NavbarDiv showdiv={showNavDiv ? 'true' : ''}>
            <Styles.InfoDiv>
                <Styles.ProfileDiv size="80px" showdiv={showNavDiv ? 'true' : ''} shownavdiv={showNavDiv ? 'true' : 'false'}>
                    <img src={ShivaProfile} width={80} height={80} alt="Shiva-Profile"/>
                </Styles.ProfileDiv>
                <Styles.Info>
                    <b>Shiva Car Rentals And Tarvels</b>
                    <Styles.Contact>
                        <span>Phone: <a href="tel">9652123092</a></span>
                        <span onClick={handleTargetRef}>My Car</span>
                    </Styles.Contact>
                </Styles.Info>
            </Styles.InfoDiv>
        </Styles.NavbarDiv>
    )
}
