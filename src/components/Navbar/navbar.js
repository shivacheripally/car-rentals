import React from "react";
import * as Styles from '../MainBody/style';
import ShivaProfile from '../../images/shiva-pic.jpg';

export default function Navbar({ showNavDiv }) {
    return (
        <Styles.NavbarDiv showdiv={showNavDiv ? 'true' : ''}>
            <Styles.InfoDiv>
                <Styles.ProfileDiv size="80px" showdiv={showNavDiv ? 'true' : ''} shownavdiv={showNavDiv ? 'true' : 'false'}>
                    <img src={ShivaProfile} width={80} height={80}/>
                </Styles.ProfileDiv>
                <Styles.Info>
                    <b>Shiva Car Rentals And Tarvels</b>
                    <Styles.Contact>
                        <span>Phone: <a href="tel">9652123092</a></span>
                        <span><a href="#" target="CarImages">My Car</a></span>
                    </Styles.Contact>
                </Styles.Info>
            </Styles.InfoDiv>
        </Styles.NavbarDiv>
    )
}
