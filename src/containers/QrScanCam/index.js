import React, { useState } from 'react';
import { collection, doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from '../../services';
import QRScanner from 'react-qr-scanner';



const qrsCollection = collection(db, "qrs");

const QrByScanCam = () => {
    // const dispatch = useDispatch();
     //const { id } = router.query;
    const router = useRouter();


    const [qrData, setQrData] = useState('');
    const [render, setRender] = useState('');

    

   //   useEffect(() => {
     //   dispatch(suscribeQrID());
     // }, []);


async function handleScan(data) {
        if (data) {
            setQrData(data);
            try {
                const doc = await qrsCollection.doc(data).get()
                if (doc.exists) {
                    const data = doc.data();
                    product.data().evento === "Brutus park" ? setRender("verde") : setRender("rojo")
                    //validate the data
                  // if(data.isValid){
                    if(data.exists){
                        //history.push('/successPage');
                        //router.replace(`/qrs/`);
                        setQrData("hola")
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }


    async function handleScan(data) {

            setQrData(data);

    }


  return (
 

<div>
{render === "" ?

<QRScanner onScan={handleScan} facingMode='user'/>


    
    
    : "" }


{render== "verde" ?

"PODES PASAR"
    
    : render== "rojo" ? "NO PODES PASAR" : "" }

  

{qrData}
</div>

);
}

export default QrByScanCam;



