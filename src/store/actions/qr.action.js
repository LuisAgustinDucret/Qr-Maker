import { suscribeToQrs } from '../../services';

export const TYPE_SET_QRS = 'SET_QRS';
export const TYPE_SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';

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
    /* console.log('typeof arrCategororias',typeof arrCategororias, arrCategororias, arrCategororias.length); */
    dispatch(setQrs(arrQrs));
  });
};