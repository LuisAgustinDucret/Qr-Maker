import { db } from "./firebase";
export { db } from "./firebase";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
//import { collection, addDoc, getDoc, doc } from 'firebase/firestore'

export const suscribeToQrs = (callback) => {
  try {
    firebase.initializeApp(config);
  } catch (e) {
    // console.log(firebase init error)
  }
};

export const suscribeToCategorias = (callback) => {
  
};
const qrsCollection = collection(db, "qrs");

/*export const QRGenerator = async (e) => {
  e.preventDefault();
  const docRef = await addDoc(qrsCollection, {
    evento: evento,
    fechaLimite: fechaLimite,
    creador: credor,
    destinatario: destinatario,
    tipoUso: tipoUso,
    cantidadVecesUsado: cantidadVecesUsado,
    cantidadGenerada: cantidadGenerada,
  });
  //setDocId(docRef.id);
};*/

export const saveQr = async ({
  evento,
  fechaLimite,
  tipoUso,
  creador,
  destinatario,
  cantidadVecesUsado,
  cantidadGenerada,
}) => {
  try {
    const docRef = await addDoc(qrsCollection, {
      evento: evento,
      fechaLimite: fechaLimite,
      creador: creador,
      destinatario: destinatario,
      tipoUso: tipoUso,
      cantidadVecesUsado: cantidadVecesUsado,
      cantidadGenerada: cantidadGenerada,
    });
   // setDocId(docRef.id);
  } catch (error) {
    throw error;
  }
};

export const updateQr = ({ id, evento, fechaLimite }) => {
  try {
    return db.ref().child(`Qrs/${id}`).update({
      evento,
      fechaLimite,
      tipoUso,
      creador,
      destinatario,
      cantidadVecesUsado,
      cantidadGenerada,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteQr = (id) => {
  try {
    return db.ref().child(`Qrs/${id}`).update({
      inactive: true,
    });
  } catch (error) {
    throw error;
  }
};

/*try {
    db.ref()
      .child('Qrs')
      .orderByChild("inactive")
      .equalTo(false)
      .on('value', (snapshot) => {
        callback(snapshot.val() || []);
      });
  } catch (error) {
    throw error;
  }*/
