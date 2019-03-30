import styled from 'styled-components';

export const Element = styled.div`
    display: block;
    color: ${props => props.name === "name" ? "blue" : "#000"};
    width: 25%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-top: 1px solid #0000004a;
`;

export const CheckBox = styled.input`
    width: 5%;
`;

export const EmptyMsg = styled.div`
    color: Orange;
`;

export const Action = styled.div`
    display: flex;
    justify-content: space-between;
    width: 5%;
`;

export const Edit = styled.div`
    cursor: pointer;
`;

export const Delete = styled.div`
    cursor: pointer;
    color: red;
`;