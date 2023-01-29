import React, { useState } from 'react';
import QrReader from 'react-qr-scanner'
import { getDoc, updateDoc, doc, addDoc, collection } from "firebase/firestore"
import { db } from '../../services/firebase';
import {
    CheckNo,
    CheckSi,
} from "./styles";

function QrByScanCam() {
    const [qrData, setQrData] = useState('');
    //const history = useHistory();
    //Muestra o no QR
    const [check, setCheck] = useState('')
    //Set QR Date
    const [fechaLimite, setFechaLimite] = useState('')
    const [tipoUso, setTipoUso] = useState('')
    const [cantidadGenerada, setCantidadGenerada] = useState(0)
    const [cantidadVecesUsado, setCantidadVecesUsado] = useState(0)

    const [evento, setEvento] = useState('')
    const [creador, setCreador] = useState('')
    const [destinatario, setDestinatario] = useState('')
    const [id, setIdQr] = useState('')

    function handleError(err) {
        console.log(err);
    }

    const getQrById = async (id) => {
        if (id === null) {
            console.log("El id no puede ser nulo");
            return;
        }
        const qr = await getDoc(doc(db, "qrs", id.text))
        if (qr.exists()) {
            console.log(qr.data())
            // seteo los valores a los useStates
            setIdQr(id.text);
            setFechaLimite(qr.data().fechaLimite);
            setCantidadGenerada(qr.data().cantidadGenerada);
            setCantidadVecesUsado(qr.data().cantidadVecesUsado);
            setEvento(qr.data().evento);
            setCreador(qr.data().creador);
            setDestinatario(qr.data().destinatario);
            // obtener valores de la base de datos
            const fechaLimite = qr.data().fechaLimite;
            const cantidadGenerada = qr.data().cantidadGenerada;
            const cantidadVecesUsado = qr.data().cantidadVecesUsado;
            // convertir fecha limite a fecha
            const fechaLimiteFormat = new Date(fechaLimite);
            // obtener fecha actual
            const fechaActual = new Date();
            // comparar fechas
            if (fechaActual >= fechaLimiteFormat || cantidadVecesUsado >= cantidadGenerada) {
                console.log("No podes pasar");
                setCheck("No")
                // Set Timeout 5 seg
                setTimeout(() => {
                    setCheck("");
                }, 5000);
            } else {
                // hacer algo si se cumple la condicion
                console.log("podes pasar");
                const qr = doc(db, "qrs", id.text)
                const data = { cantidadVecesUsado: +cantidadVecesUsado + 1 }
                await updateDoc(qr, data) + console.log("updateando qr")
                setCheck("Si")
                // Set Timeout 5 seg
                setTimeout(() => {
                    setCheck("");
                }, 5000);

            }
        } else {
            console.log('El QR no existe')
        }
    }

    return (

        <div >
            {check === "" ?
                <QrReader onScan={getQrById} onError={handleError} /> : ""
            }

            {check === "Si" ?
                <div> <CheckSi key="checksi">Podes pasar : <button onClick={() => setCheck("")}>Volver</button>  </CheckSi> </div> : check === "No" ? <div> <CheckNo key="checkno" >No Podes pasar : <button onClick={() => setCheck("")}>Volver</button> </CheckNo> </div> : ""
            }
        </div>
    );
}

export default QrByScanCam;
