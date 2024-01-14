import React from "react";
import * as Styles from "./style";
import data from '../../data.json';
import Car from '../../images/sport-car.png'

export default function MainConatainer({ trackRef, isScroll }) {
    return (
        <Styles.MainConatainer>
            <Styles.ProfileDiv size="130px" showdiv={isScroll} ismargin="true">
                <img src={Car} alt="Profile" width={100} height={100} />
            </Styles.ProfileDiv>
            <Styles.HeadeTextContainer ref={trackRef}>
                <h1>
                    Drive the experience, travel the extraordinary. Your journey, our passion....
                    <img src={Car} alt="sports-car" />_____
                </h1>
            </Styles.HeadeTextContainer>
            <Styles.PriceHead>
                <h1>
                    Explore Our Prices
                </h1>
            </Styles.PriceHead>
            {data?.map((value, index) => {
                return (
                    <Styles.PriceCard key={index} setbg={index}>
                        <p>
                            {value.start} &nbsp;<i className="fa-solid fa-arrow-right-arrow-left"></i>&nbsp; {value.end}
                        </p>
                        <p>
                            {value.price}
                        </p>
                    </Styles.PriceCard>
                )
            })}
        </Styles.MainConatainer>
    )
}
