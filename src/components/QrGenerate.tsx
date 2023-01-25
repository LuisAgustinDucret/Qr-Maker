import React from 'react'
import QRCode from 'qrcode.react'

const QrGenerate = () => {
  const qr = {
    evento: "BrutusBar",
    tipo_uso: "entrada",
    cantidad: 4,
    usadas: 2
  }
  const data = JSON.stringify(qr) // convierto los atributos a string
  return (
    <QRCode value={data} />
  )
}

export default QrGenerate