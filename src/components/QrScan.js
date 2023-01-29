import React, { useEffect, useState } from 'react';


const QrScan = () => {
    const [qr, setQr] = useState('');
    const [qrId, setQrId] = useState('')
    const [code, setCode] = useState('')
    const [theArray, setTheArray] = useState([]);
    //const qrpa;

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress);
        return () => {
            document.removeEventListener('keypress', handleKeyPress);
        };
    }, [theArray]);


    
    const handleKeyPress = event => {
        //console.log('El código QR es:', event.key);
        //console.log('El value es:', event.keyCode);
        if(event.keyCode !== 13)
            setTheArray(oldArray => [...oldArray, event.key]);
        
        console.log("arrayAsArray", theArray);
    }

    /*
            let qrCodeString = theArray.join('');
        console.log("br1", qrCodeString)
    
    
    export const suscribeQrID = (id) => (dispatch) => {
        return suscribeToQrID(id, (data) => {
          //console.log("data", data)
          const newArray = [];
          const newObject = {};
          for (const key in data) {
            newObject[data[key][0]] = data[key][1];
          }
          newArray.push(newObject);
      
          const filteredByID = newArray;
          dispatch(setQrID(filteredByID));
        });
      };*/






    return <div>Presiona cualquier tecla para ver la consola</div>;
}

export default QrScan;

/*
QrScan.js?677f:18 La tecla presionada es:  7
QrScan.js?677f:18 La tecla presionada es:  9
QrScan.js?677f:18 La tecla presionada es:  3
QrScan.js?677f:18 La tecla presionada es:  7
QrScan.js?677f:18 La tecla presionada es:  0
QrScan.js?677f:18 La tecla presionada es:  4
3QrScan.js?677f:18 La tecla presionada es:  0
QrScan.js?677f:18 La tecla presionada es:  9
2QrScan.js?677f:18 La tecla presionada es:  1
QrScan.js?677f:18 La tecla presionada es:  Enter
*/
/*const getQrById = async (id) => {
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
}*/