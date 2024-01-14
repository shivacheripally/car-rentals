import React from "react";
import * as Styles from '../MainBody/style';

export default function Navbar({ isScroll }) {
    return (
        <Styles.NavbarDiv>
            <Styles.InfoDiv>
                <Styles.ProfileDiv size="80px" showdiv={isScroll}>
                </Styles.ProfileDiv>
                <Styles.Info>
                    <b>Shiva Car Rentals And Tarvels</b>
                    <Styles.Contact>
                        <span>Phone: <a href="tel">9848963748</a></span>
                        <span><a href="car-page">Ferrari</a></span>
                    </Styles.Contact>
                </Styles.Info>
            </Styles.InfoDiv>
        </Styles.NavbarDiv>
    )
}
