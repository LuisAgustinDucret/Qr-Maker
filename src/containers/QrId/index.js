import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import QRCode from 'qrcode';
import { suscribeQrID } from "../../store/actions/";
import {
  Container,
  Card,
  CardTop,
  Line,
  DataContainer,
  DataOcultaContainer,
} from "./styles";
import QrGenerate from "../../components/QrGenerate";
import ExportQR from "../../components/ExportQR";


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

              <ExportQR data={qrID[0]}  qrimg64={base64}  />

            </Card>
          </div>
        ))}
      </Container>
    </>
  );
}

export default QrId;

