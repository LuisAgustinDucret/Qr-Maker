import React, { useEffect, useState } from "react";
import { PDFDownloadLink, Text, StyleSheet } from "@react-pdf/renderer";
import DocumentPDF from "../DocumentPDF";
import { styles } from './styles';
import Button from "../../components/Button";

const ExportQR = ({ data, qrimg64 }) => {

  return (

    <div>

      {qrimg64 && (

        <PDFDownloadLink
          style={styles.ButtonDownload}
          document={
            <DocumentPDF data={data} qrimg64={qrimg64} />
          }
          fileName="qrCode.pdf"
        >
          {({ loading }) => (
            <Button

              size="small"
              text="Descargar QR">
              {loading ? "Cargando..." : "Descargar PDF"}
            </Button>
          )}
        </PDFDownloadLink>
      )}
    </div>
  );
};
export default ExportQR;