import axios from "axios";


export const GET_ORDER = "GET_ORDER"

export const getOrder = (orderId) => {
  return async (dispatch) => {
    try {
          const res = await axios({
              method: "GET",
              url: `http://localhost:3000/api/order/${orderId}`,
          });
          dispatch({ type: GET_ORDER, payload: res.data });
      } catch (err) {
          return console.log(err);
      }
  };
};