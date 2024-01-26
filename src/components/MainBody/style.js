import styled from 'styled-components';

export const FullPage = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
`

export const NavbarDiv = styled.div`
    position: fixed;
    height: 100px;
    width: 400px;
    background: #D7D5D5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #CAA3A3;
    z-index: 1;

    b{
        color: #393434;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 800;
        line-height: normal;
        font-family: 'Roboto';
    }

    @media (max-width: 431px){
        width: 100%;
    }

    @media (max-width: 375px){
        height: 80px;
        b{
            font-size: ${props => props.showdiv ? "14px" : ""};
        }
    }
`

export const InfoDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

export const Info = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`

export const Contact = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:nth-child(2), a {
        text-decoration: none;
        color: #4F33FF;
        font-weight: bold;
    }

    span:nth-child(2):hover{
        cursor: pointer;
    }
`

export const ProfileDiv = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    border-radius: 100px;
    background-color: grey;
    display: ${props => props.showdiv ? 'flex' : 'none'};
    margin-top: ${props => props.ismargin ? '120px' : ''};
    margin-bottom: ${props => props.ismargin ? '20px' : ''};

    img{
        border-radius: 100%;
        transform: rotate(-20deg);
    }

    @media (max-width: 375px){
        width: ${props => props.shownavdiv ? "60px" : ""};
        height: ${props => props.shownavdiv ? "60px" : ""};
    }
`

export const MainConatainer = styled.div`
    width: 400px;
    background: #D7D5D5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
        width: 300px;
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
            height: 45px;
            left: 350px;
            transform: ${props => props.carAnim ? 'translate(-205px)' : ''};
            transition: transform 1s ease;
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

    @media (max-width: 375px){
        h1{
            font-size: 16px;
        }
    }
`

export const PriceCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    padding: 2px 10px;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
    text-align: center;
    p{
        color: red;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    span{
        color: #616063;
        font-size: 10px;
    }
`

export const CarImagesDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        margin: 10px 0px;
        width: 95%;
    }
`