import { useRouter } from "next/router";
import React from "react";
import QrByScanCam from "../containers/QrScanCam";

function QrScanCam() {
  const router = useRouter();


  return (
    <>
       <QrByScanCam />
    </>
  );
}

export default QrScanCam;