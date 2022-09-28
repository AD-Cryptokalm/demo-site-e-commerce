import axios from "axios";


export const GET_PRODUCT = "GET_PRODUCT"

export const getProduct = (id) => {
  return async (dispatch) => {
    try {
          const res = await axios({
              method: "GET",
              url: `http://localhost:3000/api/product/${id}`,
          });
          dispatch({ type: GET_PRODUCT, payload: res.data });
      } catch (err) {
          return console.log(err);
      }
  };
};