import React, { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import QrGenerate from "../../components/QrGenerate";
import { suscribeQrID} from "../../store/actions/";
import Modal from "../../components/Modal";
import Typography from "@mui/material/Typography";
import DataTable from "../../components/DataTable";
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
  } from "./styles";

const QrId = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;

    const {
        qrID,

      } = useSelector(({ qr }) => {
        return {
          qrID: qr.qrID,

        };
      });

      useEffect(() => {
        dispatch(suscribeQrID(id));
      }, [id]);

   
      const renderColumn = () => {
        const columns = getKeys(new QrsDataTable()).map((key) => {
          return mapPropertiesToColumns(key, 200);
        });
        return columns;
      };


  return (

<>
{console.log(qrID)}
               
<Container>   



{ qrID.map( (qrs) => (


  <div>
    <CardTop>
    <b> {qrs.evento}</b>
      </CardTop >
  
<Card  >


{QrGenerate(id)}
<div>{qrs.id}</div>
  <Line></Line>

  <DataContainer>

  <div>
  <ul>

  <li><b>Evento:</b> {qrs.evento}  </li>
  <li><b>Tipo de QR:</b> {qrs.tipoUso}</li>
  <li><b>Fecha Limite:</b> {qrs.fechaLimite} </li>
  <li><b>Limite de Usos:</b> {qrs.cantidadGenerada}</li>
  </ul>
  </div>

</DataContainer>


        

<Line></Line>


<DataOcultaContainer>
<ul>
<p><b> Datos Ocultos</b></p>
<li><b>Limite de Usos:</b> {qrs.cantidadVecesUsado}</li>
<li><b>Creador:</b> {qrs.creador}</li>
<li><b>Destinatario:</b> {qrs.destinatario}</li>
</ul>
</DataOcultaContainer>
</Card></div>
)) }
</Container>

       

</>



  );
};

export default QrId;



