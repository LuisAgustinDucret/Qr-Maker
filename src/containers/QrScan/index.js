import React, { useState, useEffect } from 'react';
import { getDoc, updateDoc, doc, addDoc, collection } from "firebase/firestore"
import { db } from '../../services/firebase';
import { useSelector, useDispatch } from "react-redux";
import { suscribeQrID } from "../../store/actions/";
import QrScan from '../../components/QrScan';
import {
    CheckNo,
    CheckSi,
    CheckScanner,
    CardMiddle,
    CardBottom,
} from "./styles";

function QrByScan() {
    const [qrData, setQrData] = useState('');
    const dispatch = useDispatch();
    //const history = useHistory();
    //Muestra o no QR
    const [check, setCheck] = useState('')
  
    const [codigoConcatenado, setCodigoConcatenado] = useState([]);


    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [codigoConcatenado]);



    const handleKeyPress = event => {
        //console.log('El código QR es:', event.key);
        //console.log('El value es:', event.keyCode);
        if (codigoConcatenado.length < 13) {
            if (event.keyCode !== 13)
            setCodigoConcatenado(oldArray => [...oldArray, event.key]);
            if (codigoConcatenado.length === 12) {
                let getStrindID = codigoConcatenado.join('');
                getQrById(getStrindID)
            setCodigoConcatenado([]);
            }
           
        console.log("arrayAsArray", codigoConcatenado);
        
    }

    }

    const getQrById = async (id) => {
        if (id === null) {
            console.log("El id no puede ser nulo");
            return;
        }
        const qr = await getDoc(doc(db, "qrs", id))
        if (qr.exists()) {
            console.log(qr.data())
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
HOLA

            {check === "Si" ?
                <div> <CheckSi>Podes pasar : <button onClick={() => setCheck("")}>Volver</button>  </CheckSi> </div> : check === "No" ? <div> <CheckNo>No Podes pasar : <button onClick={() => setCheck("")}>Volver</button> </CheckNo> </div> : ""
            }
        </div>
    );
}

export default QrByScan;