import React, { useEffect } from 'react';
    
class QrScan extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(event) {
    console.log("La tecla presionada es: ", event.key);
  }

  render() {
    return <div>Presiona cualquier tecla para ver la consola</div>;
  }
}

export default QrScan;



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