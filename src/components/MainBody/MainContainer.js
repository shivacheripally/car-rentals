import React, {useState, useEffect} from "react";
import * as Styles from "./style";
import data from '../../data.json';
import Car from '../../images/sport-car.png'

export default function MainConatainer({ trackRef }) {
    const [typedText, setTypedText] = useState('');
    const originalText =
        'Drrive the experience, travel the extraordinary. Your journey, our passion....';

    useEffect(() => {
        let currentIndex = 0;

        const typingInterval = setInterval(() => {
            setTypedText((prevText) => prevText + originalText[currentIndex]);
            currentIndex++;

            if (currentIndex === originalText.length-1) {
                clearInterval(typingInterval);
            }
        }, 80); // You can adjust the typing speed by changing the interval duration

        return () => {
            clearInterval(typingInterval);
        };
    }, []);
    return (
        <Styles.MainConatainer>
            <Styles.ProfileDiv showdiv={true} ref={trackRef} size="130px" ismargin="true">
                {/* <img src={Car} alt="Profile" width={100} height={100} /> */}
            </Styles.ProfileDiv>
            <Styles.HeadeTextContainer>
                <h1>
                    {typedText}
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
