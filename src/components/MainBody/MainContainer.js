import React, { useState, useEffect } from "react";
import * as Styles from "./style";
import data from '../../data.json';
import Car from '../../images/sport-car.png';
import ShivaProfile from '../../images/shiva-pic.jpg';
import CarPic1 from '../../images/car-pic1.jpeg';
import CarPic2 from '../../images/car-pic2.jpeg';
import CarPic3 from '../../images/car-pic3.jpeg';
import CarPic4 from '../../images/car-pic4.jpeg';

export default function MainConatainer({ trackRef }) {

    return (
        <Styles.MainConatainer>
            <Styles.ProfileDiv showdiv="true" ref={trackRef} size="130px" ismargin="true">
                <img src={ShivaProfile} alt="ShivaProfile" width={130} height={130} />
            </Styles.ProfileDiv>
            <Styles.HeadeTextContainer>
                <h1>
                    Drive the experience, travel the extraordinary. Your journey, our passion....
                    <img src={Car} alt="sports-car" />_____
                </h1>
            </Styles.HeadeTextContainer>
            <Styles.PriceHead>
                <h1>
                    Explore Our Price
                </h1>
            </Styles.PriceHead>
            <Styles.PriceCard>
                <h1>
                    14/- Per Hour
                </h1>
                <p>Note: 
                    <span>Min travel distance - 300km</span>
                    <span>Extra 500/- per day for driver</span>
                </p>
            </Styles.PriceCard>
            <Styles.CarImagesDiv id="CarImages">
                <img src={CarPic1} alt="CarPic1" />
                <img src={CarPic2} alt="CarPic2" />
                <img src={CarPic3} alt="CarPic3" />
                <img src={CarPic4} alt="CarPic4" />
            </Styles.CarImagesDiv>
        </Styles.MainConatainer>
    )
}
