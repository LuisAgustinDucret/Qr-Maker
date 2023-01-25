import { useRouter } from "next/router";
import React from "react";
import QrId from "../../containers/QrId";

function QrsId() {
    const router = useRouter();
    const { id } = router.query;
    return (
    <>
 <QrId />
    </>
    )
}

export default QrsId