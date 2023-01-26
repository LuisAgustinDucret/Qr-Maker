import React, { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import QrGenerate from "../../components/QrGenerate";
import { suscribeQrID} from "../../store/actions/";
import Modal from "../../components/Modal";
import { Document, Page } from 'react-pdf';
import Typography from "@mui/material/Typography";
import DataTable from "../../components/DataTable";
import { getKeys, mapPropertiesToColumns } from "../../utils";
import { QrsDataTable } from "../../entities";
import {
    Container,
    CardContainer,
    CardTop,
    CardMiddle,
    CardBottom,
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

{QrGenerate(id)}
<Container>
  <Typography variant="h4" text-align="center">
    Muestra de Qrs generados.
  </Typography>
  <CardContainer width="100%" elevation={3}>
    <CardTop></CardTop>
    <CardMiddle>
      <DataTable
        data={qrID.map(
          ({

            id,
            evento,
            fechaLimite,
            creador,
            destinatario,
            tipoUso,
            cantidadGenerada,
            cantidadVecesUsado,
          }) => {
            return new QrsDataTable(
                "hola",
              id,
              evento,
              fechaLimite,
              creador,
              destinatario,
              tipoUso,
              cantidadGenerada,
              cantidadVecesUsado
            );
          }
        )}
        pageSize={10}
        columns={renderColumn()}

      />
      
    </CardMiddle>
  </CardContainer>
</Container>

</>




  );
};

export default QrId;



