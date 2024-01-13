import styled from 'styled-components';

export const MainConatainer = styled.div`
    width: 400px;
    background: #D7D5D5;
    padding: 10px 0px;

    @media (max-width: 431px){
        width: 100%;
    }
`

export const HeadeTextContainer = styled.div`
    width: 100%;
    height: auto;
    flex-shrink: 0;
    background: #DFD9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        width: 85%;
        color: #000;
        font-family: Inter;
        font-size: 32px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        text-align: left;
        font-family: 'Roboto';
        position: relative;
        img{
            position: absolute;
            width: 50px;
            height: 50px;
        }
    }
`

export const PriceHead = styled.div`
    width: 50%;
    display: inline-flex;
    padding: 2px;
    justify-content: center;
    align-items: center;
    background: #060505;
    margin-top: 40px;
    h1{
        color: #FFF;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
    }
`

export const PriceCard = styled.div`
    display: flex;
    width: 80%;
    height: 41px;
    padding: 2px 10px;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    background: ${props => props.setBg%2 !== 0 ? "#EEDBDB" : "#FFF"} ;
    margin-top: ${props => props.setBg === 0 ? '20px' : '10px'};

    p{
        color: #000;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`