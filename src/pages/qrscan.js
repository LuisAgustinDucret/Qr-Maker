import { useRouter } from "next/router";
import React from "react";
import QrByScan from "../containers/QrScan";

function QrScan() {
  const router = useRouter();


  return (
    <>
       <QrByScan />
    </>
  );
}

export default QrScan;