import React from "react";
import * as Styles from "./style";
import data from '../../data.json';
import Car from '../../images/sport-car.png'

export default function MainConatainer() {
    return (
        <Styles.MainConatainer>
            <Styles.HeadeTextContainer>
                <h1>
                    Drive the experience, travel the extraordinary. Your journey, our passion....
                    <img src={Car} alt="sports-car" />
                </h1>
            </Styles.HeadeTextContainer>
            <Styles.PriceHead>
                <h1>
                    Explore Our Prices
                </h1>
            </Styles.PriceHead>
            {data?.map((value, index) => {
                console.log(value.start)

                return (
                    <Styles.PriceCard key={index} setBg = {index}>
                        <p>
                            {value.start} - {value.end}
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