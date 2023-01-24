import { db } from '.';
export { db } from './firebase';

export const suscribeToQrs = (callback) => {
  try {
    db.ref()
      .child('Qrs')
      .orderByChild("inactive")
      .equalTo(false)
      .on('value', (snapshot) => {
        callback(snapshot.val() || []);
      });
  } catch (error) {
    throw error;
  }
};

export const saveQr = async ({
  evento,
  fechaLimite,
}) => {
  try {
    const newQrId = db.ref().child('Qrs').push().key;
    console.log('dedscripcion desde service', evento)
    return await db.ref().child(`Qrs/${newQrId}`).set({
      id: newQrId,
      evento,
      fechaLimite,
    });
  }catch(error) {
    throw error;
  }
};

export const updateQr = ({
  id,
  evento,
  fechaLimite,
}) => {
  try {
    return db.ref().child(`Qrs/${id}`).update({
      evento,
      fechaLimite,
      });
  }catch(error) {
    throw error;
  }
};

export const deleteQr = (id) => {
  try {
    return db.ref().child(`Qrs/${id}`).update({
      inactive: true,
    });
  }catch(error) {
    throw error;
  }
};