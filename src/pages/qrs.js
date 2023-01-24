import { useRouter } from "next/router";
import React from "react";
import QrContainer from "../containers/QrLayout";

function Qrs() {
  const router = useRouter();
  const goToHome = () => {
    router.replace("home");
  };

  return (
    <>
      <QrContainer navigateToHome={goToHome} />
    </>
  );
}

export default Qrs;
