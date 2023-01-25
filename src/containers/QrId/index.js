import React, { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/router";

import QrGenerate from "../../components/QrGenerate";

const QrId = () => {
    const router = useRouter();
    const { id } = router.query;





  return (
    <>
      {QrGenerate(id)}
    </>
  );
};

export default QrId;
