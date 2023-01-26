import { suscribeToQrs } from '../../services';
import { suscribeToQrID } from '../../services';

export const TYPE_SET_QRS = 'SET_QRS';
export const TYPE_SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';
export const TYPE_SET_QRID = 'SET_QRID';


export const setModalVisibility = ({visibility, mode}) => {
  return {
    type: TYPE_SET_MODAL_VISIBILITY,
    payload: {visibility, mode},
  };
};

export const setQrs = (qrs) => {
  return {
    type: TYPE_SET_QRS,
    payload: qrs,
  };
};

export const suscribeQrs = () => (dispatch) => {
  return suscribeToQrs((data) => {
    const dataObj = Object.keys(data);
    const arrQrs = [];

     dataObj.forEach((item) => {    //item es el id   
      arrQrs.push({ ...data[item] })
    });
    //aca la data sigue bien
    dispatch(setQrs(arrQrs));
  });
};


export const setQrID = (qrID) => {
  return {
    type: TYPE_SET_QRID,
    payload: qrID,
  };
};

export const suscribeQrID = (id) => (dispatch) => {
  return suscribeToQrID((data) => {
    const dataObj = Object.keys(data);
    const arrQrs = [];

    dataObj.forEach((item) => {    //item es el id   
      arrQrs.push({ ...data[item] })
    });
    const filteredByID = arrQrs.filter(item => item.id === id);
    dispatch(setQrID(filteredByID));
  });
}; 