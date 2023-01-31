import styled from 'styled-components';
import { StyleSheet } from '@react-pdf/renderer';

export const Container = styled.div`
content: "";
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #E8E8E8;


`;

export const Card = styled.div`
content: "";
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: white;
width: 90vw;
margin-bottom: 20px;
border-radius: 10px;
padding: 20px;

`;

export const CardTop = styled.div`
content: "";
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
width: auto;
padding: 10px;
border-radius: 10px;
color: white;
margin-top: 25px;
margin-bottom: 10px;

`;


export const Line = styled.div`
border-bottom: 2px solid;
opacity: 0.2;
margin-bottom: 10px;
width: 90%;
padding: 10px


`;

export const DataContainer = styled.div`

width: 80%;
padding: 10px
list-style: none;

`;

export const DataOcultaContainer = styled.div`
margin-bottom: 10px;
width: 80%;
padding: 10px
list-style: none;

`;


export const ButtonContainer = styled.div`


`;


export const styles = StyleSheet.create({

    page: {
        backgroundColor: 'white',
        display: 'block',
    },

    view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },

    QRImage: {
        width: '100%',
        height: '100%',
    },

    Text: {
        color: 'black',
        size: '11em'
    }
    
    })
