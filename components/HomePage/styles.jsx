import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px;
    min-height: 86vh;
`
export const Header = styled.div`
    margin-bottom: 44px;
`

export const Body = styled.div`
    margin: 30px 0;
`; 

export const Footer = styled.div`
    display: flex;
    align-self: center;
    width: 30%;
    justify-content: space-evenly;
    margin-top: 30px;
`;

export const FooterEl = styled.div`
    border: 1px solid;
    padding: 3px;
    width: 15px;
    height: 15px;
    text-align: center;
    color: ${props => props.isActive === true ? 'white' : 'black'};
    background-color: ${props => props.isActive === true ? 'blue' : 'white'};
    border-color: ${props => props.isActive === true ? 'blue' : 'black'};
    cursor: pointer;
`;

export const Arrow = styled.div`
    width: 15px:
    height: 15px;
    textAlign: center;
    cursor: pointer;
`;