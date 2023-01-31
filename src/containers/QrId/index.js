import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import QRCode from 'qrcode';
import { suscribeQrID } from "../../store/actions/";
import { getKeys, mapPropertiesToColumns } from "../../utils";
import { QrsDataTable } from "../../entities";
import {
  Container,
  Card,
  CardTop,
  Line,
  DataContainer,
  DataOcultaContainer,
  ButtonContainer,
  ul,
  styles,
} from "./styles";
import { PDFDownloadLink, View } from '@react-pdf/renderer';
import { Document, Page, Image, Text, StyleSheet } from '@react-pdf/renderer';
import QrGenerate from "../../components/QrGenerate";

const QrId = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [base64, setBase64] = useState(null);

  const { qrID } = useSelector(({ qr }) => {
    return {
      qrID: qr.qrID,
    };
  });

  useEffect(() => {
    dispatch(suscribeQrID(id));
  }, [id]);

  const handleQRCode = () => {
    QRCode.toDataURL(id, (err, url) => {
      setBase64(url);
    });
  };

  useEffect(() => {
    handleQRCode();
  }, [id]);

  return (
    <>
        

      <Container>
        {qrID.map((qrs) => (
          <div key={`${qrs.id}-div`}>
            <CardTop>
              <b> {qrs.evento}</b>
            </CardTop>
            <Card>
            {QrGenerate(id)}
              <Line></Line>
              <DataContainer key={`${qrs.id}-DataContainer`}>
                <div>
                  <ul>
                    <li>
                      <b>Evento:</b> {qrs.evento}
                    </li>
                    <li>
                      <b>Tipo de QR:</b> {qrs.tipoUso}
                    </li>
                    <li>
                      <b>Fecha Limite:</b> {qrs.fechaLimite}
                    </li>
                    <li>
                      <b>Limite de Usos:</b> {qrs.cantidadGenerada}
                    </li>
                  </ul>
                </div>
              </DataContainer>
              <Line></Line>

              <DataOcultaContainer key={`${qrs.id}-DataOcultaContainer`}>
                <ul>
                  <p>
                    <b> Datos Ocultos</b>
                  </p>
                  <li>
                    <b>Limite de Usos:</b> {qrs.cantidadVecesUsado}
                  </li>
                  <li>
                    <b>Creador:</b> {qrs.creador}
                  </li>
                  <li>
                    <b>Destinatario:</b> {qrs.destinatario}
                  </li>
                </ul>
              </DataOcultaContainer>

              <Line></Line>

              <div>
  {base64 && (
    <PDFDownloadLink
      document={
<Document>
  <Page style={styles.page}>
  {qrID.map((qrs) => (
      <div key={`${qrs.id}-div`}>
        <View style={styles.view}><Image src={base64}  style={styles.QRImage}/></View>

                <View style={styles.view}><Text>Evento: {qrs.evento}</Text></View>

                <View style={styles.view}><Text>Tipo de QR: {qrs.tipoUso}</Text></View>

                <View style={styles.view}><Text>Fecha Limite: {qrs.fechaLimite}</Text></View>

                <View style={styles.view}><Text>Limite de Usos: {qrs.cantidadGenerada}</Text></View>

            </div>
    ))}

  </Page>
</Document>
      }
      fileName="qrCode.pdf"
    >
      {({ blob, url, loading, error }) => (loading ? 'Cargando...' : 'Descargar PDF')}
    </PDFDownloadLink>
  )}
</div>


            </Card>
          </div>
        ))}
      </Container>
    </>
  );
};

export default QrId;
