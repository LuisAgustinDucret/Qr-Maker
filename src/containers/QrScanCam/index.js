import React, { useState } from 'react';
import QRScanner from 'react-qr-scanner'
import { getDoc, updateDoc, doc, addDoc, collection } from "firebase/firestore"
import { db } from '../../services/firebase';
import {
    CheckNo,
    CheckSi,
    CheckScanner,
    CardMiddle,
    CardBottom,
  } from "./styles";



function QrByScanCam() {
    const [qrData, setQrData] = useState('');
    //const history = useHistory();

    //Muestra o no QR
    const [ check, setCheck ] = useState('')
    const [ checkHandle, setCheckHandle ] = useState(0)

    //Set QR Date
    const [ fechaLimite, setFechaLimite ] = useState('')
    const [ tipoUso, setTipoUso ] = useState('')
    const [ cantidadGenerada, setCantidadGenerada ] = useState(0)
    const [ cantidadVecesUsado, setCantidadVecesUsado ] = useState(0)

    const [ evento, setEvento ] = useState('')
    const [ creador, setCreador ] = useState('')
    const [ destinatario, setDestinatario ] = useState('')
    const [ id, setIdQr ] = useState('')

    function handleError(err) {
        console.log(err);
    }

    const getQrById = async (id) => {
        if (id === null) {
            console.log("El id no puede ser nulo");
            return;
        }
        const product = await getDoc( doc(db, "qrs", id.text) )
        if(product.exists()) {
            console.log(product.data())
            // seteo los valores a los useStates
            setIdQr(id.text);
            setFechaLimite(product.data().fechaLimite);
            setCantidadGenerada(product.data().cantidadGenerada);
            setCantidadVecesUsado(product.data().cantidadVecesUsado);
            setEvento(product.data().evento);
            setCreador(product.data().creador);
            setDestinatario(product.data().destinatario);
            // obtener valores de la base de datos
            const fechaLimite = product.data().fechaLimite;
            const cantidadGenerada = product.data().cantidadGenerada;
            const cantidadVecesUsado = product.data().cantidadVecesUsado;
            // convertir fecha limite a fecha
            const fechaLimiteFormat = new Date(fechaLimite);
            // obtener fecha actual
            const fechaActual = new Date();
            // comparar fechas
            if (fechaActual >= fechaLimiteFormat ||  cantidadVecesUsado >= cantidadGenerada) {
                console.log("No podes pasar");
                setCheck("No")
                // Set Timeout 5 seg
                setTimeout(() => {
                    setCheck("");
                  }, 5000);
            } else {
                // hacer algo si se cumple la condicion
                console.log("podes pasar");
                const product = doc(db, "qrs", id.text)
        const data = {cantidadVecesUsado: +cantidadVecesUsado + 1}
        await updateDoc(product, data) + console.log("updateando qr")
setCheck("Si")
// Set Timeout 5 seg
setTimeout(() => {
    setCheck("");
  }, 5000);

            }
        }else{
            console.log('El QR no existe')
        }
    }

    return (

        <div >

        {check === "" ?
            <QRScanner onScan={getQrById} onError={handleError} />: ""
        }

{check === "Si" ? 
    <div> <CheckSi>Podes pasar : <button onClick={() => setCheck("")}>Volver</button>  </CheckSi> </div> : check === "No" ?  <div> <CheckNo>No Podes pasar : <button onClick={() => setCheck("")}>Volver</button> </CheckNo> </div>:""
}

            
        </div>
    );
}

export default QrByScanCam;