import { useRouter } from "next/router";
import React from "react";
import QrContainer from "../containers/QrLayout";

function Qrs() {
  const router = useRouter();
  const goToHome = () => {
    router.replace("home");
  };
  const goToQrsId = (id) => {
    router.push(`/qrs/${id}`);
  };
  return (
    <>
       <QrContainer navigateToHome={goToHome} navigateToQrsId={goToQrsId}/>
    </>
  );
}

export default Qrs;