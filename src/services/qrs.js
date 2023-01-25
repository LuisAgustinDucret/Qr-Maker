import { db } from "./firebase";
export { db } from "./firebase";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
const qrsCollection = collection(db, "qrs");

export const suscribeToQrs = async (callback) => {
  try {
    const data = await getDocs(qrsCollection);
    const dataFinal = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    callback(dataFinal);
    //aca estamos obteniendo bien la data
  } catch (e) {
    console.log(e);
  }
};

export const suscribeToCategorias = (callback) => {};

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

export const updateQr = ({
  id,
  evento,
  fechaLimite,
  tipoUso,
  creador,
  destinatario,
  cantidadVecesUsado,
  cantidadGenerada,
}) => {
  try {
    return db.ref().child(`qrs/${id}`).update({
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

export const deleteQr = async (id) => {
  try {
    const qrDoc = doc(db, "qrs", id);
    await deleteDoc(qrDoc);
  } catch (error) {
    throw error;
  }
};
