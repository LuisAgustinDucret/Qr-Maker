import React from 'react'
import QRCode from 'qrcode.react'

const QrGenerate = (props) => {
  return (
      <QRCode value={props} size={300}/>
  )
}

export default QrGenerate