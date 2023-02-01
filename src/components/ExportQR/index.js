import React, { useEffect, useState } from "react";
import { PDFDownloadLink, Text, StyleSheet } from "@react-pdf/renderer";
import DocumentPDF from "../DocumentPDF";
import { styles } from './styles';

const ExportQR = ({ data, qrimg64 }) => {

  return (
    <div>
      {qrimg64 && (
        <PDFDownloadLink
          document={
            <DocumentPDF data={data} qrimg64={qrimg64} />
          }
          fileName="qrCode.pdf"
        >
          {({ loading }) => (
            <Text style={styles.ButtonDownload}>
              {loading ? "Cargando..." : "Descargar PDF"}
            </Text>
          )}
        </PDFDownloadLink>
      )}
    </div>
  );
};
export default ExportQR;