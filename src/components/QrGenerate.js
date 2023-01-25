import React from 'react'
import QRCode from 'qrcode.react'

const QrGenerate = (props) => {
  return (
      <QRCode value={props} />
  )
}

export default QrGenerate