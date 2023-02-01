import React from "react";
import { styles } from './styles';
import {
    Document,
    Page,
    Image,
    Text,
    PDFDownloadLink,
    View,
} from "@react-pdf/renderer";




const DocumentPDF = ({ data, qrimg64 }) => {




    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.view}>
                    <Image src={qrimg64} style={styles.QRImage} />
                </View>

                <View style={styles.view}>
                    <Text>Evento: {data.evento}</Text>
                </View>

                <View style={styles.view}>
                    <Text>Tipo de QR: {data.tipoUso}</Text>
                </View>

                <View style={styles.view}>
                    <Text>Fecha Limite: {data.fechaLimite}</Text>
                </View>

                <View style={styles.view}>
                    <Text>Limite de Usos: {data.cantidadGenerada}</Text>
                </View>

            </Page>
        </Document>
    )
}

export default DocumentPDF;