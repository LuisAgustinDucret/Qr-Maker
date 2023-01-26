import React, { useState } from 'react';
import { collection, doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from '../../services';
import QRScanner from 'react-qr-scanner';



const qrsCollection = collection(db, "qrs");

const QrByScanCam = () => {
    // const dispatch = useDispatch();
     //const { id } = router.query;
    const router = useRouter();


    const [qrData, setQrData] = useState('');


    

   //   useEffect(() => {
     //   dispatch(suscribeQrID());
     // }, []);


async function handleScan(data) {
        if (data) {
            setQrData(data);
            try {
                const doc = await getDoc( doc(db, "qrs", data) )
                if (doc.exists) {
                    const data = doc.data();
                    altert("hay ID", id)
                    //validate the data
                  // if(data.isValid){
                    if(data.exists){
                        altert("hay validacion", id)
                        //history.push('/successPage');
                        router.replace(`/qrs/`);
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


  return (
 
    <div>
    <QRScanner 
    onScan={handleScan}
    facingMode='rear'
    />
    {qrData}
</div>
);
}

export default QrByScanCam;



