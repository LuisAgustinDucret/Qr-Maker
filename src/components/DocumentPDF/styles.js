import { StyleSheet } from '@react-pdf/renderer';

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
