import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveQr, updateQr, deleteQr, QrGenerator } from "../../services";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import TextField from "../../components/TextField";
import DataTable from "../../components/DataTable";
import {
  Container,
  CardContainer,
  CardTop,
  CardMiddle,
  CardBottom,
} from "./styles";
import Typography from "@mui/material/Typography";
import { QrsDataTable } from "../../entities";
import { getKeys, mapPropertiesToColumns } from "../../utils";
import { suscribeQrs, setModalVisibility } from "../../store/actions/";

const QrLayout = () => {
  const [id, setId] = useState("");
  const [evento, setEvento] = useState("");
  const [fechaLimite, setFechaLimite] = useState("");
  const [cantidadVecesUsado, setCantidadVecesUsado] = useState(0);
  const [cantidadGenerada, setCantidadGenerada] = useState(0);
  const [tipoUso, setTipoUso] = useState("");
  const [creador, setCreador] = useState("");
  const [destinatario, setDestinatario] = useState("");

  const dispatch = useDispatch();

  const {
    qrs,
    modal: { isModalOpen, mode },
  } = useSelector(({ qr }) => {
    console.log("qrs", qr);
    return {
      qrs: qr.qrs,
      modal: { isModalOpen: qr.modal.visibility, mode: qr.modal.mode },
    };
  });

  useEffect(() => {
    dispatch(suscribeQrs());
  }, []);

  const openModal = useCallback(
    (modalMode) => {
      console.log("modalMode", modalMode);
      dispatch(setModalVisibility({ visibility: true, mode: modalMode }));
    },
    [setModalVisibility]
  );

  const closeModal = useCallback(() => {
    dispatch(setModalVisibility({ visibility: false, mode: "" }));
  }, [setModalVisibility]);

  const resetValues = useCallback(() => {
    setId("");
    setEvento("");
    setFechaLimite("");
  }, []);

  const handleGuardar = useCallback(() => {
    if (mode === "edit") {
      updateQr({
        id,
        evento,
        fechaLimite,
        tipoUso,
        creador,
        destinatario,
        cantidadVecesUsado,
        cantidadGenerada,
      });
    } else {
      saveQr({
        evento,
        fechaLimite,
        tipoUso,
        creador,
        destinatario,
        cantidadVecesUsado,
        cantidadGenerada,
      });
    }
    closeModal();
    resetValues();
  }, [
    evento,
    fechaLimite,
    tipoUso,
    creador,
    destinatario,
    cantidadVecesUsado,
    cantidadGenerada,
  ]);

  const modificarQr = (index) => {
    const value = qrs.find((item, i) => {
      return i === index;
    });

    setQrValues(value);
    openModal("edit");
  };

  const handleQrDelete = (index) => {
    const value = qrs.find((item, i) => {
      return i === index;
    });
    console.log("QrDeleted", value);
    deleteQr(value.id);
  };

  const setQrValues = (qr) => {
    setId(qr.id);
    setEvento(qr.evento);
    setFechaLimite(qr.fechaLimite);
  };

  const handleChangeText = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case "evento":
        setEvento(value);
        return;
      case "fechaLimite":
        setFechaLimite(value);
        return;
      case "creador":
        setCreador(value);
        return;
      case "destinatario":
        setDestinatario(value);
        return;
      case "tipoUso":
        setTipoUso(value);
        return;
      case "cantidadVecesUsado":
        setCantidadVecesUsado(value);
        return;
      case "cantidadGenerada":
        setCantidadGenerada(value);
        return;

      default:
        return;
    }
  };

  const renderModalContent = useCallback(() => {
    return (
      <>
        <TextField
          name="evento"
          label="Evento"
          value={evento}
          onChange={handleChangeText}
        />
        <TextField
          name="tipoUso"
          label="TipoUso"
          value={tipoUso}
          onChange={handleChangeText}
        />
        <TextField
          name="cantidadGenerada"
          label="Cantidad Generada"
          value={cantidadGenerada}
          onChange={handleChangeText}
        />
        <TextField
          name="cantidadVecesUsado"
          label="CantidadVecesUsado"
          value={cantidadVecesUsado}
          onChange={handleChangeText}
        />
        <TextField
          name="fechaLimite"
          label="FechaLimite"
          value={fechaLimite}
          onChange={handleChangeText}
        />
        <TextField
          name="creador"
          label="Creador"
          value={creador}
          onChange={handleChangeText}
        />
        <TextField
          name="destinatario"
          label="Destinatario"
          value={destinatario}
          onChange={handleChangeText}
        />
      </>
    );
  }, [
    id,
    evento,
    fechaLimite,
    tipoUso,
    creador,
    destinatario,
    cantidadVecesUsado,
    cantidadGenerada,
  ]);

  const renderModalControls = useCallback(() => {
    return (
      <>
        <Button
          size="small"
          text="Cancelar"
          variant="outlined"
          onClick={closeModal}
        />
        <Button
          size="small"
          text="Guardar"
          variant="outlined"
          onClick={handleGuardar}
        />
      </>
    );
  }, [handleGuardar]);

  const renderColumn = () => {
    const columns = getKeys(new QrsDataTable("", "", 0, 0, 0)).map((key) => {
      return mapPropertiesToColumns(key, 200);
    });
    return columns;
  };

  return (
    <>
      <Container>
        <Typography variant="h4" text-align="center">
          Qrs
        </Typography>
        <CardContainer width="100%" elevation={3}>
          <CardTop></CardTop>
          <CardMiddle>
            <DataTable
              data={qrs.map(
                ({
                  id,
                  evento,
                  tipoUso,
                  cantidadGenerada,
                  cantidadVecesUsado,
                  limiteHorario,
                  cerador,
                  destinatario,
                }) => {
                  return new QrsDataTable(
                    id,
                    evento,
                    tipoUso,
                    cantidadGenerada,
                    cantidadVecesUsado,
                    limiteHorario,
                    cerador,
                    destinatario
                  );
                }
              )}
              pageSize={10}
              columns={renderColumn()}
              onEditClick={modificarQr}
              onDeleteClick={handleQrDelete}
            />
          </CardMiddle>
          <CardBottom>
            <Button text="Volver" width={"17%"} />
            <Button
              text="Agregar"
              onClick={() => openModal("create")}
              width={"17%"}
            />
          </CardBottom>
        </CardContainer>
      </Container>
      <Modal
        title={mode === "edit" ? "Editar qr" : "Agregar nuevo qr"}
        open={isModalOpen}
        mode={mode}
        handleClose={closeModal}
        content={renderModalContent()}
        controls={renderModalControls()}
      />
    </>
  );
};

export default QrLayout;
