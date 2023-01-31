import React, { useEffect, useState } from "react";
import {PDFDownloadLink,} from "@react-pdf/renderer";
import DocumentPDF from "../DocumentPDF";

const ExportQR = ({ data, qrimg64 }) => {
  return (
    <div>
      {qrimg64 && (
        <PDFDownloadLink
          document={
            <DocumentPDF data={ data } qrimg64={qrimg64}/>
          }
          fileName="qrCode.pdf"
        >
          {({ loading }) => (loading ? "Cargando..." : "Descargar PDF")}
        </PDFDownloadLink>
      )}
    </div>
  );
};
export default ExportQR;