import React, { useState } from 'react';
import { useRouter } from "next/router";


import QRScanner from 'react-qr-scanner'


import { getDoc, updateDoc, doc, addDoc, collection } from "firebase/firestore"
import { db } from '../../services/firebase';






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

    async function handleScan(data) {
        if (data) {
            setQrData(data);
            try {
                //const doc = await firestore.get({ collection: 'collectionName', doc: data });
                //
                if (doc.exists) {
                    const data = doc.data();
                    //validate the data
                    if(data.isValid){
                       // history.push('/successPage');
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    /*async function handleScan2(id) {
        if (id) {
            const productSnapshot = await getDoc( doc(db, "qrs", id) )
            if(productSnapshot.exists) {
                console.log(productSnapshot.data().evento) 
            }else{
                console.log('El producto no existe')
            }
        } else {
            console.log("No data received");
        }
    }*/


    const getProductById = async (id) => {
        if (id === null) {
            console.log("El id no puede ser nulo");
            return;
        }
        
        const product = await getDoc( doc(db, "qrs", id.text) )
        if(product.exists() && checkHandle === 0) {
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
            } else {
                // hacer algo si se cumple la condicion


                console.log("podes pasar");
                const product = doc(db, "qrs", id.text)
        const data = {cantidadVecesUsado: +cantidadVecesUsado + 1}
        setCheckHandle(1) 
        await updateDoc(product, data) + console.log("updateando qr")
setCheck("Si")
      

            }
        }else{
            console.log('El producto no existe')
        }
    }



    const updateQR = async (id) => {

        const product = doc(db, "qrs", id)
        const data = {evento: evento,fechaLimite: fechaLimite, creador: creador, destinatario: destinatario, tipoUso: tipoUso, cantidadGenerada: cantidadGenerada, cantidadVecesUsado: cantidadVecesUsado + 1}
        await updateDoc(product, data)
        console.log("qr actualziado");
    }
    


    return (
        <div>

        {check === "" ?
            <QRScanner onScan={getProductById} onError={handleError} /> : ""
        }

{check === "Si" ? 
    <div> Podes pasar : <button onClick={() => setCheck("")}>Volver</button>  </div> : check === "No" ? <div> No Podes pasar : <button onClick={() => setCheck("")}>Volver</button> </div>: ""
}

            
        </div>
    );
}

export default QrByScanCam;